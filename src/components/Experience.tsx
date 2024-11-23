"use client";
import React from "react";
import SectionHeading from "@/components/Section-heading";
import { useInViewCustom } from "@/hook/useInViewCustom";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/hook/useTheme";

const Experience = () => {
  const ref = useInViewCustom("Experience", 0.8);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      className={"scroll-mt-28 mb-28 sm:mb-40"}
      id={"experience"}
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255,255,255, 0.2)"}
      >
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid #9ca3af rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className={"font-normal !mt-0"}>{experience.location}</p>
              <p className={"!mt-1 !font-normal"}>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
