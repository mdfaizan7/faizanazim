"use client";

import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/AboutMe";
import SocialLinks from "@/components/SocialLinks";
import Experience from "@/components/Experience";
import Writings from "@/components/Writings";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Sidebar />
          <SocialLinks />
        </header>

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutMe />
          <Experience />
          <Writings />
        </main>
      </div>
    </div>
  );
}
