"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Lato as Font } from "next/font/google";

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
  const ref = useRef<HTMLBodyElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    ref.current.style.setProperty(
      "background",
      `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, ${variables.gradiantcolor}, transparent 75%)`
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
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

      <body ref={ref} className={font.className}>
        {children}
      </body>
    </html>
  );
}
