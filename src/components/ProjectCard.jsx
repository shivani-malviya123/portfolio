import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion"; // 🆕 Framer Motion import

const ProjectCard = ({ title, description, techStack, githubLink, liveDemo, image }) => {
  return (
    <motion.div
      className="h-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="h-100 shadow-lg rounded-4 bg-light text-dark">
        <div style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={image}
            alt={title}
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "0.75rem",
              borderTopRightRadius: "0.75rem",
            }}
          />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong>Tech Stack:</strong> {techStack}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="dark" size="sm" href={githubLink} target="_blank">
              GitHub
            </Button>
            {/* <Button
              variant="outline-dark"
              size="sm"
              href={liveDemo}
              target="_blank"
              // disabled={!liveDemo}
            >
              Live Demo
            </Button> */}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
