import React, { useEffect, useState } from 'react';
import Dice from './Dice';

const Dices = () => {
    const number = ["one", "two", " three", "four", "five", "six"];
    const [diceValue1, setDiceValue1] = useState("");
    const [diceValue2, setDiceValue2] = useState("");

    // OVDE NAM NE TREBA FUNKCIJA ZATO STO MOZEMO SAMO DA SETUJEMO VREDNOSTI MATH.RANDOM
    const rolling = () => {

        // let index = Math.floor(Math.random() * 6 + 1);
        // dva razlicita dobijamo;

        setDiceValue1(number[Math.floor(Math.random() * 6)]);
        setDiceValue2(number[Math.floor(Math.random() * 6)]);
        console.log(diceValue1, diceValue2);
    }

    const handleSubmit = e => {
        e.preventDefault();
        rolling();
    }

    // useEffect(() => {
    //     rolling();
    // }, [])

    return (
        <>
            {/* TREBA DA ISPITAMO DA LI IMA NESTO AKO NEMA VRATI LOADING */}
            <Dice diceValue={diceValue1} />
            <Dice diceValue={diceValue2} />
            <button onClick={rolling}>Roll dices</button>
        </>);
}

export default Dices;