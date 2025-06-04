import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub,
  // Add new icons for Express.js (using FaServer or FaBolt), SQL (FaDatabase or FaServer), and Git (FaGitAlt)
  FaServer, FaGitAlt,FaJava,
} from "react-icons/fa";
import "./Skills.css"; // optional custom styling

const Skills = () => {
  return (
    <section className="skills-section py-5" id="skills">
      <Container>
        <h2 className="text-center text-white mb-5">My Skills</h2>
        <Row className="g-4">
          {/* HTML */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaHtml5 size={40} className="mb-2 text-warning" />
                <Card.Title>HTML5</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* CSS */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaCss3Alt size={40} className="mb-2 text-info" />
                <Card.Title>CSS3</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* JavaScript */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaJs size={40} className="mb-2 text-warning" />
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* React */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaReact size={40} className="mb-2 text-info" />
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Node.js */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaNodeJs size={40} className="mb-2 text-success" />
                <Card.Title>Node.js</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Express.js - NEW */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaServer size={40} className="mb-2 text-secondary" /> {/* You can choose a different icon/color */}
                <Card.Title>Express.js</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* MongoDB */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaDatabase size={40} className="mb-2 text-success" />
                <Card.Title>MongoDB</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* MySQL */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaDatabase size={40} className="mb-2 text-primary" />
                <Card.Title>MySQL</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* SQL - NEW (You can use FaDatabase again or FaServer) */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaDatabase size={40} className="mb-2 text-info" /> {/* Or FaServer */}
                <Card.Title>SQL</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Git - NEW */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaGitAlt size={40} className="mb-2 text-danger" /> {/* FaGitAlt is a good choice for Git */}
                <Card.Title>Git</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* GitHub (already present, just for completeness) */}
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaGithub size={40} className="mb-2 text-light" />
                <Card.Title>GitHub</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* You can add more skills here */}
          {/* Example for a generic "Cloud" skill */}
          
          <Col xs={6} md={4} lg={3}>
            <Card className="text-center bg-dark text-white border-light">
              <Card.Body>
                <FaJava size={40} className="mb-2 text-light" />
                <Card.Title>Java</Card.Title>
              </Card.Body>
            </Card>
          </Col>
         

        </Row>
      </Container>
    </section>
  );
};

export default Skills;