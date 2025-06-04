
// // import React from "react";
// // import { Container, Row, Col, Card } from "react-bootstrap";
// // import "./About.css";

// // const About = () => {
// //   return (
// //     <section className="about-section d-flex align-items-center" id="about">
// //       <Container>
// //         <h2 className="text-white mb-5 text-center">About Me</h2>
// //         <Row className="align-items-center">
// //           <Col md={6}>
// //             <Card bg="dark" text="light" className="mb-4 shadow-lg border-light">
// //               <Card.Body>
// //                 <Card.Title>Hi, I'm Shivani Malviya 👩‍💻</Card.Title>
// //                 <Card.Text>
// //                   I'm a <strong>self-taught developer</strong> and currently a student with a passion for building full-stack web apps using the <strong>MERN stack</strong>.
// //                 </Card.Text>
// //                 <Card.Text>
// //                   Focused on <strong>frontend</strong> development with React and Bootstrap, while also exploring backend tools like Node.js and Express.
// //                 </Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md={6}>
// //             <ul className="text-light fs-5">
// //               <li>📚 Learning: React, Node.js, MongoDB</li>
// //               <li>🛠️ Tools: VS Code, Git, Bootstrap</li>
// //               <li>🎯 Goal: Become a MERN Stack Developer</li>
// //               <li>💡 Interest: UI Design, Clean Code</li>
// //             </ul>
// //           </Col>
// //           <div className="d-flex flex-wrap justify-content-center gap-5 text-white">
// //   <div className="text-center">
// //     <i className="fab fa-html5" style={{ fontSize: "50px", color: "#e44d26" }}></i>
// //     <div>HTML</div>
// //   </div>
// //   <div className="text-center">
// //     <i className="fab fa-css3-alt" style={{ fontSize: "50px", color: "#2965f1" }}></i>
// //     <div>CSS</div>
// //   </div>
// //   <div className="text-center">
// //     <i className="fab fa-js-square" style={{ fontSize: "50px", color: "#f7df1e" }}></i>
// //     <div>JavaScript</div>
// //   </div>
// //   <div className="text-center">
// //     <i className="fab fa-github" style={{ fontSize: "50px", color: "#fff" }}></i>
// //     <div>GitHub</div>
// //   </div>
// // </div>

// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default About;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./Home.css"; // same gradient background as home
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiMysql, SiJava } from "react-icons/si";

// const About = () => {
//   return (
//     <section className="home-section text-white" id="about">
//       <Container>
//         <h2 className="text-center mb-5">About Me</h2>
//         <Row className="justify-content-center">
//           <Col md={10}>
//             <p className="lead mb-4 text-center">
//               I’m <strong>Shivani Malviya</strong>, a self-taught student passionate about becoming a MERN Stack Developer.
//               I enjoy learning new technologies and building web applications using MongoDB, Express, React, and Node.js.
//               Currently, I’m focused on strengthening my frontend skills and diving deeper into backend development.
//             </p>
//           </Col>
//         </Row>

//         <h3 className="text-center mt-5 mb-4">Skills</h3>
//         <Row className="justify-content-center text-center gap-4">
//           <Col xs={4} sm={3} md={2}>
//             <FaHtml5 size={50} color="#e44d26" />
//             <div>HTML</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <FaCss3Alt size={50} color="#2965f1" />
//             <div>CSS</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <FaJs size={50} color="#f7df1e" />
//             <div>JavaScript</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <FaReact size={50} color="#61dbfb" />
//             <div>React</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <FaNodeJs size={50} color="#3c873a" />
//             <div>Node.js</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <SiExpress size={50} color="#ffffff" />
//             <div>Express</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <SiMongodb size={50} color="#4db33d" />
//             <div>MongoDB</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <SiMysql size={50} color="#00758f" />
//             <div>MySQL</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <SiJava size={50} color="#f89820" />
//             <div>Java</div>
//           </Col>
//           <Col xs={4} sm={3} md={2}>
//             <FaGithub size={50} color="#fff" />
//             <div>GitHub</div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Custom styles

// ✅ Corrected import statement
import img from "../assets/img.png"; // Adjusted relative path

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="text-center mb-5 about-heading">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            {/* ✅ Fixed image path */}
            <img
              src={img}
              alt="profile"
              className="img-fluid rounded-circle about-img"
            />
          </Col>
          <Col md={8}>
            {/* <h2>About Me</h2> */}
            <p>
              Hi, I'm <strong>Shivani Malviya</strong> 👩‍💻 — a passionate, self-taught web developer and currently a student, on a journey to become a <strong>MERN Stack Developer</strong>.
            </p>
            <p>
              I'm actively learning <strong>MongoDB, Express, React</strong>, and <strong>Node.js</strong>, and enjoy building full-stack web applications. I love solving problems, improving user experiences, and writing clean and maintainable code.
            </p>
            <p>
              Currently, I'm focused on strengthening my frontend skills using <strong>React</strong> and <strong>Bootstrap</strong>, while exploring backend technologies like <strong>Node.js</strong> and <strong>Express.js</strong>.
            </p>
            <p>🚀 Always curious to learn, build, and grow as a developer.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
