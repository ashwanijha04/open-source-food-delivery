import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import './Header.css';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 
  'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Surat',
];

const Header = () => {
  const [selectedCity, setSelectedCity] = useState('Select City');

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar" sticky="top">
        <Navbar.Brand href="/" className="brand-name">FlavourFleet</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link href="/cart" className="nav-link">Cart</Nav.Link>
            <Dropdown onSelect={(eventKey) => setSelectedCity(eventKey)} className="nav-item dropdown">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {selectedCity}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {cities.map((city, index) => (
                  <Dropdown.Item key={index} eventKey={city}>{city}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 nav-item" />
            <Button variant="outline-light" className="nav-item">Search</Button>
          </Nav>
    </Navbar>
  );
};

export default Header;
