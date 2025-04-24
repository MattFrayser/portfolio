"use client";

import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
      {/* Text Content - appears second on mobile, first on desktop */}
      <div className="order-2 lg:order-1 w-full lg:w-1/2">
        <motion.div
          className="text-3xl sm:text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Hello!
        </motion.div>

        <div className="flex flex-wrap items-baseline my-2">
          <motion.div
            className="text-5xl sm:text-6xl md:text-7xl pr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            I'm
          </motion.div>
          <div className="relative">
            <motion.div
              className="bg-blue-200 absolute bottom-3 h-4 md:h-5 w-full opacity-50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              Matt Frayser
            </motion.h1>
          </div>
        </div>

        <motion.div
          className="text-blue-300 text-3xl sm:text-4xl md:text-5xl my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
        >
          <Typewriter
            words={["Software Engineer"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={7000}
          />
        </motion.div>

        <div className="flex gap-6 my-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={34} className="hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={34} className="hover:text-gray-400 transition-colors" />
          </a>
        </div>

        <motion.p
          className="text-md py-4 font-bold md:text-xl max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
         As a kid, I would take any electronic device apart to see how it worked. That curiosity for how things work has transformed into delivering software solutions from the ground up, focusing on scalability. 
         Today, I’m a Computer Science graduate from Virginia Commonwealth University with a passion for turning complex ideas into functional systems. I thrive on building solutions that are as robust as they are user-centric.


        </motion.p>
      </div>

      {/* Image - appears first on mobile, second on desktop */}
      <motion.div
        className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <Image
            src="/profile2.png"
            alt="Matt Frayser"
            fill
            className="rounded-full border-4 border-gray-900 object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}