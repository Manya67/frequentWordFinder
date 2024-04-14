import React from "react";

const Header = () => {
  return (
    <div className="h-14 sm:h-20 px-2 sm:px-4 flex flex-row justify-between items-center">
      <h1 className="sm:text-xl lg:text-3xl bg-[#1692FE] px-4 py-2 rounded-xl shadow-lg">
        Frequency Finder{" "}
      </h1>
      <a
        className="sm:text-xl lg:text-3xl bg-[#1692FE] px-4 py-2 rounded-xl shadow-lg"
        href="https://www.linkedin.com/in/manya-jain62002/"
        target="_blank"
      >
        Connect
      </a>
    </div>
  );
};

export default Header;
