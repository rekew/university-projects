import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-text">ECOSANA</div>
        <div className="logo-image">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="navbar-right">
        <a href="https://kaz.tengrinews.kz/tag/экология/">Жаңалықтар</a>
      </div>
    </nav>
  );
}

export default Navbar;
