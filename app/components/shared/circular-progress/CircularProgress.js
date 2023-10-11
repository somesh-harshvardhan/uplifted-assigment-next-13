"use client";
import React from "react";

const CircularProgress = ({
  children,
  radius,
  height,
  width,
  strokeWidth,
  percentage = 0,
  stroke1,
  stroke2,
  fill1,
  fill2,
  classes1 = "",
  classes2 = "",
}) => {
  const r = radius ?? 50;
  const h = height ?? 120;
  const w = width ?? 120;
  const sW = strokeWidth ?? 6;
  const strokeDashArray = 2 * Math.PI * r;
  const strokeDashOffset = strokeDashArray * ((100 - percentage) / 100);
  const storkeColor1 = stroke1 ?? "#F3F4FA";
  const storkeColor2 = stroke2 ?? "#44B77B";
  const fillColor1 = fill1 ?? "transparent";
  const fillColor2 = fill2 ?? "transparent";
  return (
    <div
      className={`relative flex justify-center items-center`}
      style={{ height: h, width: w }}
    >
      <svg className={` relative h-full w-full rotate-[270deg]`}>
        <circle
          cx={w / 2}
          cy={h / 2}
          r={r}
          strokeDasharray={strokeDashArray}
          stroke={storkeColor1}
          fill={fillColor1}
          strokeWidth={sW}
          className={classes1}
        ></circle>
        <circle
          cx={w / 2}
          cy={h / 2}
          r={r}
          strokeDasharray={strokeDashArray}
          strokeDashoffset={strokeDashOffset}
          fill={fillColor2}
          stroke={storkeColor2}
          strokeWidth={sW}
          strokeLinecap={"round"}
          className={classes2}
        ></circle>
      </svg>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default CircularProgress;
