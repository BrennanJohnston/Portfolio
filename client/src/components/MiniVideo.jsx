import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function MiniVideo(props) {

  return (
    <video controls className="mini-video" src={props.videoSource} loop={true} autoPlay={true} type={props.videoType} />
  );
}

export default MiniVideo;