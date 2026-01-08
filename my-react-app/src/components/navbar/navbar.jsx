import React from "react";
import './navbar.css'
function Navbar(){
    return(<>
        <div className="navbar">
            <h1>Aahaan Sethi</h1>
     
<ul className="nav-menu">
    <li>Home</li>
    <li>About</li>
    <li>Projects</li>
    <li>Contact Me</li>
</ul>
<div className="nav-connect">Connect With Me</div>
   </div>
</>
    );
}

export default Navbar;