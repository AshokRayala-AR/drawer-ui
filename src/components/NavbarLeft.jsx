import React from "react";

export default function NavbarLeft({ state, setState, handleClick }) {
  return (
    <div
      className={`nav-left  min-w-56 px-2 bg-gray-500 text-white py-3 text-right flex justify-end shadow-md hover:bg-gray-400 border border-slate-300  ${
        state ? "block py-4" : "hidden"
      }`}
    >
      <img
        className="w-6 h-6 mr-3 "
        src="https://www.svgrepo.com/show/486232/left-arrow-backup-2.svg"
        alt="arrow"
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}
