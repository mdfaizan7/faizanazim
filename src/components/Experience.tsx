"use client";

import React from "react";
import type { ExperienceCardProps } from "./ExperienceCard";
import ExperienceCard from "./ExperienceCard";

const EXPERIENCE_DATA_LIST: ExperienceCardProps[] = [
  {
    companyHomePage: "https://developers.google.com/",
    companyName: "Google",
    description: `We build the infrastructure that runs all of Google's digital developer offerings, including smart documentation, developer profiles, codelabs, sample code, client libraries, and data pipelines.`,
    duration: "Jun 2020 - Present",
    position: "Software Engineer III"
  },
  {
    companyHomePage: "https://www.getpowerplay.in/",
    companyName: "Powerplay",
    description: `Introduced TypeScript to Powerplay WebApp for enhanced productivity. Implemented dynamic backend-driven views and paginated tabular rendering with inline editing. Optimized Task Grid for faster performance and keyboard interactions. Improved search functionality and critical backend API performance. Led code quality discussions and enforced guidelines. Developed Kafka-based data streaming system. Created admin dashboard for faster ticket resolution. Assumed on-call duties and mentored junior team members.`,
    duration: "Nov 2020 - Jun 2024",
    position: "Senior Software Engineer"
  },
  {
    companyHomePage: "https://www.linkedin.com/company/spation/about/",
    companyName: "Spation",
    description: `Led the creation of their MVP. Created a product for alpha testing under 2 weeks. Developed an open-source donation platform for Italian restaurants.  Optimized performance by over 50% using webpack.`,
    duration: "May 2020 - Dec 2020",
    position: "Full Stack Intern"
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div>
        <ol className="group/list">
          {EXPERIENCE_DATA_LIST.map((it) => (
            <li className="mb-12" key={it.companyName}>
              <ExperienceCard {...it} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
