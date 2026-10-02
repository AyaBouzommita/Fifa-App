import React from 'react';
import { Card } from 'react-bootstrap';
import './MatchCard.css';

const MatchCard = ({ team1, team2, score, date, time, status, stadiumImage }) => {
  return (
    <Card 
      className="match-card text-center text-white" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${stadiumImage || ''})` }}
    >
      <Card.Header className="match-status">
        <span className={status === "En cours" ? "text-danger fw-bold blink status-badge" : "text-warning status-badge"}>
          {status}
        </span>
        <div className="match-datetime">{date} | {time}</div>
      </Card.Header>
      <Card.Body className="d-flex justify-content-between align-items-center match-body">
        <div className="team-section">
          <div className="logo-container">
            <img src={team1.logo} alt={team1.name} className="team-logo" />
          </div>
          <h5 className="team-name-match mt-3">{team1.name}</h5>
        </div>
        
        <div className="score-section">
          <h2 className="match-score display-4 fw-bold m-0">{score}</h2>
          {score === "VS" && <div className="vs-badge mt-2">À venir</div>}
        </div>
        
        <div className="team-section">
          <div className="logo-container">
            <img src={team2.logo} alt={team2.name} className="team-logo" />
          </div>
          <h5 className="team-name-match mt-3">{team2.name}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MatchCard;
