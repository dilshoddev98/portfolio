"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ProjectProps } from "@/lib/types";

const Project = (props: ProjectProps) => {
  const { title, description, tags, imageUrl } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <section
        className={
          "flex flex-col justify-between gap-4 sm:flex-row bg-gray-100 max-w-[46rem] sm:h-[20rem] border border-black/5 overflow-hidden p-4 mb-4 hover:bg-gray-200 rounded-xl transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        }
      >
        <div className={"h-full"}>
          <h3 className={"text-2xl font-semibold"}>{title}</h3>
          <p
            className={
              "mt-2 mb-2 leading-relaxed text-gray-700 sm:mb-4 dark:text-white/70"
            }
          >
            {description}
          </p>
          <ul className={"flex flex-wrap gap-2"}>
            {tags.map((tag, index) => (
              <li
                className={
                  "bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70"
                }
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={"image of project"}
          className={
            "rounded-md object-cover shadow-xl w-[22rem] hover:scale-105 transition"
          }
        />
      </section>
    </motion.div>
  );
};

export default Project;
