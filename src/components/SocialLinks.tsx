"use client";

import React from "react";
import * as Icons from "@/components/common/Icons";
import Link from "next/link";

const SOCIAL_LINK_DATA = [
  {
    name: "Github",
    link: "https://github.com/mdfaizan7",
    icon: Icons.GithubIcon
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mdfaizan7/",
    icon: Icons.LinkedInIcon
  },
  {
    name: "X",
    link: "https://x.com/md_faizan7",
    icon: Icons.XIcon
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/md.faizanazim/",
    icon: Icons.InstagramIcon
  },
  {
    name: "Dev.to",
    link: "https://dev.to/mdfaizan7",
    icon: Icons.DevIcon
  },
  {
    name: "G-Mail",
    link: "mailto:faizaanazim@gmail.com",
    icon: Icons.GmailIcon
  }
];

const SocialLinks = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center">
      {SOCIAL_LINK_DATA.map((it) => (
        <li className="mr-5" key={it.link}>
          <Link
            className="block non-hoverable hover:text-slate-200 transition-all hover:scale-[115%]"
            href={it.link}
            target="_blank"
            rel="noreferrer noopener"
            title={it.name}
          >
            <span className="sr-only">{it.name}</span>
            <it.icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
