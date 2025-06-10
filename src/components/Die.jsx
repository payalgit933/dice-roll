import React from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  one: faDiceOne,
  two: faDiceTwo,
  three: faDiceThree,
  four: faDiceFour,
  five: faDiceFive,
  six: faDiceSix
};

function Die({ face, rolling }) {
  return (
    <div className="Die-container">
      <FontAwesomeIcon
        icon={iconMap[face]}
        className={`Die ${rolling ? 'Die-shaking' : ''}`}
        size="4x"
      />
    </div>
  );
}

export default Die;
