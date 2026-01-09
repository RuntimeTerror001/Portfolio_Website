import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Aboutme from "./components/aboutme/Aboutme.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";

function App() {
 return(
    <div>
    <Navbar/>
    <Hero/>
    <Aboutme/>
    <Projects/>
    <Contact/>
    </div>
 )
}

export default App;
