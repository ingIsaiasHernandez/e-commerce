import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    
    <div>

      <Navbar bg="primary" expand="md" variant="dark" size="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Cars app</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Appnavbar-nav" />
          <Navbar.Collapse id="basic-Appnavbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/purchases">List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
    
  );
};

export default AppNavbar;
