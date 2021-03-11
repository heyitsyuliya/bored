import React from "react";
import { Button, Container } from "react-bootstrap";
import { makeRequest } from "./utils";

export default function index() {
  return (
    <Container>
      <Button onClick={makeRequest}>Tell me what to do</Button>
    </Container>
  );
}
