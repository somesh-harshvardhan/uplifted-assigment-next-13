"use client";
import React, { useState } from "react";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";

const Quiz = () => {
  const [start, setStart] = useState(false);
  const startQuiz = () => setStart(true);
  return (
    <div className=" h-full">
      {!start ? <StartScreen startQuiz={startQuiz} /> : <QuizScreen />}
    </div>
  );
};

export default Quiz;
