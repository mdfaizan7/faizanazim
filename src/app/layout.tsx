"use client";

import type React from "react";
import { useEffect, useRef } from "react";

import { Inter } from "next/font/google";

import "./globals.css";
import "./styles.scss";
import variables from "./variables.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef<HTMLBodyElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    ref.current.style.setProperty(
      "background",
      `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, ${variables.gradiantcolor}, transparent 75%)`
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <html lang="en">
      <body ref={ref} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
