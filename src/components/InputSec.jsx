import React from "react";
import InputBox from "./InputBox";
import SettingBox from "./SettingBox";

const InputSec = () => {
  return (
    <div className="w-1/2 flex flex-col px-2 py-4 ">
      <InputBox />
      <SettingBox />
    </div>
  );
};

export default InputSec;
