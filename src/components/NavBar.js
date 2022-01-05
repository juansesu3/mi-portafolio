import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap'
import {Link as LinkReact} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>


      <Navbar bg="light" expand={false}>
        <Container fluid>
        <Navbar.Brand href="#"><Button variant="secondary">Curriculum</Button></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
            
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <center>
                <Nav.Link href="#action1"><LinkReact to="/">Home</LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/projects">Projects</LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/technologies">Stack of Technologies</LinkReact></Nav.Link>
              
                <Nav.Link href="#action2"><LinkReact to="/testimonials">Testimonials</LinkReact></Nav.Link>
                <Nav.Link href="#action2"><LinkReact to="/contact">Contact me</LinkReact></Nav.Link>
                </center>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
          
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
