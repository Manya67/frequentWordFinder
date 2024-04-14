import React from "react";
import InputSec from "./InputSec";
import OutputSec from "./OutputSec";

const Body = () => {
  return (
    <div className="h-[calc(100%-2.5rem)] w-full flex ">
      <InputSec />
      <OutputSec />
    </div>
  );
};

export default Body;
