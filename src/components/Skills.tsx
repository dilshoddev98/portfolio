"use client";
import React from "react";
import SectionHeading from "@/components/Section-heading";
import { useInViewCustom } from "@/hook/useInViewCustom";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const ref = useInViewCustom("Skills", 0.8);
  return (
    <div
      ref={ref}
      className={"scroll-mt-28 max-w-3xl text-center mb-28 sm:mb-40"}
      id={"skills"}
    >
      <SectionHeading>Skills</SectionHeading>
      <ul
        className={"flex flex-wrap justify-center gap-2 text-lg text-gray-800"}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className={
              "bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            }
            variants={animationVariants}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            key={index}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
