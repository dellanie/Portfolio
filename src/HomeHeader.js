import { Button } from '@material-ui/core';
import React from 'react';
import "./homeheader.css";
import { useHistory } from 'react-router-dom';

function HomeHeader() {
    
    const history = useHistory();

    return (
        <div className="homeheader">
            <Button onClick={()=> history.push("/")} >HOME</Button>
            <Button onClick={()=> history.push("/projects")}>PROJECTS</Button>
            <Button onClick={()=> history.push("/contact")}>CONTACT</Button>
        </div>
    )
}

export default HomeHeader
