import React from "react";
import { BsEye, BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const ProjectCard = ({ name, img }) => {
    return (
        <div className=" bg-gradient-to-t from-gray-700 to-indigo-800 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
            <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                {name}
            </h3>
            <a
                href="https://vickyraj.vercel.app/"
                className="text-blue-400 hover:underline"
            >
                <img
                    src={img}
                    alt="card"
                    className="w-fit rounded-2xl border-2 border-blue-600"
                />
            </a>
            <p className="text-gray-300 mt-2 mb-4">
                <h1 className="text-gray-400 mb-2 uppercase">major project</h1>
                This project involves developing a responsive web application
                using React and Tailwind CSS.
            </p>
            <span className="px-4 mr-1 py-2 bg-green-500 text-black rounded-full">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="w-4 h-4 inline-block bg-black"
                />
                JavaScript
            </span>
            <span className=" mr-1 px-4 py-2 bg-green-500 text-black rounded-full">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="HTML5"
                    className="w-4 h-4 inline-block bg-black "
                />
                React
            </span>
            <span className="px-4 py-2 bg-green-500 text-black rounded-full">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    className="w-6  h-6 inline-block  bg-black"
                />
                Tailwind
            </span>
            <div className="hover:bg-black/70 h-full w-full absolute top-0 left-0">
                <div
                    className=" overflow-hidden mt-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-end-safe gap-6
                     opacity-0 group-hover:opacity-100 transition duration-300 "
                >
                    {/* View (Eye) */}
                    <a
                        href="https://vickyraj.vercel.app/"
                        target="_blank"
                        className=" flex justify-between p-3 rounded-full border bg-blue-800 border-white/20 hover:border-green-500 hover:scale-90 transition-all duration-150 "
                        title="View Project"
                    >
                        <BsEye />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/vickyraj15"
                        target="_blank"
                        className=" flex justify-center p-3 rounded-full border bg-blue-800 border-white/20 hover:border-green-500 hover:scale-90 transition-all duration-150 "
                        title="GitHub"
                    >
                        <BsGithub />
                    </a>

                    {/* Live / Link */}
                    <a
                        href="https://www.linkedin.com/in/vickyraj15/"
                        target="_blank"
                        className=" p-3 rounded-full border bg-blue-800 border-white/20 hover:border-green-500 hover:scale-90 transition-all duration-150 "
                        title="Live Demo"
                    >
                        <LiaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
