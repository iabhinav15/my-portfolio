"use client";
import React from "react";

const Resume = () => {
  return (
    <div className="flex justify-center ">
      <object className="rounded-t-[10px]  "
        data="/Abhinav_Singh_Resume.pdf"
        width="830"
        height={window.innerHeight - 100}
      ></object>
    </div>
  );
};

export default Resume;
