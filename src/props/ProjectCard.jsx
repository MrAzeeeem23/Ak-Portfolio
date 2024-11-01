import React from 'react'

function ProjectCard({ project }) {
    return (
        <div className='flex flex-col bg-gray-950 text-white m-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105'>
            <img
                src={project.img}
                alt={project.name}
                className='rounded-lg w-full h-52 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300'
            />

            <h1 className='text-3xl font-semibold mt-4 mb-2'>
                {project.name}
            </h1>

            <p className='text-gray-400 mb-6 leading-relaxed'>{project.discription}</p>

            <div className='flex justify-center'>
                <a 
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white bg-red-800 hover:bg-red-400 font-Playfair_Display rounded-md py-2 px-6 text-sm font-medium tracking-wider transition-colors duration-300'
                >
                    View Repo
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
