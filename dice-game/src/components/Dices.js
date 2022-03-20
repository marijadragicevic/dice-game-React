import React, { useState } from 'react';
import Die from "./Die";

const Dices = () => {
    const[number,setNumber]=useState(["one","two","three","four","five","six"]);

    const rolling=e=>{
        Math.floor(Math.random()*6);
    }

    return ( <div>
        <Die/>
        <Die/>
    </div> );
}
 
export default Dices;