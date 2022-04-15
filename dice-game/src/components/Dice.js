import React from 'react';

const Dice = ({ diceValue }) => {
    return (
        <i className={`fa-solid fas fa-dice-${diceValue}`}></i>
    )
}

export default Dice;