import React from "react";
import './hero.css';
import profile_img from "../../assets/profile_img.jpg";



function Hero() {
    return (
        <>
            <div className="hero">
                <img src={profile_img} alt="Profile" />
                <h1>Hi, I'm Aahaan Sethi</h1>
                <p>Student at SRM Institute of Science and Technology, Kattankulathur</p>
                <p>
                    I’m a tech enthusiast who loves turning ideas into interactive digital
                    experiences and continuously learning new technologies.
                </p>
                <div className="hero-actions">
                    <div className="hero-connect">Connect With Me</div>
                    <div className="hero-resume">My Resume</div>
                </div>
            </div>
        </>
    );

}

export default Hero;