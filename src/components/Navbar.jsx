import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure scroll top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="E-Cell MSIT Logo" />
      </Link>

      {/* Desktop Links */}
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/team" className={styles.navLink}>Team</Link>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/events" className={styles.navLink}>Events</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className={styles.hamburger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/team" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Team</Link>
        <Link to="/services" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/events" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Events</Link>
        <Link to="/contact" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
