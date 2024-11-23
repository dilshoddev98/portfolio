"use client";

import React, { createContext, useEffect } from "react";
import { type Theme, type ThemeContextType } from "@/lib/types";

export const ThemeContext = createContext<null | ThemeContextType>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const themeOfDevice = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const themeInLocalStorage: Theme = localStorage.getItem("theme") as Theme;

      if (themeInLocalStorage) {
        setTheme(themeInLocalStorage);
        if (themeInLocalStorage === "dark") {
          document.documentElement.classList.add("dark");
        }
      } else if (themeOfDevice) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
