import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function NavbarView() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container className='nav-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav style={{ marginInline: 'auto' }}>
            <Nav.Link as={Link} to="/comics">Cómics</Nav.Link>
            <Nav.Link as={Link} to="/figuras">Figuras</Nav.Link>
            <Nav.Link as={Link} to="/funkos">Funko Pops</Nav.Link>
            <Nav.Link as={Link} to="/posters">Pósters</Nav.Link>
            <Nav.Link as={Link} to="/shirts">Camisetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarView;


