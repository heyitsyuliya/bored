import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function index() {
  return (
    <Navbar bg='light'>
      <Navbar.Brand href="#home">Bored</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About Bored</Nav.Link>
      </Nav>
    </Navbar>
  )
}
