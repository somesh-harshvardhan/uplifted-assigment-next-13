import React from "react";
import OverlappingLayer from "../components/assets/OverlappingLayer";

const QuizScreen = () => {
  return (
    <div className=" bg-[#AF9CF3] h-full relative z-0">
      <OverlappingLayer className=" absolute w-full -top-7 z-10" />
    </div>
  );
};

export default QuizScreen;
