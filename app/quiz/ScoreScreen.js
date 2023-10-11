import React from "react";
import OverlappingLayer from "../components/assets/OverlappingLayer";
import Button from "../components/shared/button/Button";

const ScoreScreen = ({ score, questions, startQuiz }) => {
  return (
    <div className=" bg-[#AF9CF3] h-full relative z-0 flex flex-col">
      <OverlappingLayer className=" relative w-full -top-7 z-10" />

      <div className=" bg-white w-full flex-1 rounded-tr-[52px] rounded-tl-[52px] relative p-5">
        <h3 className=" mt-5 font-bold text-2xl text-center">Your Result</h3>
        <div className=" mt-9">
          <div>
            <li className=" list-none  bg-green-1/[.1] rounded-lg min-h-12 flex items-center py-4 px-4 gap-x-2 text-sm">
              <span className=" block h-3 w-3 rounded-full bg-green-1"></span>
              <span> {score}</span>
              <span>Correct</span>
            </li>
          </div>
          <div>
            <li className=" list-none  bg-red-1/[.1] rounded-lg min-h-12 flex items-center py-4 px-4 gap-x-2 text-sm mt-4">
              <span className=" block h-3 w-3 rounded-full bg-red-1"></span>
              <span> {questions.length - score}</span>
              <span>Incorrect</span>
            </li>
          </div>
        </div>
      </div>
      <div className=" fixed bottom-[50px] w-[calc(100%-40px)] left-1/2 -translate-x-1/2 max-w-md">
        <Button label={"Start Again"} onClick={startQuiz} />
      </div>
    </div>
  );
};

export default ScoreScreen;
