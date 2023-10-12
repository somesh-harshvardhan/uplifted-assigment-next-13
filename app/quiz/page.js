"use client";
import React, { useCallback, useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";
import ScoreScreen from "./ScoreScreen";
const QUIZ_STATES = {
  start: "START",
  quiz: "QUIZ",
  complete: "COMPLETE",
};
const Quiz = () => {
  const [start, setStart] = useState(QUIZ_STATES.start);
  const [questions, setQuestions] = useState([]);
  const [loading, setloading] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = async () => {
    await fetchQuestions();
    setScore(0);
    setStart(QUIZ_STATES.quiz);
  };

  const finishQuiz = async () => {
    setStart(QUIZ_STATES.complete);
  };

  const fetchQuestions = useCallback(async () => {
    if (start === QUIZ_STATES.start) {
      try {
        setloading(true);
        const res = await fetch("/api/quiz-data", { method: "GET" });
        const data = await res.json();
        setQuestions([...data.quiz.questions]);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }
  }, [start]);

  const COMPONENT = {
    [QUIZ_STATES.start]: StartScreen,
    [QUIZ_STATES.quiz]: QuizScreen,
    [QUIZ_STATES.complete]: ScoreScreen,
  }[start];
  return (
    <div className=" h-full">
      <COMPONENT
        loading={loading}
        startQuiz={startQuiz}
        setScore={setScore}
        setloading={setloading}
        questions={questions}
        score={score}
        finishQuiz={finishQuiz}
      />
    </div>
  );
};

export default Quiz;
