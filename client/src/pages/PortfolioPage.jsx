import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import InfoCard from '../components/InfoCard';

function PortfolioPage(props) {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



  return (
    <div className="custom-page">
      <div className="page-header">
        Portfolio
      </div>
      <Container className="info-card-container">
        <Row>
          <Col sm={12}>
            <InfoCard headerText="Distributed System Filehosting" text={loremText} imagePath="TEST/IMAGE/PATH.JPG"/>
          </Col>
        </Row>
        
        <Row>
          <Col sm={12}>
            <InfoCard headerText="LotBoss Parking Permit Management System" text={loremText} imagePath="ANOTHER/IMAGE/PATH.PNG"/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="Convolutional Neural Network Handwritten Text Identifier" text={loremText} imagePath="TEST/IMAGE/PATH.JPG"/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="2.5D Sprites and Dynamic Shadow System" text={loremText} imagePath="TEST/IMAGE/PATH.JPG"/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="Password Vault" text={loremText} imagePath="TEST/IMAGE/PATH.JPG"/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="This Website" text={loremText} imagePath="TEST/IMAGE/PATH.JPG"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PortfolioPage;