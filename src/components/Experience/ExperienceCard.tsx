"use client";

import React from "react";
import { ArrowLinkIcon } from "@/components/common/Icons";
import Link from "next/link";

export interface ExperienceCardProps {
  duration: string;
  companyHomePage: string;
  position: string;
  companyName: string;
  description: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { duration, companyHomePage, position, companyName, description } =
    props;

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-12 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-4">
        {duration}
      </header>
      <div className="z-10 sm:col-span-8">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={companyHomePage}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {position} ·{" "}
                <span className="inline-block">
                  {companyName}
                  <ArrowLinkIcon />
                </span>
              </span>
            </Link>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
