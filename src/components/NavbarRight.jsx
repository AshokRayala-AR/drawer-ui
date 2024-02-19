import React from "react";

export default function Navbar({ state, handleClick }) {
  return (
    <ul
      className={`flex justify-between items-center px-2 bg-gray-500 text-white py-3  shadow-md hover:bg-gray-400 border border-slate-300   ${
        state ? "w-full py-4" : "w-full py-2"
      } 
`}
    >
      <li>
        <img
          src="https://www.svgrepo.com/show/532195/menu.svg"
          alt="menu"
          className={`w-8 h-8 text-white ${state ? "hidden" : "block"}`}
          onClick={() => {
            handleClick();
          }}
        />
      </li>
      <li>
        <h3 text-xxl>Your Data</h3>
      </li>
      <li>
        <button>Logout</button>
      </li>
    </ul>
  );
}
