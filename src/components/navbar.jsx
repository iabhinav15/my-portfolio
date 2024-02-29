"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { IoMdHome } from "react-icons/io";
import { IoPerson, IoDocumentTextSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

const links = [
  { url: "/", title: "Home", icon: <IoMdHome size={22} />},
  { url: "/about", title: "About", icon: <IoPerson size={22} />},
  { url: "/project", title: "Projects", icon: <FaLaptopCode size={22} />},
  { url: "/resume", title: "Resume", icon: <IoDocumentTextSharp size={22} />},
  { url: "/contact", title: "Contact", icon: <MdContactMail size={22} />},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-9 lg:px-20 xl:px-44 text-xl ">
      
      {/* LOGO */}
      <Link href="/">
        <div className="flex justify-start">
          <Image src="/logo.png" alt="" width={24} height={24} />
          <div className="text-lg bg-black rounded-md ml-1 px-1 py-2 font-semibold flex items-center  "
          >
            <span className="text-white px-2">Abhinav</span>
            <span className="rounded bg-white text-black flex items-center justify-center px-2">
              Singh
            </span>
          </div>
        </div>
      </Link>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative pl-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/* LINKS */}
      <div className="hidden md:flex gap-4 items-center ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
