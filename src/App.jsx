=import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Aboutme from "./components/aboutme/Aboutme.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <Hero />
        <Aboutme />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
