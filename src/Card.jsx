import React from 'react';

const Card = ({ card, handleCardClick }) => {
  return (
    <div className="card" onClick={() => handleCardClick(card.id)}>
      {card.isFlipped ? (
        <div className="card-inner flipped">
          <div className="card-front"></div>
          <div className="card-back">{card.value}</div>
        </div>
      ) : (
        <div className="card-inner">
          <div className="card-front"></div>
        </div>
      )}
    </div>
  );
};

export default Card;
