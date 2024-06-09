"use client";

import React, { useEffect, type Dispatch, type SetStateAction } from "react";
import SidebarMenu from "./SidebarMenu";
import Link from "next/link";

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

interface Props {
  section?: string;
  setSection: Dispatch<SetStateAction<string>>;
}

const Sidebar = (props: Props) => {
  useEffect(() => {
    const updateHash = (str: string) => {
      if (!str) return;
      const hash = str.split("#")[1];
      props.setSection(hash);
    };

    const onWindowHashChange = () => updateHash(window.location.hash);

    window.addEventListener("hashchange", onWindowHashChange);
    window.addEventListener("load", onWindowHashChange);

    return () => {
      window.removeEventListener("load", onWindowHashChange);
      window.removeEventListener("hashchange", onWindowHashChange);
    };
  }, [props]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-200 tracking-tight sm:text-5xl">
        <Link href="https://faizanazim.com">{"Mohammad Faizan Azim"}</Link>
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
            <li key={item.hash}>
              <SidebarMenu
                label={item.label}
                selected={props.section === item.hash}
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
