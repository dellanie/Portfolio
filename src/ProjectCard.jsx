import { Button } from '@material-ui/core';
import React from 'react';
import "./projectcard.css";

function ProjectCard({image,title,desc,link}) {
    return (
        <div className="projectcard">
            
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{desc}</p>

            <div className="projectbuttons">
                <a href={link}>
                <Button className="probutton">View Project</Button>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
