"use client";
import React, { createContext, useContext, useState } from "react";
import { type ActiveSectionContextType } from "@/lib/types";

export const ActiveSectionContext = createContext<null | ActiveSectionContextType>(null);

const ActiveSectionContextProvider = ({children}: {children: React.ReactNode}) => {
  const [activeSection, setActiveSection] = useState("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};

export default ActiveSectionContextProvider;
