"use client";
import React, { useMemo } from "react";
import { motion, useMotionTemplate } from "framer-motion";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { useGlobalContext } from "@/hooks/ThemeProvider";

export const DarkLightBackground = () => {
  const { width, height } = useWindowDimensions();
  const { mode } = useGlobalContext();

  const xPoint = useMemo(() => {
    if (!width) return 100;
    return mode == "dark" ? width : 100;
  }, [mode, width]);

  const yPoint = useMemo(() => {
    if (!height) return 100;
    return height / 2;
  }, [height]);

  return (
    <div>
      <motion.div
        className="absolute inset-0"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${xPoint}px ${yPoint}px, rgb(14 165 233), transparent`,
        }}
      />
    </div>
  );
};
