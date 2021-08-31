import React from 'react';
import About from './About';
import "./home.css";
import HomeHeader from './HomeHeader';
import Resume from './Resume';
import Skills from './Skills';

function Home() {
    return (
        <div className="home">
            <HomeHeader/>
            <About/>

            <Skills/>
            <Resume/>
        </div>
    )
}

export default Home 
