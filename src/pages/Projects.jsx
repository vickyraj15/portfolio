import React from "react";
import ProjectCard from "../components/ProjectCard";

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
                <ProjectCard name={"Portfolio"} img={"/project.png"} />
                <ProjectCard name={"E-commerce Website"} img={"/project.png"} />
                <ProjectCard
                    name={"Task Management App"}
                    img={"/project.png"}
                />
                <ProjectCard name={"Weather Dashboard"} img={"/project.png"} />
                <ProjectCard name={"Blog Platform"} img={"/project.png"} />
                <ProjectCard name={"Social Media App"} img={"/project.png"} />
                <ProjectCard
                    name={"Data Visualization Dashboard"}
                    img={"/project.png"}
                />
            </div>
        </div>
    );
};

export default Project;
