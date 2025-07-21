// src/components/Card.jsx

import React from 'react';
import './Card.css';

function Card({ title, image, description, onViewDetails }) {
  
  // Create a new handler function for the button click
  const handleViewDetailsClick = () => {
    // Check if the gtag function is available on the window object
    if (typeof window.gtag === 'function') {
      // Send a custom event to Google Analytics
      window.gtag('event', 'view_details_click', {
        'event_category': 'Card Interaction',
        'event_label': title // This sends the specific card title
      });
    }

    // Call the original onViewDetails function if it was provided
    // This ensures any existing navigation logic still works
    if (onViewDetails) {
      onViewDetails();
    }
  };

  return (
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {/* Use the new handler for the onClick event */}
      <button className="card-btn" onClick={handleViewDetailsClick}>
        View Details
      </button>
    </div>
  );
}

export default Card;
