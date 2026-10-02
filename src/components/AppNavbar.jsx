import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFutbol } from 'react-icons/fa';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-lg border-bottom border-warning">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center fw-bold fs-3 text-warning">
          <FaFutbol className="me-2" />
          FIFA App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="#home" className="text-light text-uppercase mx-2">Accueil</Nav.Link>
            <Nav.Link href="#players" className="text-light text-uppercase mx-2">Joueurs</Nav.Link>
            <Nav.Link href="#matches" className="text-light text-uppercase mx-2">Matchs</Nav.Link>
            <Nav.Link href="#teams" className="text-light text-uppercase mx-2">Équipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
