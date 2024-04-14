import React from "react";

const OutputSec = ({ words }) => {
  return (
    <div className="w-1/2 border-l-2 border-black flex flex-col overflow-hidden">
      <div className="h-full w-full p-4 overflow-scroll">
        <span className="text-3xl font-semibold border-b-[1px] border-black h-8">
          List of Words
        </span>
        <div className="h-[clac(100%-2rem)]">
          {words.map((word, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between items-center px-2 py-3 border-b-2 "
              >
                <span>{word.word}</span>
                <span className="h-6 w-6 bg-gray-200 rounded-xl flex justify-center items-center">
                  {word.freq}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutputSec;
