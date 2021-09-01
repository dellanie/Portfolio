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
                image="https://pbs.twimg.com/media/E-LxcsVXoAA7wTh?format=jpg&name=900x900"
                title="Amazon clone"
                desc="An amazon clone web app .Created with Reactjs,css,react-router-dom,Material UI, Context api, Firebase.This project was created mainly for learning and development of skills and the fun of it. "
                link='https://clone-8794c.web.app'
                />

                <ProjectCard
                image="https://camo.githubusercontent.com/8d8556b258ec444c4ba80d4d1cc154e70325a0e8341c6ffb6e795c5398bb08a1/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f4334453232415146384a6c51537a55524644672f6665656473686172652d736872696e6b5f3830302f302f313632383631343739323836303f653d3136333335363438303026763d6265746126743d51496e485368503332394973594543685f6b725f4b656b6e36744a57463879657538684d4d4a7a6b534745"
                title="Facebook Clone"
                desc="Facebook webapp created with Reactjs, CSS , React-router-dom,
                Material UI.This project was created mainly for learning and development of skills."
                link="https://facebook-clone-b3232.web.app/"
                />
                
            </div>
            <div className="projectcards">
                <ProjectCard
                image="https://camo.githubusercontent.com/ae5f8a0ff6531f23cb697e9a8ca48680349d95df1fbbdeb2b224a16cee65b172/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f43344532324151452d38614735356b595730772f6665656473686172652d736872696e6b5f323034385f313533362f302f313632393939313935373636363f653d3136333335363438303026763d6265746126743d746f524a44696e4c52624d3950337242744d664c6b4a5831415142564f4c466d6d485f4945733353375473"
                title="TourNg"
                desc="A tourism web app created with Reactjs,css,react-router-dom that shows different tourism attraction and resorts , promoting the nigeria culture and heritage. "
                link="https://github.com/dellanie/TRAVELNG"
                />            
                
                <ProjectCard
                image="https://camo.githubusercontent.com/cd3cd43be2f4445993fc69a5e3b47b5712f94a05ba310a22349264e8020cef50/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4532394f394f4157554151556d4d443f666f726d61743d6a7067266e616d653d6c61726765"
                title="AIRBNB"
                desc="Airbnb web app created with Reactjs,css,react-router-dom,Material UI .This project has features which allow users to pick dates for stay, and 'explore nearby. "
                link="https://github.com/dellanie/airbnb-clone"
                />           
            </div>
        </div>
    )
}

export default Projects
