import React from "react";
import { StaticImageData } from "next/image";

export type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData | string;
};

export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type Theme = "dark" | "light";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ContactFormData = {
  email: string;
  message: string;
};