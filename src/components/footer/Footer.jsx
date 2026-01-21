import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Aahaan Sethi</h1>
          <p>
            I’m a tech enthusiast who loves turning ideas into interactive digital
            experiences and continuously learning new technologies.
          </p>
        </div>

        <div className="footer-top-right">
          <h3>Stay Connected</h3>

          {/* Email form */}
          <form
            action="https://formspree.io/f/xjggbzlp"
            method="POST"
            className="footer-input"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aahaan Sethi. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://github.com/RuntimeTerror001" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aahaan-sethi-35a2a428a" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/aahaan_sethi?igsh=Mms2emNyY3pnYWhx" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
