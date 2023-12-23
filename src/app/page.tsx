"use client";
import { Hero } from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
      <motion.div
        className="bg-slate-200 dark:bg-[#212933]"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        initial="hidden"
      />
    </main>
  );
}
