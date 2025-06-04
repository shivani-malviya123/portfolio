import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import profileImg from "../assets/img.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section d-flex align-items-center" id="home">
      <Container className="text-center text-white">
        <Image
          src={profileImg}
          alt="Shivani Malviya"
          roundedCircle
          className="profile-img mb-4"
        />

        <h1 className="display-4 fw-bold">
          Hi, I’m <span className="highlight">Shivani</span>
        </h1>

        <h3 className="typewriter mb-3">Aspiring MERN Stack Developer</h3>

        <p className="lead mb-4">
          I'm a student passionate about web development, currently exploring
          the MERN stack — MongoDB, Express, React, and Node.js. I enjoy
          learning by building and continuously aim to grow as a full-stack
          developer.
        </p>

        <div className="mb-4">
          <span className="badge bg-secondary me-2">Frontend Learner</span>
          <span className="badge bg-secondary me-2">React Enthusiast</span>
          <span className="badge bg-secondary">Self-Taught</span>
        </div>

        <Button variant="light" className="me-3 btn-hover">
          Download Resume
        </Button>
        <Button variant="outline-light" className="btn-hover">
          Contact Me
        </Button>

        <blockquote className="blockquote text-light mt-4 fst-italic">
          "Learning never exhausts the mind." – Leonardo da Vinci
        </blockquote>
      </Container>
    </section>
  );
};

export default Home;
