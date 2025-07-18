import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import img from "../assets/img.png";
import { motion } from "framer-motion"; // 🆕 Framer Motion Import

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <motion.h2
          className="text-center text-white mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <Row className="align-items-center">

          {/* Left Text Column */}
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h5>
                Hi, I'm <strong>Shivani Malviya</strong> 👩‍💻 — a passionate,
                self-taught web developer and currently a student, on a journey
                to become a <strong>MERN Stack Developer</strong>.
              </h5>
              <h5 className="mt-3">
                I'm actively learning <strong>MongoDB, Express, React</strong>,
                and <strong>Node.js</strong>, and enjoy building full-stack web
                applications. I love solving problems, improving user
                experiences, and writing clean and maintainable code.
              </h5>
              <h5 className="mt-3">
                Currently, I'm focused on strengthening my frontend skills using{" "}
                <strong>React</strong> and <strong>Bootstrap</strong>, while
                exploring backend technologies like <strong>Node.js</strong> and{" "}
                <strong>Express.js</strong>.
              </h5>
              <h5 className="mt-3">
                🚀 Always curious to learn, build, and grow as a developer.
              </h5>
            </motion.div>
          </Col>

          {/* Right Image Column */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <motion.img
              src={img}
              alt="profile"
              className="img-fluid rounded-circle about-img"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
