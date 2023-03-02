import React, { useState, useEffect } from 'react';
import './MemoryGame.css';
import Card from './Card'
import CardFlip from './CardFlip';

const MemoryGame = () => {
  const [cards, setCards] = useState([
    { id: 1, value: '🍎', isFlipped: false },
    { id: 2, value: '🍌', isFlipped: false },
    { id: 3, value: '🍇', isFlipped: false },
    { id: 4, value: '🍒', isFlipped: false },
    { id: 5, value: '🥕', isFlipped: false },
    { id: 6, value: '🌽', isFlipped: false },
    { id: 7, value: '🍆', isFlipped: false },
    { id: 8, value: '🍅', isFlipped: false },
    { id: 9, value: '🍔', isFlipped: false },
    { id: 10, value: '🍟', isFlipped: false },
    { id: 11, value: '🍕', isFlipped: false },
    { id: 12, value: '🌭', isFlipped: false },
  ]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    const flippedCardIndex = cards.findIndex((card) => card.id === id);
    const flippedCard = { ...cards[flippedCardIndex], isFlipped: true };
    const newCards = [...cards];
    newCards[flippedCardIndex] = flippedCard;
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const firstCard = cards.find((card) => card.id === flippedCards[0]);
      const secondCard = cards.find((card) => card.id === flippedCards[1]);

      if (firstCard.value === secondCard.value) {
        const newCards = [...cards];
        newCards.forEach((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            card.isFlipped = true;
          }
        });
        setCards(newCards);
      } else {
        const newCards = [...cards];
        newCards.forEach((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            card.isFlipped = false;
          }
        });
        setCards(newCards);
      }

      setFlippedCards([]);
    }
  }, [flippedCards]);

  const allCardsFlipped = cards.every((card) => card.isFlipped);

  return (
    <div>
      <h1>Memory Game</h1>
      {allCardsFlipped ? (
        <h2>Congratulations, you won!</h2>
      ) : (
        <CardFlip cards={cards} handleCardClick={handleCardClick} />
      )}
    </div>
  );
};

export default MemoryGame;
