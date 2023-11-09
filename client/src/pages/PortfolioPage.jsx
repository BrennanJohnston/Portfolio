import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import InfoCard from '../components/InfoCard';

import GMSVideo from '../images/dynamicshadowsgms.webm';
import flowfieldVideo from '../images/flowfield.webm';
import neuralNetImage from '../images/neuralnet.png';
import distributedSystemImage from '../images/distributedsystem.webp';
import reactImage from '../images/react.png';
import overviewFlowchartImage from '../images/overviewflowchart.png';
import pwVaultImage from '../images/pwvault.png';
import programmingLanguagesImage from '../images/programminglanguages.png';

function PortfolioPage(props) {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const distributedText = "A file sharing system designed with peer-to-peer principles.  A server is used to manage node registration and login.  Nodes can host files and download files from other nodes.  The system dynamically keeps track of what nodes have what files, and when a node wants to download a file, a node that has the desired data will send the data to the requester.  This system was developed using Java.";
  const lotBossText = "An all-in-one parking permit management system designed to allow clients to create accounts (or login with google), register their vehicle(s), purchase parking permits, and edit vehicle information.  The system provides an AI that can view a video feed from a camera and automatically look up parking permit and user information for vehicles parked in parking lots based on license plates in the video feed.  The AI inferencing is done server-side, allowing for any device with a camera to take advantage of the system.  This system was developed using Node.js, Express, React, MariaDB, and Flask.";
  const neuralNetText = "A basic convolutional neural network made from scratch.  This program can be provided neural net architecture information to determine layer count, layer widths, input count, and output count.  The network can be trained on data to provide solutions for a myriad of problems.  For example, the network is able to be trained on images of handwritten characters, which it can recognize and provide classification.";
  const shadowsText = "This is a plugin created for GameMaker.  This system allows for dynamic shadow rendering in an engine that does not natively support it.  The system also allows for the creation of 2.5D sprites using the GameMaker built-in layering functionality for ease of application.  These functionalities combine to allow for a natively 2D game engine to provide true depth.";
  const pwVaultText = "A password management program designed for quick and easy use.  The system encrypts all of the client's passwords in a vault file.  Any number of passwords can be saved to the vault, and each site/software can have any number of accounts registered to them.  This program was created using the .NET Core framework in C#.";
  const thisSiteText = "This site was created from scratch using React.  As of the creation of this portfolio website, I am working on my front-end web development skillset.  As stated in the About Me section, I am always working towards understanding skills I am not familiar with, and currently web development has piqued my interest.  Using a website builder or template may have been easier, and maybe even looked better, but where's the fun in that?";
  const flowfieldText = "A plugin created for GameMaker designed to allow for all-source all-paths pathfinding.  This system solves pathfinding problems for the user, and generates a vector flowfield for every node allowing for any number of entities to follow a presolved path with no extra computational complexity.  This system can pre-solve for a given map when provided a 2D array of obstruction data that is simple to construct.  The system works flawlessly with another system I created which provides steering-behavior vector calculations for developers to make groups of entities move and behave more realistically.";
  const andMoreText = "This is a list of a few of my projects.  I have many other projects finished, unfinished, and currently working on.";

  return (
    <div className="custom-page">
      <div className="page-header">
        Portfolio
      </div>
      <Container className="info-card-container">
        <Row>
          <Col sm={12}>
            <InfoCard headerText="Distributed System Filehosting" text={distributedText} imageSource={distributedSystemImage}/>
          </Col>
        </Row>
        
        <Row>
          <Col sm={12}>
            <InfoCard headerText="LotBoss Parking Permit Management System" text={lotBossText} imageSource={overviewFlowchartImage} alignImageRight={true}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="Flowfield Pathfinding Plugin" text={flowfieldText} videoSource={flowfieldVideo} videoType="video/webm"/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="Convolutional Neural Network" text={neuralNetText} imageSource={neuralNetImage} alignImageRight={true}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="Password Vault" text={pwVaultText} imageSource={pwVaultImage}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="2.5D Sprites and Dynamic Shadow System" text={shadowsText} videoSource={GMSVideo} videoType="video/webm" alignImageRight={true}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="This Website" text={thisSiteText} imageSource={reactImage}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <InfoCard headerText="And More" text={andMoreText} imageSource={programmingLanguagesImage}/>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default PortfolioPage;