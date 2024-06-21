"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/AboutMe";
import SocialLinks from "@/components/SocialLinks";
import useElementOnScreen from "@/hooks/UseElementOnScreen";
import useDebounce from "@/hooks/useDebounce";
import CustomList from "@/components/common/CustomList";
import ExperienceCard from "@/components/ExperienceCard";
import WritingCard from "@/components/WritingCard";
import ProjectCard from "@/components/ProjectCard";
import { EXPERIENCE_DATA_LIST } from "@/components/data/experience_data";
import { WRITING_DATA_LIST } from "@/components/data/writings_data";
import { PROJECT_DATA_LIST } from "@/components/data/projects_data";

export default function Home() {
  const [section, setSection] = useState("");

  const [aboutRef, aboutVisibility] = useElementOnScreen({ threshold: [0.4] });
  const [expRef, expVisibility] = useElementOnScreen({ threshold: [0.8] });
  const [projRef, projVisibility] = useElementOnScreen({ threshold: [1] });
  const [writRef, writVisibility] = useElementOnScreen({ threshold: [0] });

  useEffect(() => {
    if (aboutVisibility) {
      setSection("about");
    } else if (expVisibility) {
      setSection("experience");
    } else if (projVisibility) {
      setSection("projects");
    } else if (writVisibility) {
      setSection("writings");
    }
  }, [expVisibility, aboutVisibility, projVisibility, writVisibility]);

  const debouncedSection = useDebounce(section, 300);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Sidebar section={debouncedSection} setSection={setSection} />
          <SocialLinks />
        </header>

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <div ref={aboutRef}>
            <AboutMe />
          </div>
          <div ref={expRef}>
            <CustomList
              CardComponent={ExperienceCard}
              data={EXPERIENCE_DATA_LIST}
              dataKey="companyName"
              sectionId="experience"
              sectionName="Experience"
            />
          </div>
          <div ref={projRef}>
            <CustomList
              CardComponent={ProjectCard}
              data={PROJECT_DATA_LIST}
              dataKey="name"
              sectionId="projects"
              sectionName="Projects"
            />
          </div>
          <div ref={writRef}>
            <CustomList
              CardComponent={WritingCard}
              data={WRITING_DATA_LIST}
              dataKey="name"
              sectionId="writings"
              sectionName="Writings"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
