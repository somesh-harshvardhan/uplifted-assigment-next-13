"use client";
import React, { useEffect, useState } from "react";
import OverlappingLayer from "../components/assets/OverlappingLayer";
import CircularProgress from "../components/shared/circular-progress/CircularProgress";
import Button from "../components/shared/button/Button";
import { BsArrowRight } from "react-icons/bs";
import RoundCheckbox from "../components/shared/check-box/RoundCheckbox";

const QuestionsCounter = ({ totalQuestions, answered, children }) => {
  const percentage = (answered / totalQuestions) * 100;

  return (
    <div className=" h-[120px] w-[120px]  bg-white rounded-full absolute left-1/2 -top-[50px] translate-x-[-50%] flex items-center justify-center whitespace-nowrap">
      <CircularProgress percentage={percentage}>{children}</CircularProgress>
    </div>
  );
};

const Option = ({ index, option, selected, setSelected }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setSelected();
  };
  useEffect(() => {
    if (selected === index) setIsChecked(true);
    else setIsChecked(false);
  }, [selected, index]);
  return (
    <li
      className={`h-[80px] bg-[#F3F4FA] flex items-center rounded-xl my-5 p-6 ${
        isChecked ? "border-[2px] border-green-1" : "border-none"
      }`}
      onClick={handleClick}
    >
      <RoundCheckbox id={option + index} isChecked={isChecked} />
      <span className=" ml-5">{option}</span>
    </li>
  );
};

const QuizScreen = ({
  questions,
  setScore,
  loading,
  setLoading,
  finishQuiz,
}) => {
  const [currentCounter, setCurrentCounter] = useState(0);
  const [selected, setSelected] = useState(null);
  const [time, setTime] = useState();

  const totalQuestion = questions.length;
  const answered = currentCounter;
  const currentQuestion = questions?.[currentCounter - 1];
  const answer = currentQuestion?.correctAnswer;
  const isCorrect = answer === currentQuestion?.options[selected];

  const handleNextClick = () => {
    setSelected(null);
    setScore((prev) => (isCorrect ? prev + 5 : prev));
    if (currentCounter < totalQuestion) {
      setCurrentCounter(currentCounter + 1);
    } else {
      finishQuiz();
    }
  };
  useEffect(() => {
    if (questions.length) {
      setCurrentCounter(1);
      console.log(questions);
    }
  }, [questions]);

  return (
    <div className=" bg-[#AF9CF3] h-full relative z-0 flex flex-col">
      <OverlappingLayer className=" relative w-full -top-7 z-10" />
      {/* quiz container */}
      <div className=" bg-white w-full flex-1 rounded-tr-[52px] rounded-tl-[52px] relative">
        {/* question counter */}
        <QuestionsCounter totalQuestions={totalQuestion} answered={answered}>
          <div className={[" italic"]}>
            <span className=" text-4xl font-bold">{answered}</span>
            <span className=" text-gray-500 font-semibold">
              / {totalQuestion}
            </span>
          </div>
        </QuestionsCounter>

        {/* Question */}
        <div className=" mt-20 p-5">
          <div className=" leading-7 font-semibold text-xl">
            {currentQuestion?.question}
          </div>
          <div className=" my-5">
            {currentQuestion?.question_img && (
              <img
                src={currentQuestion?.question_img}
                className=" h-auto w-full max-h-[300px] bg-cover"
                alt="question-img"
              />
            )}
          </div>
          {/* options card */}
          <ul className=" list-none mb-20">
            {currentQuestion?.options.map((opt, index) => (
              <Option
                key={index}
                option={opt}
                index={index}
                selected={selected}
                setSelected={() => !loading && setSelected(index)}
              />
            ))}
          </ul>
        </div>
      </div>
      {/* next button */}
      <div className=" fixed bottom-[50px] w-[calc(100%-40px)] left-1/2 -translate-x-1/2 max-w-md">
        <Button
          label={"Next"}
          icon={BsArrowRight}
          onClick={handleNextClick}
          disabled={!Number.isInteger(selected)}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
