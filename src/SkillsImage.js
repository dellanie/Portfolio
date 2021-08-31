import React from 'react';
import './skillsimage.css';

function SkillsImage({image,title}) {
    return (
        <div className="skillsimage">
            <img src={image} alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default SkillsImage
