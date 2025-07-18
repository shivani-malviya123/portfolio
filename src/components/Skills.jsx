import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub,
  FaServer, FaGitAlt, FaJava,
} from "react-icons/fa";
import "./Skills.css";
import { motion } from "framer-motion"; // 👈 Import framer-motion

const skills = [
  { icon: <FaHtml5 size={40} className="mb-2 text-warning" />, title: "HTML5" },
  { icon: <FaCss3Alt size={40} className="mb-2 text-info" />, title: "CSS3" },
  { icon: <FaJs size={40} className="mb-2 text-warning" />, title: "JavaScript" },
  { icon: <FaReact size={40} className="mb-2 text-info" />, title: "React" },
  { icon: <FaNodeJs size={40} className="mb-2 text-success" />, title: "Node.js" },
  { icon: <FaServer size={40} className="mb-2 text-secondary" />, title: "Express.js" },
  { icon: <FaDatabase size={40} className="mb-2 text-success" />, title: "MongoDB" },
  { icon: <FaDatabase size={40} className="mb-2 text-primary" />, title: "MySQL" },
  { icon: <FaDatabase size={40} className="mb-2 text-info" />, title: "SQL" },
  { icon: <FaGitAlt size={40} className="mb-2 text-danger" />, title: "Git" },
  { icon: <FaGithub size={40} className="mb-2 text-light" />, title: "GitHub" },
  { icon: <FaJava size={40} className="mb-2 text-light" />, title: "Java" },
];

const Skills = () => {
  return (
    <section className="skills-section py-5" id="skills">
      <Container>
        <motion.h2
          className="text-center text-white mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col xs={6} md={4} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-dark text-white border-light shadow">
                  <Card.Body>
                    {skill.icon}
                    <Card.Title>{skill.title}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
