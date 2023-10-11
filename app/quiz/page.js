"use client";
import React, { useCallback, useEffect, useState } from "react";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";
const QUIZ_STATES = {
  start: "START",
  quiz: "QUIZ",
  complete: "COMPLETE",
};
const Quiz = () => {
  const [start, setStart] = useState(QUIZ_STATES.start);
  const [questions, setQuestions] = useState([]);
  const [loading, setloading] = useState(false);
  const startQuiz = async () => {
    await fetchQuestions();
    setStart(QUIZ_STATES.quiz);
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
    [QUIZ_STATES.start]: (props) => (
      <StartScreen startQuiz={startQuiz} {...props} />
    ),
    [QUIZ_STATES.quiz]: (props) => (
      <QuizScreen questions={questions} {...props} />
    ),
  }[start];
  return (
    <div className=" h-full">
      <COMPONENT loading={loading} />
    </div>
  );
};

export default Quiz;
