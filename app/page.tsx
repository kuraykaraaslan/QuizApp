'use client';
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

import questions from "@/data/questions";
import { Provider } from "react-redux";


//
import Welcome from "@/components/Welcome";
import SingleQuestion from "@/components/SingleQuestion";
import End from "@/components/End";
import Toast from "@/components/Toast";

function Home() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playerName , setPlayerName] = useState('');
  const [gameState, setGameState] = useState('welcome');

  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastShow, setToastShow] = useState<boolean>(false);

  const nextQuestion = () => {
    if (gameState === 'welcome') {
      setGameState('playing');
    }

    if (questionIndex === questions.length - 1) {
      setGameState('end');
      calculateScore();
      return;
    }
    setQuestionIndex((prev) => prev + 1);
  }

  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const giveAnswer = (index: number, answer: string) => {
    if (answer === '') {
      setToastMessage('Time is up!');
      setToastShow(true);
      setTimeout(() => {
        setToastShow(false);
      }, 2000);
      
    }
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  }

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (question.answer === userAnswers[index]) {
        newScore++;
      }
    });
    setScore(newScore);
  }


  //get game progress
  useEffect(() => {
    setProgress(((questionIndex + 1) / questions.length) * 100);
  }, [questionIndex]);


  return (

    <>
      <ProgressBar progress={progress} />
      <Card>
        {gameState === 'welcome' && (
          <Welcome playerName={playerName} setPlayerName={setPlayerName} nextQuestion={nextQuestion} />
        )}
        {gameState === 'playing' && (
          <SingleQuestion
            index={questionIndex}
            question={questions[questionIndex].question}
            options={questions[questionIndex].options}
            answer={questions[questionIndex].answer}
            media={questions[questionIndex].media}
            nextQuestion={nextQuestion}
            giveAnswer={giveAnswer} />
        )}
        {gameState === 'end' && (
          <End playerName={playerName} userScore={score} totalQuestions={questions.length} playAgain={() => {
            setQuestionIndex(0);
            setScore(0);
            setGameState('playing');
          }} />
        )}
      </Card>
      <Footer />
      <Toast message={toastMessage} show={toastShow} />
    </>
  );
}

export default function App() {


  return (
      <Home />
  );
}
