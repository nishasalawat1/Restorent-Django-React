import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faList,faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Restorant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="RouterNavLink" style={null} href="/"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
                            <Nav.Link id="RouterNavLink" style={null} href="/list"><FontAwesomeIcon icon={faList} />List</Nav.Link>
                            <Nav.Link id="RouterNavLink" style={null} href="/create"><FontAwesomeIcon icon={faPlus} />Create</Nav.Link>
                            <Nav.Link id="RouterNavLink" style={null} href="/search"><FontAwesomeIcon icon={faSearch} />Search</Nav.Link>
                            {
                                localStorage.getItem('token')?
                                <Nav.Link id="RouterNavLink" style={null} href="/logout"><FontAwesomeIcon icon={faUser} />Logout</Nav.Link>
                                :
                                <Nav.Link id="RouterNavLink" style={null} href="/login"><FontAwesomeIcon icon={faUser} />Login</Nav.Link>
                            }                                
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;