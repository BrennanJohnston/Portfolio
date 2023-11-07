import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SiteNavMenu(props) {
  const navigate = useNavigate();

  const handleChangePage = (pagePath) => {
    navigate(pagePath);
    props.onHide();
  }

  return (
    <>
      <Offcanvas show={props.show} onHide={props.onHide} className="nav-menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="nav-menu-link-container">
            <Row className="nav-menu-row">
              <Col sm={12}>
                <Button className="nav-menu-button" onClick={() => handleChangePage("/")}>About Me</Button>
              </Col>
            </Row>
            <Row className="nav-menu-row">
              <Col sm={12}>
                <Button className="nav-menu-button" onClick={() => handleChangePage("portfolio")}>Portfolio</Button>
              </Col>
            </Row>
            <Row className="nav-menu-row">
              <Col sm={12}>
                <Button className="nav-menu-button" onClick={() => handleChangePage("contact")}>Contact</Button>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SiteNavMenu;