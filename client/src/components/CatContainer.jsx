import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageThumbnail from '../components/ImageThumbnail';
import Chi1 from '../images/chi1.jpg';
import Chi2 from '../images/chi2.jpg';
import Chi3 from '../images/chi3.jpg';
import Chi4 from '../images/chi4.jpg';
import Chi5 from '../images/chi5.jpg';
import Chi6 from '../images/chi6.jpg';
import Chi7 from '../images/chi7.jpg';
import Chi8 from '../images/chi8.jpg';
import Chi9 from '../images/chi9.jpg';

function CatContainer(props) {

  return (
    <Container className="cat-container">
      <Row>
        <Col sm={4}>
          <ImageThumbnail imageSource={Chi1} />
        </Col>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi2} />
        </Col>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi3} />
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi4} />
        </Col>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi5} />
        </Col>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi6} />
        </Col>
      </Row>

      <Row>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi7} />
        </Col>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi8} />
        </Col>
        <Col sm={4}>
        <ImageThumbnail imageSource={Chi9} />
        </Col>
      </Row>
    </Container>
  );
}

export default CatContainer;