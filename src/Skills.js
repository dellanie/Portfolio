import React from 'react';
import './skills.css'
import SkillsImage from './SkillsImage';

function Skills() {
    return (
        <div className="skills">
            <h1>Professonal Skillset : </h1>
            <div className="skillsimage">
            <SkillsImage
            image="react.png"
            />      
            <SkillsImage
            image="cssblackpng.png"
            />      
            <SkillsImage
            image="jsblackpng.png"
            />    
            <SkillsImage
            image="html5png.png"
            />
            </div> 

            <h1>Exposure : </h1>
            <div className="skillsimage">
            <SkillsImage
            image="pythonblack.png"
            />
            <SkillsImage
            image="wordpressblackpng.png"
            />
            <SkillsImage
            image="phpblack.png"
            />
            <SkillsImage
            image="firebaseblackjpg.jpg"
            />
            <div className="skillsimage">
                <SkillsImage
                image="gitpng.png"
                />
            </div>
            </div>
        </div>
    )
}

export default Skills
