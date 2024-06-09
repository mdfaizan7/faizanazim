"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/AboutMe";
import SocialLinks from "@/components/SocialLinks";
import Experience from "@/components/Experience";
import Writings from "@/components/Writings";
import useElementOnScreen from "@/hooks/UseElementOnScreen";
import useDebounce from "@/hooks/useDebounce";

export default function Home() {
  const [section, setSection] = useState("");

  const [aboutRef, aboutVisibility] = useElementOnScreen({ threshold: [0.4] });
  const [expRef, expVisibility] = useElementOnScreen({ threshold: [0.8] });
  const [writRef, writVisibility] = useElementOnScreen({
    threshold: [0.5]
  });

  useEffect(() => {
    if (aboutVisibility) {
      setSection("about");
    } else if (expVisibility) {
      setSection("experience");
    } else if (writVisibility) {
      setSection("writings");
    }
  }, [expVisibility, aboutVisibility]);

  const debouncedSection = useDebounce(section, 200);

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
            <Experience />
          </div>
          <div ref={writRef}>
            <Writings />
          </div>
        </main>
      </div>
    </div>
  );
}
