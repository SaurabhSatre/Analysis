import React from 'react';
import Card from './Card';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    title: 'Card 1',
    image: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is the description for card 1.'
  },
  {
    title: 'Card 2',
    image: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is the description for card 2.'
  },
  {
    title: 'Card 3',
    image: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'This is the description for card 3.'
  }
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Welcome to My Website</h2>
      <div className="cards-container">
        {cardsData.map((card, idx) => (
          <Card
            key={idx}
            {...card}
            onViewDetails={() => navigate('/description', { state: card })}
          />
        ))}
      </div>
    </div>
  );
}

export default Home; 