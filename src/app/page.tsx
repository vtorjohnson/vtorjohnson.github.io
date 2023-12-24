"use client";
import { Hero } from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="h-full w-full relative">
      <div className="flex flex-col h-[850px] gap-20 z-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
      <motion.div className="page-wipe w-screen h-screen z-0 fixed top-0 bottom-0 dark:bg-slate-100 bg-gray-800 opacity-0"></motion.div>
    </main>
  );
}
