import React from 'react'
import { BiLinkExternal } from "react-icons/bi";
import { IoCodeSlashSharp } from "react-icons/io5";

function ProjectCard({ title, description, tags, demo, github, }) {

    return (
        <div className="project-card reveal">
            <div className="project-content">
                <div className="project-tags">
                    {(tags || []).map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="project-links">
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal /> Live Demo
                        </a>
                    )}

                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <IoCodeSlashSharp /> Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard