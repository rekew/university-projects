import "../styles/Footer.css";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">
          <span className="logo-text">ECOSANA</span>
          <img src={logo} alt="Leaf Logo" className="logo-image" />
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rustem-amirkhanuly-676781351/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/rekewa_/">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
