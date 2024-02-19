import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

export default function NavbarWrapper({ state, setState, handleClick }) {
  return (
    <div className="flex justify-end items-center ">
      <NavbarLeft state={state} setState={setState} handleClick={handleClick} />
      <NavbarRight state={state} handleClick={handleClick} />
    </div>
  );
}
