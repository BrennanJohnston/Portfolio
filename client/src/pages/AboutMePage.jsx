import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import InfoCard from '../components/InfoCard';
import csImage from '../images/cs.png';
import uafsImage from '../images/uafs.jpg';

function AboutMePage(props) {

  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const computerEnthusiastText = "I am a Computer Science and Information Technology enthusiast.  I have been fascinated by computers and electronics since I was very young, and wanted to learn to be a programmer since I was an early teen.  What started as dabbling in Adobe Flash trying to make games turned into developing neural networks and writing algorithms to solve problems.  I enjoy learning new technologies I am not familiar with, and I am passionate about working with computer software and hardware.  A portfolio of some examples of my work can be accessed from the navigation menu in the top-left.";
  const educationText = "I graduated the University of Arkansas - Fort Smith in Summer 2023 with a Bachelor of Science degree in Computer Science.  Various concepts that I learned include development of basic Artificial Intelligence neural networks, mobile application development, creating algorithms to solve problems, complex mathematics, low-level software development, networking, and much more.  My first formal education in Computer Science was in High School at Southside in Fort Smith, where I took AP Computer Science and learned the basics of Object Oriented programming using Java.  Besides formal education, I have spent much time learning Computer Science concepts in my free time.  I have become competent at figuring things out on my own and doing research to solve complex problems.";
  const whoIAmText = "I am an easy-going guy who likes to get along with people as best I can.  My M&B personality type is INTJ (if you care about that sort of thing).  Besides computer-related things, I enjoy multiple other hobbies.  I like to handpaint miniatures, primarily Warhammer 40k and Age of Sigmar figures (I'm told I have gotten quite good at it).  I like to go metal-detecting in search of something cool, preferably an arrowhead or gold ring, but so far it's mostly many, many bullet-casings, soda cans from the 90's and prior, and mutilated chunks of metal, of which I can't fathom how they got there.  I like developing small videogames and playing a multitude of games, mainly on PC and Switch.";

  return (
    <div className="custom-page">
      <div className="page-header">
        About Me
      </div>
      <Container className="info-card-container">
        <Row>
          <Col sm={12}>
            <InfoCard headerText="Computer Enthusiast" text={computerEnthusiastText} imageSource={csImage}/>
          </Col>
        </Row>
        
        <Row>
          <Col sm={12}>
            <InfoCard headerText="Education" text={educationText} imageSource={uafsImage} alignImageRight={true}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="Who I Am" text={whoIAmText} imagePath="TEST/IMAGE/PATH.JPG"/>
          </Col>
        </Row>
      </Container>
      

    </div>
  );
}

export default AboutMePage;