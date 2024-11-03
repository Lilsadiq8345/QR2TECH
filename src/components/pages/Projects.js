// src/components/pages/Projects.js
import React, { useRef } from 'react';

const Projects = ({ projects, handleProjectClick }) => {
    const projectCardsRef = useRef(null);

    return (
        <section id="projects" className="case-studies py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 ml-4 md:ml-8">
                <i style={{ fontStyle: 'italic' }}>Our Successful Projects</i>
            </h2>
            <button className="all-button bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ml-4 md:ml-4">
                <a href="/notfound">All Cases Read Now</a>
            </button>
            <div className="project-cards flex overflow-x-auto px-4 md:px-8 space-x-4" ref={projectCardsRef}>
                {projects.concat(projects).map((project, index) => (
                    <div
                        key={index}
                        className="project-card flex-shrink-0 w-72 md:w-80 bg-white shadow-md rounded-lg p-6 cursor-pointer transition-transform hover:scale-105"
                        onClick={() => handleProjectClick(project)}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-40 md:h-48 object-fit rounded-t-lg" />
                        <div className="project-info mt-4">
                            <img src={project.logo} alt="Company Logo" className="w-8 h-8 mb-2" />
                            <h3 className="text-lg font-bold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
