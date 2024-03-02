"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import anime from "../../public/Anime3.json";

const Homepage = () => {
  return (
  <>
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Lottie animationData={anime}  />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold ">
            <p>Crafting Digital Experiences, </p> 
            <p>that Inspire </p>
            <p>& Delight.</p>
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hello World!, Welcome to my digital canvas, where innovation and creativity converge.
            With a keen eye for aesthetics and mastery of code, 
            my
            portfolio showcases my expertise in software development through a collection of projects that reflect my dedication to excellence and innovation.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/project">
              <button className="py-4 px-5 rounded-lg ring-1 ring-black bg-black text-white font-medium hover:bg-[#3e3c3c] ">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="py-4 px-5 rounded-lg ring-1 ring-black font-medium hover:">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </>  
  );
};

export default Homepage;
