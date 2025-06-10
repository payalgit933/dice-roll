import React, { useState } from 'react';
import Die from './Die';

function RollDice() {
  // Default props (sides of the dice)
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];

  // State hooks
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  // Roll function
  const roll = () => {
    setRolling(true);

    // Wait 1 second before changing dice faces and stop rolling
    setTimeout(() => {
      setDie1(sides[Math.floor(Math.random() * sides.length)]);
      setDie2(sides[Math.floor(Math.random() * sides.length)]);
      setRolling(false);
    }, 300);
  };

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button onClick={roll}>Roll Dice!</button>

    </div>
  );
}

export default RollDice;
