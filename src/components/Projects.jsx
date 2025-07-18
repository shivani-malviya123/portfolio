import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./project.css";
import calculator from "../assets/calculator.jpeg"; 
import password from "../assets/password.jpeg"; 
import tic from "../assets/tic.jpeg"; 
// import Dictionary from "../assets/dictionary.jpeg"; 
import portfolio from "../assets/portfolio.jpeg";
import Dictionary from "../assets/Dictionary.jpeg";

import construction from "../assets/construction.jpeg"; 
const Projects = () => {
  const projectData = [
  {
  title: "Simple Calculator",
  description: "A basic calculator web app that performs arithmetic operations like addition, subtraction, multiplication, and division.",
  techStack: "HTML, CSS, JavaScript",
  githubLink: "https://github.com/shivani-malviya123/calculator", // 🔁 Update if different
  liveDemo: "https://shivani-calculator.netlify.app", // 🔁 Optional if available
  image: calculator, // ✅ Make sure you imported calculator image at the top
},
  {
    title: "Password Generator",
    description: "A secure password generator tool built with JavaScript.",
    techStack: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/shivani-malviya123/password-generator",
    liveDemo: "https://yourpasswordgenerator.live",
    image: password,
  },
  {
    title: "Tic-Tac-Toe",
    description: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
    techStack: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/shivani-malviya123/tic-tac-toe",
    // liveDemo: "https://shivani-malviya123.github.io/tic-tac-toe/",
    image: tic,
  },
  {
    title: "Dictionary App",
    description: "A simple dictionary app that provides word meanings.",
    techStack: "React, API",
    githubLink: "https://github.com/shivani-malviya123/dictionary-app",
    // liveDemo: "https://yourusername.github.io/dictionary-app/",
    image: Dictionary,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built using React and Bootstrap...",
    techStack: "React, Bootstrap, CSS",
    githubLink: "https://github.com/shivani-malviya123/portfolio",
    liveDemo: "https://yourportfolio.live",
    image: portfolio,
  },
  {
    title: "Construction App",
    description: "A construction management app to track projects and tasks.",
    techStack: "React, Node.js, MongoDB",
    githubLink: "https://github.com/shivani-malviya123/construction-app",
    liveDemo: "https://yourusername.github.io/construction-app/",
    image: construction,
  }
  ];
  return (
    <section className="projects-section py-5  text-white" id="projects">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Projects;