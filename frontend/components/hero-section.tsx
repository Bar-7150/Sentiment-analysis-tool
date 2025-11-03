"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useInView } from "framer-motion";
import { motion } from "motion/react";
import {
  SiChartdotjs,
  SiFastapi,
  SiHuggingface,
  SiOnnx,
  SiPytorch,
  SiShadcnui,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { LampContainer } from "./ui/lamp";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

export default function HeroSection() {
  const techStack = [
    { icon: <RiNextjsFill className="h-8 w-8" />, name: "Next.js" },
    { icon: <SiShadcnui className="h-8 w-8" />, name: "shadcn/ui" },
    { icon: <RiTailwindCssFill className="h-8 w-8" />, name: "TailwindCss" },
    { icon: <SiChartdotjs className="h-8 w-8" />, name: "Chart.js" },
    { icon: <SiFastapi className="h-8 w-8" />, name: "FastAPI" },
    { icon: <SiPytorch className="h-8 w-8" />, name: "Pytorch" },
    { icon: <SiHuggingface className="h-8 w-8" />, name: "Hugging Face" },
    { icon: <SiOnnx className="h-8 w-8" />, name: "Onnx" },
  ];

  const featuresRef = React.createRef<HTMLDivElement>();
  const isVisible = useInView(featuresRef, { once: true, margin: "-100px" });
  return (
    <main className="overflow-hidden pt-20 bg-background">
      <section className="relative pt-24 md:pt-36 text-center px-6 max-w-7xl mx-auto">
        <div className="relative mx-auto flex flex-col w-full items-center justify-center">
          <BackgroundLines className="bg-background flex flex-col items-center justify-center w-full px-4 pointer-events-none">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-bold md:text-7xl lg:mt-16 xl:text-[5.25rem] text-foreground"
            >
              FaceFeel
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="h2"
              className="mx-auto mt-7 max-w-2xl text-balance text-2xl font-bold text-muted-foreground"
            >
              Federated Emotion Analysis and Learning Platform
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-2 max-w-2xl text-balance text-lg text-muted-foreground"
            >
              A privacy-conscious, web-based AI system for real-time facial
              emotion detection and continual model improvement through
              user-contributed data
            </TextEffect>
          </BackgroundLines>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.75 },
                },
              },
              ...transitionVariants,
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl px-6 py-5 text-base font-mono bg-emerald-500 text-black hover:bg-emerald-400 transition-all"
            >
              <Link href="/">Get Started</Link>
            </Button>
          </AnimatedGroup>
        </div>

        <div
          ref={featuresRef}
          id="features"
          className="mt-60 max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight relative inline-block">
            Features & Objectives
            <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full" />
          </h2>

          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Emotion recognition systems often rely on static datasets (e.g.,
              FER2013, AffectNet), which limits generalization to real-world
              faces, lighting, and angles. This project aims to:
            </p>

            <ul className="space-y-8 text-left max-w-3xl mx-auto">
              <li className="group relative flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-emerald-500/90 group-hover:scale-125 group-hover:bg-emerald-400 transition-transform duration-300"></span>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                  Enhance real-world performance via user-contributed, opt-in
                  data.
                </p>
              </li>

              <li className="group relative flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-emerald-500/90 group-hover:scale-125 group-hover:bg-emerald-400 transition-transform duration-300"></span>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                  Demonstrate privacy-preserving learning and efficient model
                  deployment for emotion analysis.
                </p>
              </li>

              <li className="group relative flex items-start gap-4">
                <span className="mt-2 h-3 w-3 rounded-full bg-emerald-500/90 group-hover:scale-125 group-hover:bg-emerald-400 transition-transform duration-300"></span>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                  Serve as an educational and research project bridging AI
                  ethics, frontend engineering, and ML ops.
                </p>
              </li>
            </ul>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent mt-12"></div>
          </div>
        </div>
        <div className="mt-54 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight relative inline-block">
            Built with Cutting-Edge Tech
            <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full" />
          </h2>

          <div className="flex flex-wrap justify-center gap-7 md:gap-10 lg:gap-20 items-center opacity-90">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center space-y-2 hover:scale-110 transition"
              >
                {tech.icon}
                <p className="text-sm font-medium text-muted-foreground">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-54 text-center relative">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight relative inline-block lg:mb-5">
                Try FaceFeel Live Demo
              </h2>
            <LampContainer className="scale-90 "> 
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-10">
                Experience real-time emotion detection directly in your browser.
                Upload an image, enable your webcam, and see how our AI model
                interprets facial expressions with privacy-preserving
                intelligence.
              </p>
              
            <Button
              asChild
              size="lg"
              className="rounded-xl px-6 py-5 text-base font-mono bg-emerald-500 text-black hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              <Link href="/demo">Launch Demo</Link>
            </Button>
          </LampContainer>
        </div>
      </section>

      <section className="bg-muted/50 py-8 border-t border-border mt-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              About FaceFeel
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              FaceFeel is a privacy-conscious, web-based AI system for real-time
              facial emotion detection and continual model improvement through
              user-contributed data. It is powered by cutting-edge technologies
              like Next.js, FastAPI, PyTorch and more, ensuring a seamless and
              secure user experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GDGoC-KGEC/Sentiment-analysis-tool"
                  target="_blank"
                  className="hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
