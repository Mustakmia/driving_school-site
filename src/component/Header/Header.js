import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Container fluid className="header">

                <Nav className="justify-content-center flex-grow-1 pe-3">
                    <NavLink className="text-decoration-none mx-3 text-light " to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/services">Services</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/more">More</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/about">AboutUs</NavLink>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>


            </Container>
            <div className="header2">
                <h1 className="text-light"> <span className="name-style" >Online</span> Driving School </h1>
                <h3>You Can Learn All kind of vehicles Riding........</h3>
            </div>
        </div>

    );
};

export default Header;