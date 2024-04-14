import React, { useState } from "react";

const InputBox = () => {
  const [inputPara, setInputPara] = useState("");
  return (
    <div className="h-3/4 w-full overflow-hidden">
      <textarea
        className="h-full w-full border-2 border-black rounded-xl p-2 overflow-scroll resize-none outline-none text-xl"
        cols={60}
        rows={100}
        type="text"
        placeholder="Paste/Type your paragraph to get frequent words"
        value={inputPara}
        onChange={(e) => {
          setInputPara(e.target.value);
        }}
      />
    </div>
  );
};

export default InputBox;
