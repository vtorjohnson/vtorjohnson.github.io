"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { stagger, animate } from "framer-motion";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = () => {
    animate([
      [".page-wipe", { opacity: 1 }, { duration: 0.05 }],
      [
        ".page-wipe",
        { x: [0, 1250], y: [0, -1400] },
        { ease: [0.08, 0.65, 0.53, 0.96], duration: 1, delay: stagger(0.5) },
      ],
      [".page-wipe", { opacity: 0 }, { duration: 0.3, delay: stagger(1) }],
    ]);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className={`w-fit right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={onClick}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
