import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { right } from "@popperjs/core";

export const Header = () => {
  return (
    <div className="App-header">
      <Row>
        <Col className="leftcol">
          LOREM <br />
          IPSUM
        </Col>
        <Col style={{ paddingLeft: "10rem" }}>LOrem Ipsum Dolor</Col>
      </Row>
      <Row style={{ padding: "2rem" }}>
        <Col style={{ textAlign: "center" }}>
          removed 50 packages, updated 2 packages and audited 1817 packages in
          36.87s 125 packages are looking for funding run `npm fund` for details
          <br />
          <button>HEllo</button>
        </Col>
      </Row>
    </div>
  );
};
