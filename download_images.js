import fs from 'fs';
import https from 'https';
import path from 'path';

const agent = new https.Agent({ rejectUnauthorized: false });
const options = {
  agent,
  headers: {
    'User-Agent': 'FootReactApp/1.0 (contact@example.com) Node.js/21'
  }
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
         reject(new Error(`Failed with status code: ${res.statusCode}`));
         return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const images = [
  // Players
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Thibaut_Courtois_2018.jpg/300px-Thibaut_Courtois_2018.jpg', dest: 'courtois.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Virgil_van_Dijk_2023.jpg/300px-Virgil_van_Dijk_2023.jpg', dest: 'vandijk.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jude_Bellingham_2023.jpg/300px-Jude_Bellingham_2023.jpg', dest: 'bellingham.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kylian_Mbapp%C3%A9_2022_%28cropped%29.jpg/300px-Kylian_Mbapp%C3%A9_2022_%28cropped%29.jpg', dest: 'mbappe.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/300px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', dest: 'messi.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vinicius_Jr_2021.jpg/300px-Vinicius_Jr_2021.jpg', dest: 'vini.jpg' },

  // Team Logos
  { url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/200px-Logo_Real_Madrid.svg.png', dest: 'real_madrid.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/200px-Logo_FC_Barcelona.svg.png', dest: 'barcelona.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/ba/Logo_Manchester_City_2016.svg/200px-Logo_Manchester_City_2016.svg.png', dest: 'man_city.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/53/Arsenal_FC_2002_logo.svg/200px-Arsenal_FC_2002_logo.svg.png', dest: 'arsenal.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Inter_Miami_CF_logo.svg/200px-Inter_Miami_CF_logo.svg.png', dest: 'inter_miami.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/LA_Galaxy_logo.svg/200px-LA_Galaxy_logo.svg.png', dest: 'la_galaxy.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_FC_Liverpool.svg/200px-Logo_FC_Liverpool.svg.png', dest: 'liverpool.png' },

  // Flags
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/100px-Flag_of_Belgium.svg.png', dest: 'be.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/100px-Flag_of_the_Netherlands.svg.png', dest: 'nl.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/100px-Flag_of_England.svg.png', dest: 'eng.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/100px-Flag_of_France.svg.png', dest: 'fr.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/100px-Flag_of_Argentina.svg.png', dest: 'ar.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/100px-Flag_of_Brazil.svg.png', dest: 'br.png' }
];

async function run() {
  for (const img of images) {
    console.log(`Downloading ${img.dest}...`);
    try {
      await download(img.url, path.join('public', 'images', img.dest));
    } catch (e) {
      console.error(`Failed ${img.dest}:`, e.message);
    }
  }
  console.log('Done!');
}

run();
