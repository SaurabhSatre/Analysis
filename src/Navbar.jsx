import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleNavClick = (section) => {
    alert(`You clicked on ${section}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyWebsite</div>
      <ul className="navbar-links">
        <li><a href="#home" onClick={() => handleNavClick('Home')}>Home</a></li>
        <li><a href="#about" onClick={() => handleNavClick('About')}>About</a></li>
        <li><a href="#contact" onClick={() => handleNavClick('Contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 