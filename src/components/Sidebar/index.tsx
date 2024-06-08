"use client";

import React, { useEffect, useState } from "react";
import SidebarMenu from "./SidebarMenu";

const MENU_ITEMS = [
  {
    label: "About",
    hash: "about"
  },
  {
    label: "Experience",
    hash: "experience"
  },
  {
    label: "Writings",
    hash: "writings"
  }
];

const Sidebar = () => {
  const [hash, setHash] = useState(MENU_ITEMS[0].hash);

  const updateHash = (str: string) => {
    if (!str) return;
    setHash(str.split("#")[1]);
  };

  useEffect(() => {
    const onWindowHashChange = () => updateHash(window.location.hash);

    window.addEventListener("hashchange", onWindowHashChange);
    window.addEventListener("load", onWindowHashChange);

    return () => {
      window.removeEventListener("load", onWindowHashChange);
      window.removeEventListener("hashchange", onWindowHashChange);
    };
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-200 tracking-tight sm:text-5xl">
        <a href="https://faizanazim.com">{"Mohammad Faizan Azim"}</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium text-slate-200 tracking-tight sm:text-xl">
        {"Full Stack Engineer"}
      </h2>

      <p className="mt-4 leading-normal">
        I make and break stuff. <br /> But not always in that order.
      </p>

      <nav className="nav hidden lg:block">
        <ul className="mt-16 w-max">
          {MENU_ITEMS.map((item) => (
            <li key={item.hash} className={hash === item.hash ? "active" : ""}>
              <SidebarMenu
                label={item.label}
                selected={hash === item.hash}
                hash={item.hash}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
