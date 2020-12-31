import React from "react";
import { Card } from "react-bootstrap";

export const Cards = data => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Card.Title as="div">
          <strong>{data.title}</strong>
        </Card.Title>

        <Card.Img src={data.img} variant="top" />

        <Card.Body>
          <Card.Title as="div">
            <strong>{data.title}</strong>
          </Card.Title>

          <Card.Text>{data.heading}</Card.Text>

          <Card.Text>{data.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
