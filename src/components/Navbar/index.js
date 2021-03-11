import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import bored from "../../assets/yawning-face.png";
import "../../styles/Navbar.css";

export default function index() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        <img src={bored} />
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About Bored</Nav.Link>
      </Nav>
    </Navbar>
  );
}
