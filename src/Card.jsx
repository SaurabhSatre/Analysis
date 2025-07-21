import React from 'react';
import './Card.css';

function Card({ title, image, description, onViewDetails }) {
  return (
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-btn" onClick={onViewDetails}>View Details</button>
    </div>
  );
}

export default Card; 