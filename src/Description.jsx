import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Card.css';

function Description() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, image } = location.state || {};

  if (!title) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}><h2>No card data found.</h2><button onClick={() => navigate(-1)}>Go Back</button></div>;
  }

  return (
    <div className="card" style={{ margin: '2rem auto', maxWidth: 400 }}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Description; 