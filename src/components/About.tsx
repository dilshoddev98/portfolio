"use client";
import React from "react";
import SectionHeading from "@/components/Section-heading";
import { motion } from "framer-motion";
import { useInViewCustom } from "@/hook/useInViewCustom";

const About = () => {
  const ref = useInViewCustom("About", 0.8);

  return (
    <motion.section
      className={"mb-28 max-w-3xl text-center leading-8 scroll-mt-28"}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id={"about"}
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I studied <span className={"font-medium"}>software engineering </span>
        at Tashkent University of Information Technologies. In addition, I
        completed the
        <span className={"font-medium"}> frontend bootcamp</span> course at
        Webbrain Academy. My favourite part of programming is the
        problem-solving aspect. I love feeling of finally figuring out a
        solution to a problem. My core stack is
        <span className={"font-medium"}> React, Next.js</span>, I am also
        familiar with <span className={"font-medium"}>backend development</span>
        (Node.js, Postgresql). I am always looking to learn new technologies. I
        am currently looking for a
        <span className={"font-medium"}> full-time position</span> as a
        <span className={"font-medium"}> frontend developer.</span>
      </p>
    </motion.section>
  );
};

export default About;
