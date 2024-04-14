import React from "react";

const OutputSec = ({ words }) => {
  return (
    <div className="w-full h-1/2 sm:h-full sm:w-1/2 sm:border-l-2 border-black flex flex-col overflow-hidden">
      <div className="h-full w-full p-4 overflow-scrol flex flex-col gap-2 lg:gap-4">
        <span className="text-xl lg:text-3xl font-semibold h-8">
          List of Words
        </span>
        <div className="h-[clac(100%-2.5rem)] mt-2 overflow-scroll">
          {words.length > 0 ? (
            words.map((word, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between items-center p-3 border-b-2 border-[#1692fe] mb-3 lg:mb-5 lg:text-lg"
                >
                  <span className="">{word.word}</span>
                  <span className="h-6 w-6 text-white bg-[#1692fe] rounded-xl flex justify-center items-center">
                    {word.freq}
                  </span>
                </div>
              );
            })
          ) : (
            <span className="text-sm text-gray-500">
              **Type/Paste paragraph and click on generate**
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputSec;
