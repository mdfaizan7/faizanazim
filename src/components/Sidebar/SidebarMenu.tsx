"use client";

import Link from "next/link";

interface Props {
  selected: boolean;
  label: string;
  hash: string;
}

const SidebarMenu = (props: Props) => {
  const hoverClass = !props.selected ? "group-hover:" : "";

  return (
    <Link className={"group flex items-center py-3"} href={`#${props.hash}`}>
      <span
        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${hoverClass}w-16 ${hoverClass}bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
      />
      <span
        className={`nav-text text-xs ${hoverClass ? "" : "font-bold"} uppercase tracking-widest ${hoverClass ? "text-slate-500" : ""} ${hoverClass}text-slate-200 group-focus-visible:text-slate-200`}
      >
        {props.label}
      </span>
    </Link>
  );
};

export default SidebarMenu;
