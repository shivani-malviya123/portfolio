
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyNavbar from "./components/Navbar";
import Skills from "./components/Skills"; // Uncomment if you want to use Skills component
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Uncomment if you want to use Contact component
// Uncomment if you want to use Projects component
function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;