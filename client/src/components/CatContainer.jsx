import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CatContainer(props) {

  return (
    <Container className="cat-container">
      <Row>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
        <Col sm={4}>
          CHI PICTURE HERE
        </Col>
      </Row>
    </Container>
  );
}

export default CatContainer;