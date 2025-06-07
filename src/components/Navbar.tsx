import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import odcLogo from '../assets/images/odc-logo2.png';
import team from "../assets/images/team1-logo.png";
import FAQ from  "../assets/images/FAQ-logo.png"; 
import event from   "../assets/images/event-logo.png"
import explore from   "../assets/images/explore-logo.png"
import about from   "../assets/images/about-logo.png"
import home from "../assets/images/home-logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <img src={odcLogo || "/placeholder.svg"} alt="" />
            <h1>DCRUSTODC</h1>
          </div>
          
          <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/home" className='navpage' onClick={() => setMenuOpen(false)}>
              <img src={home} alt="" />
              Home
            </Link>
            <Link to="/about" className='navpage' onClick={() => setMenuOpen(false)}>
              <img src={about || "/placeholder.svg"} alt="" />
              About
            </Link>
            <Link to="/team" className='navpage' onClick={() => setMenuOpen(false)}>
              <img src={team || "/placeholder.svg"} alt="teams-logo" />
              Team
            </Link>
            <Link to="/events" className='navpage' onClick={() => setMenuOpen(false)}>
              <img src={event || "/placeholder.svg"} alt="" />
              Events
            </Link>
            <Link to="/FAQ" className='navpage' onClick={() => setMenuOpen(false)}>
              <img src={FAQ || "/placeholder.svg"} alt="" />
              FAQ
            </Link>
            <button className="connect-button" onClick={() => setMenuOpen(false)}>
              <img src={explore || "/placeholder.svg"} alt="" />
              Explore Now
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`mobile-overlay ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;