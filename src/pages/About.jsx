import React from "react";
import { CiInstagram, CiSaveDown2 } from "react-icons/ci";
import {
    FaC,
    FaCopy,
    FaCss3,
    FaDatabase,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJs,
    FaNode,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router";

const About = () => {
    return (
        <div className="skill-bar w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 md:px-12 sm:px-9">
            <div className="w-full pt-10 flex justify-center mb-6">
                <h2 className="text-3xl sm:text-5xl border-b border-black dark:border-white px-2 text-green-400 font-bold mb-6">
                    About
                </h2>
            </div>
            <div
                className="relative w-full sm:w-5/6 px-5 py-6
to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-enblack/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
            >
                <h1 className="text-4xl uppercase bold">vicky raj</h1>
                <p className="text-gray-400 mt-4">
                    Web Developer MERN Stack DSA With JAVA & C++
                </p>
                <p className="flex  mt-8">
                    {" "}
                    Hi! I am a fresher web developer who is learning the MERN
                    stack along with Java and C++. I like building simple and
                    responsive web applications and understanding how websites
                    work. I enjoy learning new technologies and improving my
                    coding skills step by step. I try to write clean code and
                    create user-friendly designs. I am excited to start my
                    career as a developer, gain real-world experience, and grow
                    by working on real projects with a good team.
                    <img
                        src="/vicky.png"
                        alt="profile"
                        className="w-[100px] bg-gray-500 h-[100px] relative by-5 rounded-2xl  shadow-xl"
                    />
                </p>

                <div className="grid gap-4 md:grid-cols-2 mt-5">
                    <div className="flex items-center border border-white/15 bg-black/30 rounded-lg p-3 flex-col justify-center h-36">
                        <h3 className="text-2xl font-bold uppercase text-center">
                            Do you want to start a project together?
                        </h3>

                        <button className="mt-4 cursor-pointer flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-white/10 w-fit active:scale-90 transition-all duration-150">
                            <FaCopy />
                            Copy my Email
                        </button>
                    </div>
                    <Link
                        to="/about#resume"
                        className="flex items-center border border-white/15 bg-black/30 rounded-lg p-3 flex-col justify-center md:row-span-2"
                    >
                        <p className="uppercase text-shadow-lg  sm:text-2xl font-bold text-emerald-50">
                            See my Resume
                        </p>
                        <h1 className="text-lg sm:text-3xl uppercase text-green-500 font-extrabold mt-4">
                            hire me
                        </h1>
                    </Link>
                    <div className="flex items-center border border-white/15 bg-black/30 rounded-lg p-3 flex-col justify-center h-36">
                        <h3 className="text-2xl font-bold uppercase text-center">
                            Let’s connect with me
                        </h3>
                        <div className="flex justify-center pt-5  items-center gap-4 text-2xl ">
                            <span className="cursor-pointer border border-white p-2 shadow-2xs rounded-lg hover:scale-90 transition-all duration-150">
                                <a href="https://www.linkedin.com/in/vickyraj15/">
                                    <LiaLinkedinIn />
                                </a>
                            </span>
                            <span className="cursor-pointer border border-white p-2 shadow-2xs rounded-lg hover:scale-90 transition-all duration-150">
                                <a href="https://github.com/vickyraj15">
                                    <FaGithub />
                                </a>
                            </span>
                            <span className="cursor-pointer border border-white p-2 shadow-2xs rounded-lg hover:scale-90 transition-all duration-150">
                                <a href="https://www.instagram.com/vickyraj9700/">
                                    <CiInstagram />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

                <h1 className="text-lg sm:text-3xl uppercase font-bold mt-8 mb-4">
                    what I'm doing
                </h1>
                <div className="  rounded-lg  w-8/12 border border-white/15 bg-black/30 p-10 shadow-lg flex flex-col justify-center items-center mb-4">
                    <h1 className="uppercase text-shadow-lg sm:text-2xl font-extrabold">
                        full stack web developer
                    </h1>
                    <p className="text-gray-400 justify-center py-3 text-center">
                        Experienced in building responsive and interactive web
                        applications using the MERN stack.
                    </p>
                </div>
                <h1 className="text-lg sm:text-3xl uppercase font-bold mt-8">
                    Top skills
                </h1>
                <div className="flex justify-center gap-4 flex-wrap mt-2 ">
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaHtml5 />
                        HTML
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaCss3 />
                        CSS
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaJs />
                        JavaScript
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaReact />
                        React
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaNodeJs />
                        Node.js
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaNode />
                        Express.js
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaDatabase />
                        MongoDB
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaJava />
                        Java
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaC />
                        C++
                    </span>
                    <span className="px-4 py-1 bg-green-500 text-black flex items-center gap-2 rounded-full">
                        <FaPython />
                        Python
                    </span>
                </div>
                <h1
                    className="text-lg sm:text-3xl uppercase font-bold mt-8"
                    id="resume"
                >
                    Resume
                </h1>
                <iframe
                    src="/VICKYRESUME26.pdf"
                    className="w-full h-[1100px] mt-6 border rounded-lg"
                ></iframe>
                <div className="flex justify-center">
                    <a
                        href="/VICKYRESUME26.pdf"
                        download
                        className="flex flex-row gap-2 mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-gray-800 items-center justify-center"
                    >
                        <CiSaveDown2 />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
