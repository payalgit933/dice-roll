import React from 'react';
import './App.css'; // Optional, if you want app-level styles
import RollDice from './components/RollDice';

function App() {
  return (
    <div className="App">
      <h1>🎲 Dice Roller</h1>
      <RollDice />
    </div>
  );
}

export default App;
