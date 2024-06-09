import Link from "next/link";
import { ArrowLinkIcon } from "./Icons";

interface Props {
  text: string;
  href: string;
  suppressIcon?: boolean;
}

const CustomLink = (props: Props) => {
  return (
    <Link
      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
      target="_blank"
      rel="noreferrer noopener"
      href={props.href}
    >
      {!props.suppressIcon ? (
        <span className="absolute -inset-x-10 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      ) : null}
      <span>
        {props.text}
        {!props.suppressIcon ? (
          <span className="inline-block">
            <ArrowLinkIcon />
          </span>
        ) : null}
      </span>
    </Link>
  );
};

export default CustomLink;
