import React from "react";

const SettingBox = () => {
  return (
    <div className="h-1/4 flex flex-col gap-3 text-xl p-3">
      <label htmlFor="Numbers" className="text-2xl">
        Number of words
      </label>
      <input
        type="number"
        id="Numbers"
        min={0}
        max={100}
        defaultValue={50}
        className="w-20 px-2 py-4 outline-none border-2 border-black rounded-xl"
      />
    </div>
  );
};

export default SettingBox;
