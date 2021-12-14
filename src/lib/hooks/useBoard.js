import { useState } from 'react';
import { sizes } from '@constants';

export const useSquares = (squares) => {
  const [takenSquares, setTakenSquares] = useState([]);
  const { ships: { width } } = sizes;
  const generate = (ship, squares) => {
   let randomDirection = Math.floor(Math.random() * ship.directions.length); // Must be only 0 or 1
   let current = ship.directions[randomDirection];
   let direction; // Must be only 1 or 10
   if (randomDirection === 0) direction = 1;
   if (randomDirection === 1) direction = 10;
   let randomStart = Math.abs(Math.floor(Math.random() * squares.length - (ship.directions[0].length * direction))); // Board has 10x10 squares
   const isTaken = current.some(index => squares[randomStart + index].status === 'taken');
   const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1);
   const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0);
  
   if (!isTaken && !isAtLeftEdge && !isAtRightEdge) {
     current.forEach(index => {
       const s = squares[randomStart + index];
       if (s) {
        squares[randomStart + index].status = 'taken';
        squares[randomStart + index].type = ship.name;
        squares[randomStart + index].color = ship.color;
       }
     });
   } else {
     generate(ship, squares);
   }
   return squares;
  };

  const generateShips = (ships) => {
    let t;
    ships.forEach(ship => {
      t = generate(ship, squares);
    });
    setTakenSquares(t);
  }

  
  return {
    generateShips,
    takenSquares,
  }
}

export const useRandom = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  const usedNumbers = [];
  const generateRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 100);
    if (usedNumbers.find(item => item === randomNumber)) {
      generateRandomNumber();
    } else {
      usedNumbers.push(randomNumber);
    }
    return randomNumber;
  }
  return [
    generateRandomNumber,
  ]
}