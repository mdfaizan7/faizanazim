"use client";

import WritingCard, { type WritingCardProps } from "./WritingCard";

const WRITING_DATA_LIST: WritingCardProps[] = [
  {
    date: "2020",
    imgLink: "/go_server.avif",
    link: "https://dev.to/mdfaizan7/create-a-server-with-postgresql-in-go-part-1-3-of-go-authentication-series-3127",
    name: "Create a server with PostgreSQL in Go"
  },
  {
    date: "2021",
    imgLink: "/cdc_db_replication.avif",
    link: "https://dev.to/mdfaizan7/database-replication-using-cdc-48l8",
    name: "Database Replication using CDC"
  }
];

const index = () => {
  return (
    <section
      id="writings"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-[#051821]/75 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Writings
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {WRITING_DATA_LIST.map((it) => (
            <li className="mb-12" key={it.link}>
              <WritingCard {...it} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default index;
