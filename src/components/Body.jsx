import React, { useState } from "react";
import OutputSec from "./OutputSec";
import { findFrequency } from "../functions";

const Body = () => {
  const [inputPara, setInputPara] = useState("");
  const [numberOfWords, setNumberOfWords] = useState(50);
  const [outputArray, setOutputArray] = useState([]);

  const handleGenrateClick = () => {
    setOutputArray(findFrequency(inputPara, numberOfWords));
  };

  return (
    <div className="h-[calc(100%-5rem)] w-full flex flex-col sm:flex-row px-2 sm:px-4">
      {/* <InputSec /> */}
      <div className="w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col px-2">
        {/* <InputBox /> */}
        <div className="h-3/4 w-full overflow-hidden pt-2 sm:pt-5 flex flex-col gap-2 sm:gap-5">
          <span className="text-xl lg:text-3xl font-semibold px-1">
            Text Input
          </span>
          <textarea
            className="h-[90%] w-full border-2 border-black rounded-xl p-2 overflow-scroll resize-none outline-none lg:text-xl"
            type="text"
            placeholder="Paste/Type your paragraph and click generate to get frequent words"
            value={inputPara}
            onChange={(e) => {
              setInputPara(e.target.value);
            }}
          />
        </div>
        {/* <SettingBox /> */}
        <div className="sm:h-1/4 flex flex-row gap-3 lg:text-xl p-3 justify-between items-center">
          <div className="flex flex-row items-center  gap-2 sm:gap-5">
            <label htmlFor="Numbers" className="text-sm lg:text-2xl">
              Number of words:
            </label>
            <input
              type="number"
              id="Numbers"
              min={1}
              max={100}
              value={numberOfWords}
              className="sm:w-22 px-4 py-2 outline-none border-2 border-black rounded-xl"
              onChange={(e) => {
                setNumberOfWords(e.target.value);
              }}
            />
          </div>
          <div className="px-4 py-2">
            <button
              className=" px-4 py-2 rounded-xl bg-[#1692FE] "
              onClick={() => handleGenrateClick()}
            >
              Generate!
            </button>
          </div>
        </div>
      </div>
      <OutputSec words={outputArray} />
    </div>
  );
};

export default Body;
