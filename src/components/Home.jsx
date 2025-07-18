// import React from "react";
// import { Container, Button, Image, Row, Col } from "react-bootstrap";
// import profileImg from "../assets/img.png";
// import "./Home.css";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// const Home = () => {
//   return (
//     <>
// <section className="home-section d-flex align-items-center" id="home">
//         <Container>
//           <Row className="align-items-center text-white text-center text-md-start">
//             {/* Left Column - Image */}
//             <Col md={5} className="mb-4 mb-md-0 d-flex justify-content-center">
//               <Image
//                 src={profileImg}
//                 alt="Shivani Malviya"
//                 roundedCircle
//                 className="profile-img"
//               />
//             </Col>

//             {/* Right Column - Text */}
//             <Col md={7}>
//               <h1 className="display-4 fw-bold">
//                 Hi, I’m <span className="highlight">Shivani</span>
//               </h1>

//               <h3 className="typewriter mb-3">Aspiring MERN Stack Developer</h3>

//               <p className="lead mb-4">
//                 I'm a student passionate about web development, currently exploring
//                 the MERN stack — MongoDB, Express, React, and Node.js. I enjoy
//                 learning by building and continuously aim to grow as a full-stack
//                 developer.
//               </p>

//               {/* <div className="mb-4">
//                 <span className="badge bg-secondary me-2">Frontend Learner</span>
//                 <span className="badge bg-secondary me-2">React Enthusiast</span>
//                 <span className="badge bg-secondary">Self-Taught</span>
//               </div> */}

//               <div className="d-flex flex-wrap gap-3 mb-3">
//                 <Button variant="light" className="btn-hover">
//                   Download Resume
//                 </Button>
//                 <Button
//                   onClick={() => (window.location.href = "/contact")}
//                   variant="outline-light"
//                   className="btn-hover"
//                 >
//                   Contact Me
//                 </Button>
//               </div>

//               <blockquote className="blockquote text-light mt-4 fst-italic">
//                 "Learning never exhausts the mind." – Leonardo da Vinci
//               </blockquote>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </>
//   );
// };
// export default Home;



import React from "react";
import { Container, Button, Image, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img.png";
import "./Home.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion"; // 🆕 Added

const Home = () => {
  return (
    <>
      <section className="home-section d-flex align-items-center" id="home">
        <Container>
          <Row className="align-items-center text-white text-center text-md-start">

            {/* Left Column - Image */}
            <Col md={5} className="mb-4 mb-md-0 d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={profileImg}
                  alt="Shivani Malviya"
                  roundedCircle
                  className="profile-img"
                />
              </motion.div>
            </Col>

            {/* Right Column - Text */}
            <Col md={7}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
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

                <div className="d-flex flex-wrap gap-3 mb-3">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button variant="light" className="btn-hover">
                      Download Resume
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      onClick={() => (window.location.href = "/contact")}
                      variant="outline-light"
                      className="btn-hover"
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </div>

                <blockquote className="blockquote text-light mt-4 fst-italic">
                  "Learning never exhausts the mind." – Leonardo da Vinci
                </blockquote>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
