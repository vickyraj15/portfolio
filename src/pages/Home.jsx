import React from "react";
import ContactForm from "../components/ContactForm";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center px-10 py-20">
            <a href="./VICKYRESUME26.pdf">
                <button
                    className="fixed  left-2 top-3/4 -translate-y-1/2 bg-green-500 text-black  px-3 pt-2 pb-5
          rounded-full rounded-tr-full rotate-90 origin-left cursor-pointer hover:bg-purple-600 z-50 font-semibold"
                >
                    Download Resume
                </button>
            </a>
            <div className=" pt-12 w-full flex justify-around flex-col gap-5 md:flex-row">
                {/* LEFT SIDE TEXT */}
                <div className="flex flex-col justify-center gap-0">
                    <p className="text-4xl md:text-5xl font-bold mb-2">
                        Hello I'm{" "}
                        <span className="text-green-500 font-bold">
                            Vicky Raj
                        </span>
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-12">
                        Web Developer
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-12">
                        MERN Stack
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-12">
                        DSA with Java & C++
                    </h1>

                    <p className="text-gray-300 mt-4 max-w-lg">
                        Forging digital bridges, one line of code at a time, to
                        empower all in the online realm.
                    </p>
                </div>
                {/* RIGHT SIDE IMAGE */}
                <div className="overflow-hidden rounded-full flex justify-center items-center relative size-60! md:size-72! md:min-w-72 lg:size-80! xl:size-96 mx-auto">
                    {/* Outer rotating ring */}

                    {/* TOP border */}
                    <div
                        className="absolute rounded-full   h-10/12 w-10/12
    border-2 border-transparent border-t-white border-b-white
    opacity-40 animate-spin-slow duration-75"
                    ></div>

                    {/* Middle pulse ring */}
                    <div
                        className="absolute flex-wrap rounded-full h-full w-full
    border-2 border-white opacity-10  animate-pulse"
                    ></div>

                    {/* Glow ring */}

                    {/* Profile Image with floating animation */}
                    <img
                        src="/vicky.png"
                        alt="profile"
                        className=" flex-wrap  object-cover rounded-full h-full w-full mt-5
    relative z-10  shadow-xl"
                    />
                </div>
            </div>

            <div className="w-full overflow-hidden mt-5 py-3 px-2 font-bold whitespace-nowrap">
                <h2 className="uppercase inline-block animate-marquee text-[6vw] sm:text-[8vw]">
                    developer | MERN Stack specialist | Java | C++ | C | DSA |
                    developer | MERN Stack specialist | Java | C++ | C | DSA |
                    developer | MERN Stack specialist | Java | C++ | C | DSA |
                </h2>
            </div>
            {/*card section*/}
            <div className="score-fm w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 md:px-12">
                <div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t from-purple-700 to-indigo-800 flex items-center text-center justify-center flex-col hover:scale-105">
                    <b className="hover:text-[4vw]">24+</b>
                    <h1 className="uppercase text-base sm:text-lg md:text-xl">
                        succesfully completed project
                    </h1>
                    "
                </div>
                <div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t from-purple-700 to-indigo-800 flex items-center text-center justify-center flex-col hover:scale-105">
                    <b className="hover:text-[4vw]">2.5K+</b>
                    <h1 className="uppercase text-base sm:text-lg md:text-xl">
                        satisfied clients
                    </h1>
                </div>
                <div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t from-purple-700 to-indigo-800 flex items-center text-center justify-center flex-col hover:scale-105">
                    <b className="hover:text-[4vw]">2.5K+</b>
                    <h1 className="uppercase text-base sm:text-lg md:text-xl">
                        LINKEDIN FAMILY
                    </h1>
                </div>
                <div className="relative overflow-hidden  size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t from-purple-700 to-indigo-800 flex items-center text-center justify-center flex-col hover:scale-105">
                    <b className="hover:text-[4vw]">1.2+</b>
                    <h1 className="uppercase text-base sm:text-lg md:text-xl">
                        years of experience
                    </h1>
                </div>

                {/* TWO LINKS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full sm:w-5/6 py-4 sm:py-5 md:py-6 px6 sm:px-9 md-px-12">
                    <a
                        className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t from-purple-700 to-indigo-800 flex items-center text-center justify-center flex-col hover:scale-105a gap-2 "
                        href="/about"
                    >
                        <h2 className=" font-bold text-lg sm:text-3xl uppercase flex items-center">
                            A Little on me
                        </h2>
                        <h2 className="font-bold text-2xl sm:text-5xl uppercase heading-color  text-green-400 flex items-center">
                            Bio
                        </h2>
                    </a>
                    <a
                        className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t from-purple-700 to-indigo-800 flex items-center text-center justify-center flex-col hover:scale-105a gap-2 "
                        href="/Projects"
                    >
                        <h2 className=" font-bold text-lg sm:text-3xl uppercase flex items-center">
                            SEE MY PROJECT
                        </h2>
                        <h2 className="font-bold text-3xl sm:text-5xl uppercase text-green-400 flex items-center">
                            HIRE ME
                        </h2>
                    </a>
                </div>
            </div>
            {/*skeill bar*/}
            <div className="skill-bar w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 md:px-12 sm:px-9">
                <div className="w-full flex justify-center mb-6">
                    <h2 className="text-3xl sm:text-5xl border-b border-black dark:border-white px-2 text-green-400 font-bold mb-6">
                        My Skills
                    </h2>
                </div>
                {/* Skill Items */}
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
 to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Java</span>
                            <span>75%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-7/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden"
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Javascript</span>
                            <span>65%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-6/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div
                                className="h-full w-[65%]
         from-customeGreen-500 to-customeGreen-600
        animate-progress"
                            ></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden"
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>react.js</span>
                            <span>85%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-8/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div
                                className="h-full w-[85%]
         from-customeGreen-500 to-customeGreen-600
        animate-progress"
                            ></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
   to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Node.js</span>
                            <span>75%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-7/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>

                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Express.js</span>
                            <span>70%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-7/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>MongoDB</span>
                            <span>80%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-8/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
b to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>MySQL</span>
                            <span>85%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-8/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Redux</span>
                            <span>75%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-7/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>HTML</span>
                            <span>98%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-11/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>EJS</span>
                            <span>75%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-7/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Vanilla css</span>
                            <span>85%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-9/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-enblack/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Bootstrap</span>
                            <span>90%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-10/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>tailwind css</span>
                            <span>95%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-11/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full sm:w-5/6 px-5 py-6
 to-customelight-500 dark:to-customeDark-500
from-customelight-688 dark:from-customeDark-600
rounded-3xl border border-black/40 dark:border-white/40
shadow-md shadow-black/50 overflow-hidden "
                >
                    {/* glow */}
                    <div
                        className="absolute top-0 right-0 h-20 w-20 blur-3xl
   to-customeGreen-500 from-customeGreen-600"
                    ></div>

                    {/* content */}
                    <div className="relative z-10 flex flex-col gap-4">
                        {/* title */}
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Git/Github</span>
                            <span>75%</span>
                        </div>

                        {/* progress bar */}
                        <div className="w-9/12 h-2 bg-green-500 rounded-full overflow-hidden">
                            <div className="h-full w-{75%} from-customeGreen-500 to-customeGreen-600 animate-progress"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Home;
