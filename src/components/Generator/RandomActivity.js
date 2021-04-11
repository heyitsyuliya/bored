import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";
import "../../styles/Generator.css";

export default function RandomActivity(props) {
  const activity = props.activity.activity.toLowerCase();
  const participants = props.activity.participants;
  const price = props.activity.price;
  const link = props.activity.link;

  return (
    <Container id="random-activity">
      <Card>
        <Card.Body>
          <Card.Title>You can {activity}</Card.Title>

          <ListGroup>
            {/* participants */}
            <ListGroupItem>
              👯
              {participants === 1 ? "1 person" : `${participants} people `}
            </ListGroupItem>

            {/* cost */}
            {price ? <ListGroupItem>💸 ${price}</ListGroupItem> : null}

            {/* link */}
            {link ? (
              <ListGroupItem>
                🔗
                <a href={link}>click me</a>
              </ListGroupItem>
            ) : null}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
