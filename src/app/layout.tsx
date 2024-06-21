"use client";

import { useEffect, type ReactNode } from "react";
import { Lato as Font } from "next/font/google";
import gsap from "gsap";

import "@/styles/globals.css";
import "@/styles/styles.scss";
import variables from "@/styles/variables.module.scss";

const font = Font({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const updateMousePosition = (e: MouseEvent) => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");

    gsap.to($bigBall, {
      x: e.x - 15,
      y: e.y - 15,
      duration: 0.5,
      transitionTimingFunction: "ease-in-out"
    });
    gsap.to($smallBall, {
      x: e.x - 5,
      y: e.y - 5,
      duration: 0
    });
    gsap.to(document.body, {
      background: `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, ${variables.gradiantcolor}, transparent 75%)`,
      duration: 0
    });
  };

  const onMouseHover = () => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");

    gsap.to($bigBall, {
      scale: 2,
      duration: 0.3,
      top: 20,
      left: 20
    });

    gsap.to($smallBall, {
      scale: 0,
      duration: 0.3
    });
  };

  const onMouseHoverOut = () => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");

    gsap.to($bigBall, {
      scale: 1,
      duration: 0.3,
      top: 0,
      left: 0
    });

    gsap.to($smallBall, {
      scale: 1,
      duration: 0.3
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    const $hoverables = document.querySelectorAll(".hoverable");

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover);
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].removeEventListener("mouseenter", onMouseHover);
        $hoverables[i].removeEventListener("mouseleave", onMouseHoverOut);
      }
    };
  }, []);

  return (
    <html lang="en">
      <title>{"Faizan"}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <body className={font.className}>
        <div className="cursor">
          <div className="cursor__ball cursor__ball--big">
            <svg height="30" width="30">
              <circle cx="15" cy="15" r="12" strokeWidth="0" />
            </svg>
          </div>

          <div className="cursor__ball cursor__ball--small">
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="4" strokeWidth="0" />
            </svg>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
