'use client';
/*
  {
    question: "Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
    options: ["Bambu Harcı", "Anne Duası", "Pirinç Unu", "Noodle"],
    answer: "Pirinç Unu",
    media: "cin-seddi.jpg",
  }
*/


import React, { useState, useEffect } from 'react';

const SingleQuestion = ({ question, options, answer, media , nextQuestion , giveAnswer , index } : { question: string, options: string[], answer: string, media: string , nextQuestion: any , giveAnswer: any , index: number }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const [leftTime, setLeftTime] = useState<number>(30);

    const handleAnswer = (option: string) => {
        //setSelected(option);
        //setIsAnswered(true);
        giveAnswer(index, option);
        setLeftTime(30);
        nextQuestion();
    }

    const clearQuestion = () => {
        setSelected(null);
        setIsAnswered(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftTime((prev) => {
                if (prev === 0) {
                    handleAnswer("");
                    return 30;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    } , [leftTime]);

    return (
        <div className="relative flex flex-col items-center">
            <div className={"absolute -top-24 w-20 h-20 bg-white rounded-full flex items-center justify-center text-black font-bold shadow-xl bg-green-200 " + (leftTime > 5 ? leftTime > 10 ? leftTime > 15 ? "" : "animate-pulse" : "animate-pulse animate-bounce" : "animate-pulse animate-bounce animate-spin")}>
                <p>{leftTime}</p>
            </div>
            <img src={`/assets/img/${media}`} alt={question} className="w-32 h-32 object-cover" />
            <h2 className="text-black text-2xl font-bold my-4">{question}</h2>
            <div className={"text-back grid grid-cols-2 gap-4 duration-300" + (leftTime > 20 ? " opacity-0" : " opacity-100")}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={"p-4 rounded-lg" + (isAnswered ? (option === answer ? " text-white bg-green-500" : " text-white bg-red-500") : " text-white bg-gray-500")}
                        onClick={() => handleAnswer(option)}
                        disabled={isAnswered || leftTime > 20}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SingleQuestion;