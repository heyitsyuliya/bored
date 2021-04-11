import {
  Container,
  Card,
  Table,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import React from "react";
import "../../styles/Generator.css";

export default function RandomActivity(props) {
  return (
    <Container id="random-activity">
      <Card>
        <Card.Body>
          <Card.Title>You can {props.activity.activity}</Card.Title>
          <ListGroup>
            {/* participants */}
            <ListGroupItem>
              👯
              {props.activity.participants === 1
                ? "1 person"
                : `${props.activity.participants} people `}
            </ListGroupItem>

            {/* cost */}
            <ListGroupItem>
              💸
              {props.activity.price === 0 ? `$${props.activity.price}` : null}
            </ListGroupItem>

            {/* link */}
            {props.activity.link ? (
              <ListGroupItem>
                🔗
                <a href={props.activity.link}>click me</a>
              </ListGroupItem>
            ) : null}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
