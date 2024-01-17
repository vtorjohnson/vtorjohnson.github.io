"use client";
import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { stagger, animate } from "framer-motion";
import { useGlobalContext } from "@/hooks/ThemeProvider";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { mode, toggle } = useGlobalContext();
  // const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = () => {
    toggle();
  };

  return (
    <button
      className={`w-fit right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={onClick}
    >
      {mode === "light" ? "Dark" : "Light"}
    </button>
  );
};
