"use client";
import React from "react";
import Image from "next/image";
import img from "../../public/dilshod.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useInViewCustom} from "@/hook/useInViewCustom";
import {useActiveSectionContext} from "@/hook/useActiveSection";

const Intro = () => {
    const ref = useInViewCustom("Home", 0.8);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className={"mb-28 max-w-3xl text-center sm:mb-0 scroll-mt-[100rem]"}
            id={"home"}
        >
            {/*content image*/}
            <div className={"flex justify-center items-center"}>
                <div className={"relative"}>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "tween", duration: 0.3}}
                    >
                        <Image
                            src={img}
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            alt={"Dilshodbek portrait"}
                            className={
                                "h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl"
                            }
                        />
                    </motion.div>
                    <motion.span
                        className={"text-4xl absolute bottom-0 right-0 "}
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 123,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            {/*content text*/}
            <motion.h1
                className={"font-medium mb-10 mt-4 px-4 text-2xl sm:text-4xl"}
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
            >
                Hello, I am<span className={"font-bold"}> Dilshodbek.</span>I am a{" "}
                <span className={"font-bold"}>Frontend developer </span>
                with <span className={"font-bold"}>1.5 years</span> of experience and
                also know Backend skills. My focus is React(Next.js).
            </motion.h1>

            {/*contact*/}
            <motion.div
                className={
                    "flex flex-col  sm:flex-row items-center justify-center gap-4 px-2 text-lg font-medium"
                }
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
            >
                <Link
                    href={"#contact"}
                    className={
                        "bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110  hover:bg-gray-950  active:scale-105 transition"
                    }
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me <BsArrowRight className={"opacity-70"}/>
                </Link>

                <a
                    href="/cv.pdf"
                    download={true}
                    className={
                        "bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none hover:scale-110 focus:scale-110 active:scale-105 transition dark:bg-white/10"
                    }
                >
                    Download CV <HiDownload/>
                </a>
                <div className={"flex gap-4"}>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className={
                            "bg-white px-7 py-3 text-gray-700 text-2xl flex items-center gap-2 rounded-full border border-black/10 outline-none hover:scale-110 focus:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
                        }
                    >
                        <BsLinkedin/>
                    </a>

                    <a
                        href="https://github.com"
                        target="_blank"
                        className={
                            "bg-white px-7 py-3 text-gray-700 text-2xl flex items-center gap-2 rounded-full border border-black/10 outline-none hover:scale-110 focus:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
                        }
                    >
                        <FaGithubSquare/>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Intro;
