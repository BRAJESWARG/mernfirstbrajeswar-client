import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

function NavScrollExample() {

    const { state, dispatch } = useContext(UserContext);
    console.log(dispatch);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <NavLink to='/' className='NavLink home-header' >Home</NavLink>
                    <NavLink to='/about' className='NavLink about-header' >About</NavLink>
                    <NavLink to='/contact' className='NavLink contact-header' >Contact</NavLink>
                    <NavLink to='/signout' className='NavLink registration-header' >Sign Out</NavLink>
                </>
            )
        }
        else {
            return (
                <>

                    <NavLink to='/' className='NavLink home-header' >Home</NavLink>
                    <NavLink to='/about' className='NavLink about-header' >About</NavLink>
                    <NavLink to='/contact' className='NavLink contact-header' >Contact</NavLink>
                    <NavLink to='/signin' className='NavLink signin-header' >Sign In</NavLink>
                    <NavLink to='/register' className='NavLink registration-header' >Registration</NavLink>
                </>
            )
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Authentication</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 Nav-box"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <RenderMenu />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;