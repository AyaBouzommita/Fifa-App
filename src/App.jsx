import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import AppNavbar from './components/AppNavbar';
import PlayersList from './components/PlayersList';
import MatchesList from './components/MatchesList';
import Footer from './components/Footer';

// Data
import { players } from './data/players';
import { matches } from './data/matches';

function App() {
  return (
    <div className="app-container">
      <AppNavbar />
      
      <main className="main-content">
        <section id="hero" className="hero-section text-center py-5 position-relative">
          {/* Ballon animé en arrière-plan */}
          <div className="bouncing-ball-container">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg" 
                alt="Ballon" 
                className="bouncing-ball"
             />
          </div>
          
          <div className="hero-content">
            <h1 className="display-3 fw-bolder text-white hero-title">ULTIMATE TEAM</h1>
            <p className="lead text-light mb-4">Vivez l'expérience de jeu nouvelle génération</p>
          </div>
        </section>

        <section id="players" className="py-5">
          <PlayersList players={players} />
        </section>
        
        <section id="matches" className="py-5 bg-darker">
          <MatchesList matches={matches} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
