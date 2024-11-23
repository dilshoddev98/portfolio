import React from "react";
import { type SectionHeadingProps } from "@/lib/types";

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className={"text-3xl font-medium capitalize mb-4 text-center"}>
      {children}
    </h2>
  );
};

export default SectionHeading;
