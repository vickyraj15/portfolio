import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-indigo-800 text-white flex flex-col items-center px-10 py-20">
      <button
        className="fixed left-2 top-3/4 -translate-y-1/2 bg-green-500 text-black  px-3 pt-2 pb-5
          rounded-full rounded-tr-full rotate-90 origin-left cursor-pointer hover:bg-purple-600 z-50 font-semibold"
      >
        Download Resume
      </button>
      <div className="w-full flex justify-around">
        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col justify-center gap-0">
          <p className="text-4xl mb-2">
            Hello I'm{" "}
            <span className="text-green-500 font-semibold">Vicky Raj </span>
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
            Forging digital bridges, one line of code at a time, to empower all
            in the online realm.
          </p>
        </div>
        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-around items-center relative">
          <div className=" absolute w-78 h-78 rounded-full animate-spin  border-4 border-b-white opacity-20"></div>
          <div className="absolute w-72 h-72 rounded-full animate-pulse border-b-white opacity-10"></div>

          <img
            src="/vicky.jpeg"
            alt="profile"
            className=" w-70 h-70 object-cover  rounded-full  relative z-10"
          />
        </div>
      </div>

      <div className="max-w-full overflow-auto flex justify-center">
        <h3 className="text-8xl width-full text-nowrap">
          Crafting seamless digital experiences through innovative web
          solutions.
        </h3>
      </div>
    </div>
  );
};

export default Home;
