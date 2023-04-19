import React, { useState, useEffect, FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/navIcon1.svg";
import navIcon2 from "../../assets/img/navIcon2.svg";
import navIcon3 from "../../assets/img/navIcon3.svg";
import "./navbar.css";

const NavBar: FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#abilities"
              className={
                activeLink === "abilities"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("abilities")}
            >
              Abilities
            </Nav.Link>
            <Nav.Link
              href="#missions"
              className={
                activeLink === "missions" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("missions")}
            >
              Missions
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/nasa">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/NASAWebb/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/nasawebb">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="navbar-btn">
              <span>Click On me!</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
