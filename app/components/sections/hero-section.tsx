"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypeWriterAnimation from "../animations/typewriter";

export default function HeroSection() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
         <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl">
          Welcome to <TypeWriterAnimation />
        </h1>
        
        <p className="mt-6 text-lg text-black sm:text-xl">
          We build innovative solutions that transform businesses and create exceptional digital experiences.
        </p>
        
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-8 py-3 text-center font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-primary px-8 py-3 text-center font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
