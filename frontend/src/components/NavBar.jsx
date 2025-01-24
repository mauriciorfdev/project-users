import React from 'react'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const NavBarComp = () => {
  return (
    <NavBar expand='md' className="bg-body-tertiary">
      <Container>
        <NavBar.Brand to='/'>MyApp</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/user'>Create</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default NavBarComp