import React from 'react'

function ProjectCard({ project }) {
    return (
        <div className='flex flex-col font-Poppins bg-gray-300 text-black m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 dark:bg-gray-950 dark:text-white'>
            <img
                src={project.img}
                alt={project.name}
                className='rounded-lg w-full h-52 object-cover transition-opacity duration-300'
            />

            <h1 className='text-3xl mt-4 mb-2'>
                {project.name}
            </h1>

            <p className='text-gray-800 mb-6 leading-relaxed dark:text-gray-400'>{project.discription}</p>

            <div className='flex justify-center'>
                <a 
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white bg-red-800 hover:bg-red-400 font-Italiana rounded-md py-2 px-6 text-md font-medium tracking-wider transition-colors duration-300'
                >
                    View Repo
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
