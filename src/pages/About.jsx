import React from "react";

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
                <div className="grid grid-cols-3 grid-rows-1 gap-4 my-8 ">
                    {/* Left side - 2 cards */}
                    <div className="md:col-span-2  grid grid-cols-1 gap-6">
                        {/* Card 1 */}
                        <div className="rounded-2xl flex flex-col justify-center items-center border border-white/10    bg-black/30 p-6 shadow-lg">
                            <h3 className="text-2xl font-bold uppercase">
                                Do you want to start a project together?
                            </h3>

                            <button className="mt-4 flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-white/10">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"
                                    alt="Copy"
                                    className="w-6 h-6 bg--black"
                                />
                                Copy my Email
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl   py-12 flex flex-col items-center  border border-white/10 bg-black/30 p-6 shadow-lg">
                            <h3 className="text-4xl  font-bold uppercase ">
                                Let’s connect with me
                            </h3>
                            <div className="flex justify-center pt-5  items-center gap-4 text-2xl ">
                                <span className="cursor-pointer border border-white bg-black p-1 shadow-2xs">
                                    <a href="https://www.linkedin.com/in/vickyraj15/">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                            alt="LinkedIn"
                                            className="w-6 bg-white"
                                        />
                                    </a>
                                </span>
                                <span className="cursor-pointer border border-white bg-black p-1 shadow-2xs">
                                    <a href="https://github.com/vickyraj15">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                            alt="GitHub"
                                            className="w-6  bg-amber-50"
                                        />
                                    </a>
                                </span>
                                <span className="cursor-pointer border border-white bg-black p-1 shadow-2xs">
                                    <a href="https://www.instagram.com/vickyraj9700/">
                                        <img
                                            src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                                            alt="Instagram"
                                            className="w-6  bg-pink-400"
                                        />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - big card */}
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg flex flex-col justify-center items-center">
                        <a href="/VICKYRESUME26.pdf">
                            <p className="uppercase text-shadow-lg  sm:text-2xl font-bold text-emerald-50">
                                See my Resume
                            </p>
                            <h1 className="text-lg sm:text-3xl uppercase text-green-500 font-extrabold mt-4">
                                hire me
                            </h1>
                        </a>
                    </div>

                    <h1 className="text-lg sm:text-3xl uppercase font-bold mt-8">
                        what I'm doing
                    </h1>
                </div>
                <div className="  rounded-4xl  w-8/12 border border-white/15 bg-black/30 p-10 shadow-lg flex flex-col justify-center items-center mb-4">
                    <h1 className="uppercase text-shadow-lg sm:text-2xl font-extrabold">
                        full stack web developer
                    </h1>
                    <p className="text-gray-400 justify-center py-3">
                        Experienced in building responsive and interactive web
                        applications using the MERN stack.
                    </p>
                </div>
                <h1 className="text-lg sm:text-3xl uppercase font-bold mt-8">
                    Top skills
                </h1>
                <div className="flex justify-center gap-4 flex-wrap mt-2 ">
                    <span className="px-2 py-2 bg-green-500 text-black rounded-4xl">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML5"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        HTML
                    </span>
                    <span className="px py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS3"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        CSS
                    </span>
                    <span className="px-4 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        JavaScript
                    </span>
                    <span className="px-4 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="HTML5"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        React
                    </span>
                    <span className="px-4 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        Node.js
                    </span>
                    <span className="px-4 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://www.svgrepo.com/show/354121/expressjs-icon.svg"
                            alt="Express.js"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        Express.js
                    </span>
                    <span className="px-2 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        MongoDB
                    </span>
                    <span className="px-2 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                            alt="Java"
                            className="w-4 h-4 inline-block bg-black "
                        />
                        Java
                    </span>
                    <span className="px-2 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                            alt="C++"
                            className="w-4 h-4 inline-block bg-black"
                        />
                        C++
                    </span>
                    <span className="px-4 py-2 bg-green-500 text-black rounded-full">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                            className="w-6  h-6 inline-block mr-2 bg-black"
                        />
                        Tailwind
                    </span>
                </div>
                <h1 className="text-lg sm:text-3xl uppercase font-bold mt-8">
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
                        className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-gray-800 items-center justify-center flex-col"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
