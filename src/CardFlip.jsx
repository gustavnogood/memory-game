import React from 'react';
import Card from './Card';

const CardFlip = ({ cards, handleCardClick }) => {
  return (
    <div className="memory-game">
      {cards.map((card) => (
        <Card key={card.id} card={card} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default CardFlip;
