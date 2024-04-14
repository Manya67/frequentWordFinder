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
    <div className="h-[calc(100%-2.5rem)] w-full flex ">
      {/* <InputSec /> */}
      <div className="w-1/2 flex flex-col px-2 py-4 ">
        {/* <InputBox /> */}
        <div className="h-3/4 w-full overflow-hidden">
          <textarea
            className="h-full w-full border-2 border-black rounded-xl p-2 overflow-scroll resize-none outline-none text-xl"
            cols={60}
            rows={100}
            type="text"
            placeholder="Paste/Type your paragraph and click generate to get frequent words"
            value={inputPara}
            onChange={(e) => {
              setInputPara(e.target.value);
            }}
          />
        </div>
        {/* <SettingBox /> */}
        <div className="h-1/4 flex flex-row gap-3 text-xl p-3 justify-between items-center">
          <div className="flex flex-row items-center gap-5">
            <label htmlFor="Numbers" className="text-2xl">
              Number of words
            </label>
            <input
              type="number"
              id="Numbers"
              min={0}
              max={100}
              value={numberOfWords}
              className="w-22 px-4 py-2 outline-none border-2 border-black rounded-xl"
              onChange={(e) => {
                setNumberOfWords(e.target.value);
              }}
            />
          </div>
          <div className="px-4 py-2">
            <button
              className="border-2 px-4 py-2 border-black rounded-xl"
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
