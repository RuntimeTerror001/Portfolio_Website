import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Aboutme from "./components/aboutme/Aboutme.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import './index.css';
function App() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}


export default App;

