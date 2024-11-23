"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/hook/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={
        "fixed bottom-5 right-5 w-12 h-12 bg-white flex justify-center items-center rounded-full bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl transition-all hover:scale-110  active:scale-105"
      }
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitcher;
