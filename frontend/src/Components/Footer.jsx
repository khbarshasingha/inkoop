import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <Container class="footer">
        <Row>
          <Col className="text-center py-3">&copy; Lorem Ipsum Dolor</Col>
          <Col className="text-center py-3">Lorem Ipsum Dolor</Col>
        </Row>
      </Container>
    </>
  );
};
