import React from 'react';
import { Card } from 'react-bootstrap';
import './PlayerCard.css';

const PlayerCard = ({ name, team, nationality, jerseyNumber, age, imageUrl, flagUrl, logoUrl, stats, rating, position }) => {
  return (
    <Card className="player-card">
      <div className="card-top">
        <div className="player-rating-pos">
          <div className="rating">{rating}</div>
          <div className="position">{position}</div>
          <img className="country-flag" src={flagUrl} alt={nationality} />
          <img className="club-logo" src={logoUrl} alt={team} />
        </div>
        <div className="player-image-container">
          <img className="player-image" src={imageUrl} alt={name} />
        </div>
      </div>
      
      <div className="card-bottom">
        <h3 className="player-name">{name}</h3>
        <div className="player-features">
          <div className="feature-column">
            <div><span>{stats?.pac || 90}</span> PAC</div>
            <div><span>{stats?.sho || 90}</span> SHO</div>
            <div><span>{stats?.pas || 90}</span> PAS</div>
          </div>
          <div className="feature-column">
            <div><span>{stats?.dri || 90}</span> DRI</div>
            <div><span>{stats?.def || 90}</span> DEF</div>
            <div><span>{stats?.phy || 90}</span> PHY</div>
          </div>
        </div>
        <div className="player-info-extra">
          <span className="jersey">#{jerseyNumber}</span>
          <span className="age">{age} ans</span>
        </div>
        <div className="team-name">{team}</div>
      </div>
    </Card>
  );
};

export default PlayerCard;
