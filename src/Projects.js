import React from 'react';
import HomeHeader from './HomeHeader';
import ProjectCard from './ProjectCard';
import "./projects.css";

function Projects() {
    return (
        <div className="projects">
            <div className="projecthead">
            <HomeHeader/>
            </div>
            <div className="projectcardss">
                <ProjectCard
                image="amazon.png"
                title="Amazon clone"
                desc="An amazon clone web app .Created with Reactjs,css,react-router-dom,Material UI, Context api, Firebase.This project was created mainly for learning and development of skills and the fun of it. "
                link='https://clone-8794c.web.app'
                />

                <ProjectCard
                image="facebookcone1.png"
                title="Facebook Clonne"
                desc="Facebook webapp created with Reactjs, CSS , React-router-dom,
                Material UI.This project was created mainly for learning and development of skills."
                link="https://facebook-clone-b3232.web.app/"
                />
                
            </div>
            <div className="projectcards">
                <ProjectCard
                image="tourng3.png"
                title="TourNg"
                desc="A tourism web app created with Reactjs,css,react-router-dom that shows different tourism attraction and resorts , promoting the nigeria culture and heritage. "
                link="https://github.com/dellanie/TRAVELNG"
                />            
                
                <ProjectCard
                image="airbnb1.png"
                title="AIRBNB"
                desc="Airbnb web app created with Reactjs,css,react-router-dom,Material UI .This project has features which allow users to pick dates for stay, and 'explore nearby. "
                link="https://github.com/dellanie/airbnb-clone"
                />           
            </div>
        </div>
    )
}

export default Projects
