import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Perreo Queens Logo</div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <div onClick={() => scrollToSection("home")}>HOME</div>
        <div onClick={() => scrollToSection("about")}>ABOUT</div>
        <div onClick={() => scrollToSection("schedule")}>SCHEDULE</div>
        <div onClick={() => scrollToSection("reviews")}>REVIEWS</div>
        <div onClick={() => scrollToSection("contact")}>CONTACT</div>
      </div>
    </nav>
  );
};
