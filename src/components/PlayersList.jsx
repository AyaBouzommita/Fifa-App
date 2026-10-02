import React from 'react';
import PlayerCard from './PlayerCard';
import './PlayersList.css';

const PlayersList = ({ players }) => {
  return (
    <div className="players-section">
      <h2 className="text-center text-white mb-4 section-title">Formation d'Étoiles</h2>
      <div className="pitch-container">
        {/* Lignes du terrain dessinées en CSS */}
        <div className="pitch-line pitch-center-line"></div>
        <div className="pitch-circle"></div>
        <div className="pitch-penalty-area bottom-area"></div>
        <div className="pitch-penalty-area top-area"></div>

        {/* Joueurs placés sur le terrain */}
        <div className="players-formation">
          {players.map((player) => (
            <div key={player.id} className={`player-wrapper ${player.pitchRole}`}>
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayersList;
