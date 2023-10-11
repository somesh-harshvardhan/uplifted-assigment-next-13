import React from "react";
import OverlappingLayer from "../components/assets/OverlappingLayer";

const ScoreScreen = ({ score }) => {
  return (
    <div className=" bg-[#AF9CF3] h-full relative z-0 flex flex-col">
      <OverlappingLayer className=" relative w-full -top-7 z-10" />
      {/* quiz container */}
      <div className=" bg-white w-full flex-1 rounded-tr-[52px] rounded-tl-[52px] relative">
        {score}
      </div>
    </div>
  );
};

export default ScoreScreen;
