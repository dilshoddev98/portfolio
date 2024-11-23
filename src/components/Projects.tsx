"use client";
import React from "react";
import SectionHeading from "@/components/Section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import { useInViewCustom } from "@/hook/useInViewCustom";

const Projects = () => {
  const ref = useInViewCustom("Projects", 0.4);

  return (
    <section
      ref={ref}
      id={"projects"}
      className={"scroll-mt-28 mb-28 sm:mb-40"}
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData?.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
