import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function ImageThumbnail(props) {


  return (
    <img className="image-thumbnail" src={props.imageSource} />
  );
}

export default ImageThumbnail;