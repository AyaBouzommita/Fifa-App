import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5 border-top border-warning">
      <Container>
        <p className="mb-0 text-uppercase fw-bold text-secondary">
          &copy; {new Date().getFullYear()} FIFA Web App - Tous droits réservés.
        </p>
        <small className="text-muted">Projet d'Application de Nouvelles Technologies</small>
      </Container>
    </footer>
  );
};

export default Footer;
