import React from 'react';

const Dice = ({ diceNum }) => {
    return (
        <i className={`fa-solid fas fa-dice-${diceNum}`}></i>
    );
}

export default Dice;