import React from "react";
import { Row, Col } from "react-bootstrap";
import { data } from "../data";
import { Cards } from "./Cards";
export const Productlist = () => {
  return (
    <div>
      <Row>
        {data.map(data => {
          return (
            <Col key={data.id} sm={12} md={6} lg={4} xl={3}>
              {" "}
              <Cards data={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
