import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function InfoCard(props) {
  //Expecting props.headerText, props.text, props.imagePath, props.alignImageRight (true/false)

  const [currentBlur, setCurrentBlur] = useState(0);
  const [currentScale, setCurrentScale] = useState(1);
  const [currentXOffset, setCurrentXOffset] = useState(1);
  const [windowHeight, setWindowHeight] = useState(1);

  const blurMax = 100;
  const scaleMin = 0.5;
  const maxXOffset = 50; // percent of screen

  const ref = useRef();

  const calculateBlur = () => {
    return Math.max(0, (ref.current.offsetTop - (window.scrollY+window.innerHeight/3*1.5)) / Math.max(1, ref.current.offsetTop)) * blurMax;
  }

  const calculateScale = () => {
    return 1;//return Math.max(scaleMin, Math.min(1, 1 - (ref.current.offsetTop - window.scrollY-window.innerHeight/3*1.5) / Math.max(1, ref.current.offsetTop)));
  }

  const calculateXOffset = () => {
    const scaleFlip = props.alignImageRight ? -1 : 1;
    return Math.max(0, (ref.current.offsetTop - (window.scrollY+window.innerHeight/3*1.5)) / Math.max(1, ref.current.offsetTop)) * maxXOffset * scaleFlip;
  }

  const handleScroll = () => {
    setCurrentBlur(calculateBlur());
    setCurrentScale(calculateScale());
    setCurrentXOffset(calculateXOffset());
  }

  const handleResize = () => {
    setCurrentBlur(calculateBlur());
    setCurrentScale(calculateScale());
    setCurrentXOffset(calculateXOffset());
  }

  const handleLoad = () => {
    setCurrentBlur(calculateBlur());
    setCurrentScale(calculateScale());
  }

  useEffect(() => {
    //setCurrentBlur(Math.min(blurMax, Math.min(1, ref.current.offsetTop - props.currentPageY) / ref.current.offsetTop * blurMax));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    }
  }, []);
  
  return (
    <Container ref={ref} className="info-card" style={{filter: "blur("+currentBlur+"px)", transform: "scale("+currentScale+")", transform: "translateX("+currentXOffset+"vw)"}}>
      <Row>
        <Col sm={12}>
          <div className="info-card-header">
            {props.headerText}
          </div>
        </Col>
      </Row>
      <Row>
      {
        (props.alignImageRight) ?
          (
            <Col sm={8}>
              {props.text}
            </Col>
          )
          :
          (
            <Col sm={4}>
              {props.imagePath}
            </Col>
          )
      }

      {
        (props.alignImageRight) ?
          (
            <Col sm={4}>
              {props.imagePath}
            </Col>
          )
          :
          (
            <Col sm={8}>
              {props.text}
            </Col>
          )
      }
      </Row>
    </Container>
  );
}

export default InfoCard;