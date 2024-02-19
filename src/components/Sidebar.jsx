import React from "react";
import SidebarComponent from "./SidebarComponent";
import { DATA } from "../constant.jsx";
import { Outlet } from "react-router-dom";

export default function Sidebar({ state, handleClick }) {
  return (
    <div className=" flex items-start ">
      <div className=" h-screen border border-slate-200 shadow-sm">
        {DATA.map((item) => {
          return (
            <SidebarComponent
              data={item}
              state={state}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div className=" h-screen  "></div>
      <Outlet />
    </div>
  );
}
