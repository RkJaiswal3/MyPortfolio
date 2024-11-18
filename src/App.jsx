import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include Bootstrap JS for interactivity
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const rowStyle = {
    height: "550px", // Increased row height
    backgroundColor: "#f5f5f5", // Light gray background
    padding: "20px",
    borderRadius: "10px",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    objectFit: "cover",
  };

  return (
    <>
      <Navbar></Navbar>
      <Home row={rowStyle} image={imageStyle}></Home>
      <AboutMe row={rowStyle}></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Experience></Experience>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
