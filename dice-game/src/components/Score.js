import React from 'react';

const Score = ({ counter }) => {
    return (<div>Score<br /> {counter.counterOne} : {counter.counterTwo}</div>);
}

export default Score;