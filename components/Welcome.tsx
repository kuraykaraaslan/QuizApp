'use client';
import React, { useState } from 'react';


const Welcome = ( {  playerName , setPlayerName , nextQuestion } : { playerName: string, setPlayerName: any, nextQuestion: any }) => {

    const handleNext = () => {
        if (!playerName) {
            alert('Please enter your name');
            return;
        }
        if (playerName.length < 3) {
            alert('Please enter a valid name');
            return;
        }

        if (playerName.length > 20) {
            alert('Please enter a shorter name');
            return;
        }
        
        nextQuestion();
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-black text-2xl font-bold mb-4">Welcome to the Quiz!</h1>
            <p className="text-gray-500 mb-4">Please enter your Name</p>
            <input
                type="text"
                placeholder="Name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="border border-gray-300 p-2 rounded-md mb-4 text-black"
            />
            <button id='start'
                onClick={handleNext}
                className="bg-green-300 text-white p-2 rounded-md"
            >
                Next
            </button>

            <p className="text-gray-500 mt-4">You will have 30 seconds for each question</p>
        </div>
    );
}

export default Welcome;