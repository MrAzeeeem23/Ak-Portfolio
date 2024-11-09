import React from "react";

function ProjectCard({ project }) {
    return (
        <div className="flex flex-col font-Poppins bg-transparent border-black border-2 text-black m-4 p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 dark:bg-gray-950 dark:text-white">
            <img
                src={project.img}
                alt={project.name}
                className="rounded-2xl w-full h-52 object-cover transition-opacity duration-300"
            />

            <h1 className="text-3xl mt-4 mb-2">{project.name}</h1>

            <p className="text-gray-800 mb-6 leading-relaxed dark:text-gray-400">
                {project.description}
            </p>

            <div className="flex justify-between">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-800 mx-2 hover:bg-red-400 font-Italiana rounded-full py-2 px-6 text-md font-medium tracking-wider transition-colors duration-300"
                >
                    View Repo
                </a>
                {
                project.liveDemo ? 
                <a
                 href={project.liveDemo}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white bg-red-800 hover:bg-red-400 font-Italiana rounded-full p-2 px-3 text-md font-medium tracking-wider transition-colors duration-300"
                 ><i class="bi bi-link-45deg"></i></a> : ""
                 }
            </div>
        </div>
    );
}

export default ProjectCard;
