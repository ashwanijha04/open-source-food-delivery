import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './Header.css';

const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Ahmedabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Jaipur',
  'Surat',
  // Add more cities as needed
];

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="brand-name">
          FlavourFleet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
          <Form inline className="d-flex align-items-center">
            <DropdownButton
              id="dropdown-basic-button"
              title="Select City"
              className="mr-sm-2"
            >
              {cities.map((city, index) => (
                <Dropdown.Item key={index} href="#">
                  {city}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
