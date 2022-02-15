import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav-background fixed-top' variant="dark">
            <Container>
                <NavLink className='company-name nav-links' to="/" >
                    <span>Mahir's Portfolio</span>
                </NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end animate__animated animate__slideInRight" >
                    <Nav.Link as={HashLink} to="/home#home" className='nav-links'>Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about" className='nav-links' >About Me</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#projects" className='nav-links'>My Projects</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#contact" className='nav-links'>Contact</Nav.Link>
                    <NavLink className='nav-links' to="/blogs">Blogs</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;