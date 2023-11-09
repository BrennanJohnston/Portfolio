import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import ImageThumbnail from './ImageThumbnail';
import MiniVideo from './MiniVideo';

function InfoCard(props) {
  //Expecting props.headerText, props.text, props.imagePath, props.alignImageRight (true/false)

  const maxBlur = 100;
  const scaleMin = 0.5;
  const maxXOffset = 50; // percent of screen
  const maxYOffset = 30; // percent of screen
  const heightDivisor = 2.5; // 2

  const [currentBlur, setCurrentBlur] = useState(maxBlur);
  const [currentScale, setCurrentScale] = useState(1);
  const [currentXOffset, setCurrentXOffset] = useState(maxXOffset);
  const [currentYOffset, setCurrentYOffset] = useState(maxYOffset);
  const [windowHeight, setWindowHeight] = useState(1);

  const ref = useRef();

  const calculateBlur = () => {
    return Math.max(0, (ref.current.offsetTop - window.scrollY - window.innerHeight/heightDivisor) / (window.innerHeight)) * maxBlur;//Math.max(0, (ref.current.offsetTop - (window.scrollY+window.innerHeight/3*1.5)) / Math.max(1, ref.current.offsetTop)) * maxBlur;
  }

  const calculateScale = () => {
    return 1;//return Math.max(scaleMin, Math.min(1, 1 - (ref.current.offsetTop - window.scrollY-window.innerHeight/3*1.5) / Math.max(1, ref.current.offsetTop)));
  }

  const calculateXOffset = () => {
    const scaleFlip = props.alignImageRight ? -1 : 1;
    return Math.max(0, (ref.current.offsetTop - window.scrollY - window.innerHeight/heightDivisor) / (window.innerHeight) * maxXOffset) * scaleFlip;//Math.max(0, (ref.current.offsetTop - (window.scrollY)) / Math.max(1, ref.current.offsetTop)) * maxXOffset * scaleFlip;
  }

  const calculateYOffset = () => {
    return Math.max(0, (ref.current.offsetTop - window.scrollY - window.innerHeight/heightDivisor) / (window.innerHeight) * maxYOffset);
  }

  const handleScroll = () => {
    setCurrentBlur(calculateBlur());
    setCurrentScale(calculateScale());
    setCurrentXOffset(calculateXOffset());
    setCurrentYOffset(calculateYOffset());
  }

  const handleResize = () => {
    setCurrentBlur(calculateBlur());
    setCurrentScale(calculateScale());
    setCurrentXOffset(calculateXOffset());
    setCurrentYOffset(calculateYOffset());
  }

  const handleLoad = () => {
    //NONE OF THIS WORKS BECAUSE OF VARIABLES IN CALCULATE FUNCTIONS NOT BEING SET YET (I THINK)
    setCurrentBlur(calculateBlur());
    setCurrentScale(calculateScale());
    setCurrentXOffset(calculateXOffset());
  }

  const getImageOrVideoElement = () => {
    if(props.imageSource) {
      return <ImageThumbnail imageSource={props.imageSource} />
    } else if(props.videoSource) {
      return <MiniVideo videoSource={props.videoSource} videoType={props.videoType} />
    }
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
    <Container ref={ref} className="info-card">
      <Row>
        <Col sm={12}>
          <div className="info-card-header" style={{filter: "blur("+currentBlur+"px)", transform: "translateX(calc("+currentXOffset+"vw * -1)) translateY("+currentYOffset+"vh)"}}>
            {props.headerText}
          </div>
        </Col>
      </Row>
      {
        (props.alignImageRight) ?
          (
            <Row style={{filter: "blur("+currentBlur+"px)", transform: "translateX("+currentXOffset+"vw) translateY("+currentYOffset+"vh)"}}>
              <Col sm={(props.imageSource == undefined && props.videoSource == undefined) ? 12 : 8}>
                {props.text}
              </Col>

              <Col sm={(props.imageSource == undefined && props.videoSource == undefined) ? 0 : 4}>
                {getImageOrVideoElement()}
              </Col>
            </Row>
            
          )
        :
          (
            <Row style={{filter: "blur("+currentBlur+"px)", transform: "translateX("+currentXOffset+"vw) translateY("+currentYOffset+"vh)"}}>
              <Col sm={(props.imageSource == undefined && props.videoSource == undefined) ? 0 : 4}>
                {getImageOrVideoElement()}
              </Col>

              <Col sm={(props.imageSource == undefined && props.videoSource == undefined) ? 12 : 8}>
                {props.text}
              </Col>
            </Row>
          )
      }
    </Container>
  );
}

export default InfoCard;