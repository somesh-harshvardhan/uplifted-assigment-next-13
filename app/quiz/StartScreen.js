"use client";
import React from "react";
import Button from "../components/shared/button/Button";
import { BsArrowRight } from "react-icons/bs";

const StartScreen = ({ startQuiz }) => {
  return (
    <div className=" flex flex-col justify-between items-center  bg-gradient-to-b from-[#FFF] from-[0%] to-[#AF9CF3] to-[90%] h-full p-10">
      <div className=" flex items-center justify-center">
        <img src="/images/logo.svg" className=" h-10" alt="logo" />
      </div>
      <div className=" h-[200px] w-[202px] rounded-full shadow-md bg-white flex justify-center items-center text-4xl font-bold text-red-1">
        Quiz
      </div>
      <Button label={"Start"} onClick={startQuiz} />
    </div>
  );
};

export default StartScreen;
