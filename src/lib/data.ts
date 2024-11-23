import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rtmdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Internship",
        location: "Tashkent, Uzb",
        description:
            "I was an internship at 'Proconnect digital agency' for 3 months. I participated in the developing of the UI part of 2 e-commerce websites",
        icon: React.createElement(LuGraduationCap),
        date: "01.10.2022-01.01.2023",
    },
    {
        title: "Front-End Developer",
        location: "Tashkent, Uzb",
        description:
            "I worked as a front-end developer for 1.5 year. I developed several websites using React and Next.js",
        icon: React.createElement(CgWorkAlt),
        date: "01.02.2023 - 01.08.2024",
    },
    {
        title: "Freelancer",
        location: "Tashkent, Uzb",
        description:
            "During this period, I did projects such as websites and chrome extensions based on orders",
        icon: React.createElement(FaReact),
        date: "01.08.2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "cat-science",
        description:
            "I worked as a fronted developer on this project for 1 years. This website is an official website of a government organization.",
        tags: ["React", "Ant design", "Styled components"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "I worked in this project as a frontend developer and this project is a crm project.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Landing website and ecommerce website",
        description:
            "I made several landing websites and chrome extensions and participated in several ecommerce projects.",
        tags: ["React", "Next.js", "Redux", "Styled components", "Tailwind", "Ant design", "Framer motion", "MUI", "Chrome extension"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "React Query",
    "Ant Design",
    "Framer Motion",
    "MUI",
    "Tailwind",
    "Sass",
    "Styled Components",
    "Git",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Sequelize",
] as const;