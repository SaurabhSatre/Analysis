import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleNavClick = (section) => {
    // Check if the gtag function is available
    if (typeof window.gtag === 'function') {
      // Send a custom event for the navigation link click
      window.gtag('event', 'nav_link_click', {
        'event_category': 'Navigation',
        'event_label': section // This will be 'Home', 'About', or 'Contact'
      });
    }

    // You can keep or remove the alert. For production, you'd remove it.
    // alert(`You clicked on ${section}`); 
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
