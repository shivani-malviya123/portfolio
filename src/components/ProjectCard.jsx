import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ title, description, techStack, githubLink, liveDemo, image }) => {
  return (
    <Card className="h-100 shadow-lg rounded-4 bg-light text-dark">
      {/* <Card.Img variant="top" src={image} alt={title} className="p-2 rounded-4" style={{ height: "30%" ,width: "100%", objectFit: "cover" }} /> */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          className="w-100 h-100"
          style={{ objectFit: "cover", borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem" }}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Tech Stack:</strong> {techStack}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="dark" size="sm" href={githubLink} target="_blank">GitHub</Button>
          <Button variant="outline-dark" size="sm" href={liveDemo} target="_blank" disabled={!liveDemo}>Live Demo</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;