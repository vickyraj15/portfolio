import React from "react";

const Project = () => {
    return (
        <div className=" w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 md:px-12 sm:px-9 ">
            <div className="w-full pt-10 flex justify-center mb-6">
                <h2 className="text-3xl sm:text-5xl border-b border-black dark:border-white px-2 text-green-400 font-bold mb-6 mt-6">
                    Projects
                </h2>
            </div>
            {/* Project Cards */}
            <div className="w-full  flex flex-wrap justify-center gap-20 py-7 ">
                {/* Project Card 1 */}
                <div className=" bg-blue-900 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
                    <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                        Portfolio
                    </h3>
                    <a
                        href="https://vickyraj.vercel.app/"
                        className="text-blue-400 hover:underline"
                    >
                        <img
                            src="/project.png"
                            alt="card"
                            className="w-fit rounded-2xl border-2 border-blue-600"
                        />
                    </a>
                    <p className="text-gray-300 mt-2 mb-4">
                        <h1 className="text-gray-400 mb-2 uppercase">
                            major project
                        </h1>
                        This project involves developing a responsive web
                        application using React and Tailwind CSS.
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
                    <div
                        className=" overflow-hidden mt-4 absolute inset-0 bg-black/70 flex justify-center items-end-safe gap-6
               opacity-0 group-hover:opacity-100 transition duration-300 "
                    >
                        {/* View (Eye) */}
                        <a
                            href="https://vickyraj.vercel.app/"
                            target="_blank"
                            className=" bg-gray-800 flex justify-between p-3 rounded-full "
                            title="View Project"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                className="w-5 h-5"
                                alt="view"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vickyraj15"
                            target="_blank"
                            className=" bg-gray-800 flex justify-center p-3 rounded-full "
                            title="GitHub"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-5 h-5"
                            />
                        </a>

                        {/* Live / Link */}
                        <a
                            href="https://www.linkedin.com/in/vickyraj15/"
                            target="_blank"
                            className=" bg-gray-800 p-3 rounded-full "
                            title="Live Demo"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                className="w-5 h-5"
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className=" bg-blue-900 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
                    <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                        Portfolio
                    </h3>
                    <a
                        href="https://vickyraj.vercel.app/"
                        className="text-blue-400 hover:underline"
                    >
                        <img
                            src="/project.png"
                            alt="card"
                            className="w-fit rounded-2xl border-2 border-blue-600"
                        />
                    </a>
                    <p className="text-gray-300 mt-2 mb-4">
                        <h1 className="text-gray-400 mb-2 uppercase">
                            major project
                        </h1>
                        This project involves developing a responsive web
                        application using React and Tailwind CSS.
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
                    <div
                        className=" overflow-hidden mt-4 absolute inset-0 bg-black/70 flex justify-center items-center-safe gap-6
               opacity-0 group-hover:opacity-100 transition duration-300 "
                    >
                        {/* View (Eye) */}
                        <a
                            href="https://vickyraj.vercel.app/"
                            target="_blank"
                            className=" bg-gray-800 flex justify-between p-3 rounded-full "
                            title="View Project"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                className="w-5 h-5"
                                alt="view"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vickyraj15"
                            target="_blank"
                            className=" bg-gray-800 flex justify-center p-3 rounded-full "
                            title="GitHub"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-5 h-5"
                            />
                        </a>

                        {/* Live / Link */}
                        <a
                            href="https://www.linkedin.com/in/vickyraj15/"
                            target="_blank"
                            className=" bg-gray-800 p-3 rounded-full "
                            title="Live Demo"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                className="w-5 h-5"
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className=" bg-blue-900 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
                    <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                        Portfolio
                    </h3>
                    <a
                        href="https://vickyraj.vercel.app/"
                        className="text-blue-400 hover:underline"
                    >
                        <img
                            src="/project.png"
                            alt="card"
                            className="w-fit rounded-2xl border-2 border-blue-600"
                        />
                    </a>
                    <p className="text-gray-300 mt-2 mb-4">
                        <h1 className="text-gray-400 mb-2 uppercase">
                            major project
                        </h1>
                        This project involves developing a responsive web
                        application using React and Tailwind CSS.
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
                    <div
                        className=" overflow-hidden mt-4 absolute inset-0 bg-black/70 flex justify-center items-center-safe gap-6
               opacity-0 group-hover:opacity-100 transition duration-300 "
                    >
                        {/* View (Eye) */}
                        <a
                            href="https://vickyraj.vercel.app/"
                            target="_blank"
                            className=" bg-gray-800 flex justify-between p-3 rounded-full "
                            title="View Project"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                className="w-5 h-5"
                                alt="view"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vickyraj15"
                            target="_blank"
                            className=" bg-gray-800 flex justify-center p-3 rounded-full "
                            title="GitHub"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-5 h-5"
                            />
                        </a>

                        {/* Live / Link */}
                        <a
                            href="https://www.linkedin.com/in/vickyraj15/"
                            target="_blank"
                            className=" bg-gray-800 p-3 rounded-full "
                            title="Live Demo"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                className="w-5 h-5"
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>

                {/* Project Card 4 */}
                <div className=" bg-blue-900 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
                    <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                        Portfolio
                    </h3>
                    <a
                        href="https://vickyraj.vercel.app/"
                        className="text-blue-400 hover:underline"
                    >
                        <img
                            src="/project.png"
                            alt="card"
                            className="w-fit rounded-2xl border-2 border-blue-600"
                        />
                    </a>
                    <p className="text-gray-300 mt-2 mb-4">
                        <h1 className="text-gray-400 mb-2 uppercase">
                            major project
                        </h1>
                        This project involves developing a responsive web
                        application using React and Tailwind CSS.
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
                    <div
                        className=" overflow-hidden mt-4 absolute inset-0 bg-black/70 flex justify-center items-center-safe gap-6
               opacity-0 group-hover:opacity-100 transition duration-300 "
                    >
                        {/* View (Eye) */}
                        <a
                            href="https://vickyraj.vercel.app/"
                            target="_blank"
                            className=" bg-gray-800 flex justify-between p-3 rounded-full "
                            title="View Project"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                className="w-5 h-5"
                                alt="view"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vickyraj15"
                            target="_blank"
                            className=" bg-gray-800 flex justify-center p-3 rounded-full "
                            title="GitHub"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-5 h-5"
                            />
                        </a>

                        {/* Live / Link */}
                        <a
                            href="https://www.linkedin.com/in/vickyraj15/"
                            target="_blank"
                            className=" bg-gray-800 p-3 rounded-full "
                            title="Live Demo"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                className="w-5 h-5"
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>

                {/* Project Card 5 */}
                <div className=" bg-blue-900 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
                    <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                        Portfolio
                    </h3>
                    <a
                        href="https://vickyraj.vercel.app/"
                        className="text-blue-400 hover:underline"
                    >
                        <img
                            src="/project.png"
                            alt="card"
                            className="w-fit rounded-2xl border-2 border-blue-600"
                        />
                    </a>
                    <p className="text-gray-300 mt-2 mb-4">
                        <h1 className="text-gray-400 mb-2 uppercase">
                            major project
                        </h1>
                        This project involves developing a responsive web
                        application using React and Tailwind CSS.
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
                    <div
                        className=" overflow-hidden mt-4 absolute inset-0 bg-black/70 flex justify-center items-center-safe gap-6
               opacity-0 group-hover:opacity-100 transition duration-300 "
                    >
                        {/* View (Eye) */}
                        <a
                            href="https://vickyraj.vercel.app/"
                            target="_blank"
                            className=" bg-gray-800 flex justify-between p-3 rounded-full "
                            title="View Project"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                className="w-5 h-5"
                                alt="view"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vickyraj15"
                            target="_blank"
                            className=" bg-gray-800 flex justify-center p-3 rounded-full "
                            title="GitHub"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-5 h-5"
                            />
                        </a>

                        {/* Live / Link */}
                        <a
                            href="https://www.linkedin.com/in/vickyraj15/"
                            target="_blank"
                            className=" bg-gray-800 p-3 rounded-full "
                            title="Live Demo"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                className="w-5 h-5"
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>

                {/* Project Card 6 */}
                <div className=" bg-blue-900 shadow-lg p-6 relative group block w-full sm:w-80 md:w-96 rounded-2xl overflow-hidden cursor-pointer ">
                    <h3 className="text-3xl font-semibold mb-4 flex-col justify-center items-center flex">
                        Portfolio
                    </h3>
                    <a
                        href="https://vickyraj.vercel.app/"
                        className="text-blue-400 hover:underline"
                    >
                        <img
                            src="/project.png"
                            alt="card"
                            className="w-fit rounded-2xl border-2 border-blue-600"
                        />
                    </a>
                    <p className="text-gray-300 mt-2 mb-4">
                        <h1 className="text-gray-400 mb-2 uppercase">
                            major project
                        </h1>
                        This project involves developing a responsive web
                        application using React and Tailwind CSS.
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
                    <div
                        className=" overflow-hidden mt-4 absolute inset-0 bg-black/70 flex justify-center items-center gap-6
               opacity-0 group-hover:opacity-100 transition duration-300 "
                    >
                        {/* View (Eye) */}
                        <a
                            href="https://vickyraj.vercel.app/"
                            target="_blank"
                            className=" bg-gray-800 flex justify-between p-3 rounded-full "
                            title="View Project"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                                className="w-5 h-5"
                                alt="view"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/vickyraj15"
                            target="_blank"
                            className=" bg-gray-800 flex justify-center p-3 rounded-full "
                            title="GitHub"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-5 h-5"
                            />
                        </a>

                        {/* Live / Link */}
                        <a
                            href="https://www.linkedin.com/in/vickyraj15/"
                            target="_blank"
                            className=" bg-gray-800 p-3 rounded-full "
                            title="Live Demo"
                        >
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                className="w-5 h-5"
                                alt="linkedin"
                            />
                        </a>
                    </div>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </div>
    );
};

export default Project;
