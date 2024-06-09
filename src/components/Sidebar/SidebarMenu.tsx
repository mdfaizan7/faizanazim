"use client";

import Link from "next/link";

interface Props {
  selected: boolean;
  label: string;
  hash: string;
}

const SidebarMenu = (props: Props) => {
  const { selected } = props;

  return (
    <Link
      className="group flex items-center py-3 active"
      href={`#${props.hash}`}
    >
      <span
        className={`nav-indicator mr-4 h-px ${selected ? "w-16" : "w-8"} ${selected ? "bg-slate-200" : "bg-slate-600"} transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
      />
      <span
        className={`nav-text text-xs ${selected ? "font-bold" : ""} uppercase tracking-widest text-slate-${selected ? "200" : "500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}
      >
        {props.label}
      </span>
    </Link>
  );
};

export default SidebarMenu;
