/*
 * Game End and show the result with name 
    */

import React from 'react';

const End = ({ playerName, userScore, totalQuestions, playAgain }: { playerName: string, userScore: number, totalQuestions: number, playAgain: any }) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-black text-2xl font-bold mb-4">Congratulations {playerName}!</h1>
            <p className="text-gray-500 mb-4">You have scored {userScore} out of {totalQuestions}</p>
            <button
                onClick={playAgain}
                className="bg-green-300 text-white p-2 rounded-md"
            >
                Play Again
            </button>
        </div>
    );
}

export default End;