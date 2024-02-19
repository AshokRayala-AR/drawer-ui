import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarComponent({ data, state, handleClick }) {
  return (
    <NavLink to={data.url}>
      <div className="side-nav-btn flex items-center p-3 hover:bg-gray-200 shadow-md border border-slate-300 transition-transform transform hover:scale-105">
        <div>
          <img className="w-8 h-8 " src={data.image} alt={data.alt} />
        </div>
        <div className={` ${state ? "d-block" : "hidden"} w-48 mr-1`}>
          <h6 className="pl-7">{data.title}</h6>
        </div>
      </div>
    </NavLink>
  );
}
