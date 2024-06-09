"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLinkIcon } from "@/components/common/Icons";

export interface WritingCardProps {
  name: string;
  date: string;
  link: string;
  imgLink: string;
}

const WritingCard = (props: WritingCardProps) => {
  const { name, date, link, imgLink } = props;

  return (
    <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <Image
        width={200}
        height={48}
        className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:h-16"
        alt={name}
        src={imgLink}
      />
      <div className="z-10 col-span-6">
        <p className="-mt-1 text-sm font-semibold leading-6">{date}</p>
        <h3 className="-mt-1">
          <Link
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
          >
            <span className="absolute -inset-x-10 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            <span>
              {name}
              <span className="inline-block">
                <ArrowLinkIcon />
              </span>
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default WritingCard;
