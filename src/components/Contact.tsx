"use client";
import React from "react";
import SectionHeading from "@/components/Section-heading";
import { useInViewCustom } from "@/hook/useInViewCustom";
import { motion } from "framer-motion";
import MailForm from "@/components/EmailForm";

const Contact = () => {
  const ref = useInViewCustom("Contact", 0.8);

  return (
    <motion.section
      ref={ref}
      id={"contact"}
      className={"scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)]"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className={"text-gray-700 dark:text-white/80"}>
        Please contact me directly at{" "}
        <a className={"underline"} href={"mailto:dilshoddev98@gmail.com"}>
          dilshoddev98@gmail.com
        </a>{" "}
        or through this form
      </p>
      <MailForm />
    </motion.section>
  );
};

export default Contact;
