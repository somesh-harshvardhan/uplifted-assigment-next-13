import React, { useEffect } from "react";
import OverlappingLayer from "../components/assets/OverlappingLayer";
import Button from "../components/shared/button/Button";
const SpeedoMeter = ({ total, score }) => {
  const rotate = (score / total) * 180 + 270;
  const result = (score / total) * 100;
  return (
    <div className=" h-[230px] overflow-hidden">
      <div className=" h-[200px] w-full flex items-center justify-center relative ">
        <svg width="200" height="200" viewBox="0 0 500 260" fill="none">
          <path
            d="M490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250"
            stroke="url(#paint0_linear_86_5)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_86_5"
              x1="490"
              y1="10"
              x2="10"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#44B77B" />
              <stop offset="0.479043" stopColor="#FFD033" />
              <stop offset="1" stopColor="#FF3B3F" />
            </linearGradient>
          </defs>
        </svg>
        <div className=" absolute bg-[#EBEDF5] h-[184px] w-[184px] rounded-full top-[56px] z-10"></div>
        <div
          className="absolute bg-white h-[120px] w-[120px] rounded-full top-[87px] z-50 transition-[rotate] duration-1000 shadow-md"
          style={{ rotate: rotate + "deg" }}
        >
          <div className=" static z-10 h-full w-full bg-white rounded-full">
            <div className=" absolute -top-[1px] left-1/2 -translate-x-1/2 rotate-[49deg] skew-y-[29deg] skew-x-[33deg] h-[30px] w-[30px] bg-black -z-10"></div>
            <div className=" absolute z-30 h-[100px] w-[100px] border border-slate-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          </div>
        </div>
        <div className=" h-[184px] w-[184px] absolute bg-white rotate-45 z-20 top-[150px]"></div>
        <div className=" absolute z-50 top-[145px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          {result} %
        </div>
      </div>
    </div>
  );
};

const ScoreScreen = ({ score, questions, startQuiz }) => {
  return (
    <div className=" bg-[#AF9CF3] h-full relative z-0 flex flex-col">
      <OverlappingLayer className=" relative w-full -top-7 z-10" />

      <div className=" bg-white w-full flex-1 rounded-tr-[52px] rounded-tl-[52px] relative p-5">
        <h3 className=" mt-5 font-bold text-2xl text-center">Your Result</h3>
        <SpeedoMeter total={questions.length} score={score} />
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
        <div className=" mt-9">
          <Button label={"Start Again"} onClick={startQuiz} />
        </div>
      </div>
    </div>
  );
};

export default ScoreScreen;
