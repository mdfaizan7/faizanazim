"use client";

import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="pb-82 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <p className="mb-4">
        Somewhere around 2020, I jumped into coding, and it's been quite the
        journey. From{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
          href="https://www.getpowerplay.in/"
          target="__blank"
          rel="noreferrer noopener"
        >
          startups
        </a>{" "}
        to a{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
          href="https://about.google/"
          target="__blank"
          rel="noreferrer noopener"
        >
          major corporation
        </a>
        , I've been exploring different tech worlds and loving every bit of it.
      </p>

      <p className="mb-4">
        Currently, I'm working at{" "}
        <a
          className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
          href="https://developers.google.com/"
          target="__blank"
          rel="noreferrer noopener"
        >
          Google
        </a>
        , dedicated to streamlining the developer experience. We're
        brainstorming exciting projects aimed at helping developers not only
        succeed but also enjoy the process!
      </p>

      <p className="mb-4">
        When I'm not coding, you'll find me hitting the gym, diving into
        fanfictions, or gaming on both Xbox and PS5 (couldn't choose just one!).
        Also, I'm just a total cat person 🐱.
      </p>
    </section>
  );
};

export default AboutMe;
