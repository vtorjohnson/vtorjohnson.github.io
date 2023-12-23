"use client";

import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import { SparkleButton } from "@/components/SparkleButton";

export const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-black dark:text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Hi, my name is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Victoria E.{" "}
              </span>
              Johnson
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </motion.p>
          <SparkleButton />
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="relative w-40 h-40">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-100 to-yellow-400 rounded-full blur opacity-75"></div>
            <div
              className="relative w-40 h-40 rounded-full  
                inline-flex items-center justify-center  
                bg-white"
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
