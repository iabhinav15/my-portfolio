"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import anime from "../../../public/Anime7.json";
import connectU from "../../../public/project-1.png";
import portfolio from "../../../public/portfolio.jpg";
import blogapp from "../../../public/blogapp.jpg";
import contactkeeper from "../../../public/contact-keeper.png";


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React.js Connect-U",
    desc: "ConnectU is a social media web application built for connecting diverse users and enabling online interactions. It allow users interaction, posting text, images, or multimedia content. The application is built using the ReactJS for frontend, and NodeJS and ExpressJS for backend and uses mongoDB as database.",
    img: connectU,
    link: "https://uconnect.netlify.app/login",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Portfolio Website",
    desc: "A digital showcase of skills, projects, and achievements. From elegant design to seamless functionality, each element of the portfolio website reflects the developer's commitment to excellence and innovation.",
    img: portfolio,
    link: "/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Blog App",
    desc: "Designed a blog app with set of features, encompassing blog reading, writing, seamless updating and deletion, and engaging user comments functionality along with login and sign up feature.",
    img: blogapp,
    link: "https://github.com/iabhinav15/BlogApp",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Contact Keeper App",
    desc: "Crafted a robust web app for efficient contact management, catering the needs of users, utilizing ReactJS, NodeJS, ExpressJS and MongoDB, which empowers the users with the capability to save and organize contacts’ details, including names, phone numbers, email.",
    img: contactkeeper,
    link: "https://github.com/iabhinav15/ContactSync",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  return (
    <>
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          <Lottie animationData={anime} className="absolute -z-10 w-[60%]"  />
          <p>My Works</p>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" ></div>
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-[60%] h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] ">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default PortfolioPage;
