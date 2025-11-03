"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[455px] sm:min-h-[420px] flex-col items-center justify-center overflow-hidden bg-background w-full rounded-md z-0",
        "[@media(min-width:420px)_and_(max-width:502px)]:min-h-[490px]",
        "[@media(min-width:369px)_and_(max-width:419px)]:min-h-[510px]",
        "[@media(max-width:368px)]:min-h-[540px]",
        "[@media(min-width:290px)_and_(max-width:332px)]:min-h-[590px]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-110 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-48 w-[30rem] overflow-visible w-[30rem] bg-gradient-conic from-emerald-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, width: "1rem" }}
          whileInView={{ opacity: 0.8, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-48 w-[30rem] bg-gradient-conic from-transparent via-transparent to-emerald-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-36 md:h-48 w-full translate-y-6 md:translate-y-12 scale-x-150 bg-background blur-2xl"></div>
        <div className="absolute inset-auto z-50 h-28 md:h-36 w-[18rem] md:w-[25rem] -translate-y-1/2 rounded-full bg-emerald-500 opacity-50 blur-3xl"></div>
        <div className="absolute inset-auto z-50 h-36 w-[25rem] -translate-y-1/2 rounded-full bg-emerald-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-emerald-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-emerald-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background "></div>
      </div>
      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
