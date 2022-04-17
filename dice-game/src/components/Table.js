import React, { useEffect, useState } from 'react';
import Dice from './Dice';
import Score from './Score';

const Table = () => {
    const numbers = ["one", "two", "three", "four", "five", "six"];

    const [result, setResult] = useState([]);
    const [diceValue, setDiceValue] = useState({
        diceValueOne: "",
        diceValueTwo: ""
    });
    const [counter, setCounter] = useState({
        counterOne: 0,
        counterTwo: 0
    });

    const { diceValueOne, diceValueTwo } = diceValue;
    const { counterOne, counterTwo } = counter;

    const handleRoll = e => {
        e.preventDefault();

        let indexOne = Math.floor(Math.random() * 6);
        let indexTwo = Math.floor(Math.random() * 6);

        setDiceValue({ diceValueOne: numbers[indexOne], diceValueTwo: numbers[indexTwo] });
        setResult([...result, indexOne + indexTwo + 2]);
    }

    useEffect(() => {
        if (result.length === 2) {

            if (result[0] > result[1]) {
                setCounter({ ...counter, counterOne: counterOne + 1 })
            }
            else if (result[1] > result[0]) {
                setCounter({ ...counter, counterTwo: counterTwo + 1 })
            }
            else {
                console.log("=");
            }
            setResult([]);
        }

        if (counterOne === 5 || counterTwo === 5) {
            setCounter({ counterOne: 0, counterTwo: 0 })
        }

    }, [result])

    // console.log(result, counter.counterOne, counter.counterTwo, diceValue.diceValueOne, diceValue.diceValueTwo);

    return (
        <>
            <p>{result[0]} {result[1]}</p>
            <Score counter={counter} />
            <Dice diceNum={diceValueOne} />
            <Dice diceNum={diceValueTwo} />
            <br />
            <button onClick={handleRoll}>Roll Dices</button>
        </>
    );
}

export default Table;