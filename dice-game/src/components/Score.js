import React from 'react';

const Score = ({ counterOne, counterTwo, board }) => {
    return (
        <>
            <div>
                <h3>rounds won:</h3>
                {counterOne} : {counterTwo}
            </div>
            <div>
                <h3>Score:</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><h2>player 1:</h2></td>
                            {board.filter((item, index) => (index % 2 === 0))
                                .map((item, index) => (
                                    <td key={index}>{item}</td>
                                ))}
                        </tr>
                        <tr>
                            <td><h2>player 2:</h2></td>
                            {board.filter((item, index) => (index % 2 !== 0))
                                .map((item, index) => (
                                    <td key={index}>{item}</td>
                                ))}
                        </tr>
                    </tbody>
                </table>

            </div>
        </>);
}

export default Score;