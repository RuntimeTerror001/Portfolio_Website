import React from "react";
import "./aboutme.css";
import profile_img from "../../assets/profile_img.jpg";

function Aboutme() {
  return (
    <div className="aboutme">
      <h1 className="about-title">About Me</h1>

      <div className="about-card">
        {/* Left side image */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        {/* Right side content */}
        <div className="about-right">
          <p>
            I am a motivated and curious technology student currently pursuing
            my studies at SRM Institute of Science and Technology. I enjoy
            building user-friendly applications and learning new technologies.
          </p>

          <p>
            I am particularly interested in web development and love working
            with modern tools to create clean and interactive digital
            experiences. I believe in continuous learning and growing through
            hands-on projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
