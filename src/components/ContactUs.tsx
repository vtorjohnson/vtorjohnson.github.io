"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export const ContactUs = () => {
  // let mouseX = useMotionValue(0);
  // let mouseY = useMotionValue(0);

  // function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
  //   let { left, top } = currentTarget.getBoundingClientRect();

  //   mouseX.set(clientX - left);
  //   mouseY.set(clientY - top);
  // }

  return (
    <div id="contactUs">
      {/* <div
        onMouseMove={handleMouseMove}
        className="relative max-w-lg overflow-hidden rounded-3xl border border-gray-700 bg-gray-900 p-8"
      >
        
      </div>
      <div className="invisible"></div> */}
    </div>
  );
};
