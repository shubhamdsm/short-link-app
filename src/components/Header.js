import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assests/logo.svg'

function Header() {
    return (
        <header>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img src = {Logo} alt='logo'/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Features</Nav.Link>
      <Nav.Link href="#features">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Resources</Nav.Link>
    </Nav>
    <Form inline>
       <Button variant="default"
        style={{ color: "white", background: "#2acfcf" , borderRadius:'40px', marginRight:'2rem'}}
       >Login</Button>
       <Button variant="default"
        style={{ color: "white", background: "#2acfcf" , borderRadius:'40px'}}
       >Sign Up</Button>
    </Form>
  </Navbar>
        </header>
    )
}

export default Header
