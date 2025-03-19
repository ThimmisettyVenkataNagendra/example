import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">FITFLOW</Link>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a 
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => handleSmoothScroll(e, "home")}
            >Home</a>
          </li>
          <li>
            <a 
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => handleSmoothScroll(e, "about")}
            >About</a>
          </li>
          <li>
            <a 
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={(e) => handleSmoothScroll(e, "services")}
            >Services</a>
          </li>
          <li>
            <Link to="/registration" className={activeSection === "register" ? "active" : ""}>
              Register
            </Link>
          </li>
        </ul>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
}
