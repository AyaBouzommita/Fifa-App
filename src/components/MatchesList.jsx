import React from 'react';
import MatchCard from './MatchCard';
import { Container, Row, Col } from 'react-bootstrap';

const MatchesList = ({ matches }) => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-white mb-4 section-title">Prochains Matchs</h2>
      <Row className="justify-content-center">
        {matches.map((match) => (
          <Col key={match.id} md={8} lg={6} className="mb-4">
            <MatchCard {...match} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MatchesList;
