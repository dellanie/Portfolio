import React from 'react'
import HomeHeader from './HomeHeader';
import "./contact.css";
import { GitHub, LinkedIn } from '@material-ui/icons';


function Contact() {
    
    return (
        <div className="contact">
            <HomeHeader/>
            <div className="contact_body">
            <h1>GET IN TOUCH</h1>
            
            </div>
            <div className="contact_icon">
            <h3>Email : a.lanre11@yahoo.com</h3>
            <a href="https://github.com/dellanie" target="_blank">
            <GitHub className="contact-i"/>
            </a>
            <a href="https://www.linkedin.com/in/olanrewaju-akinmolayan-5a3082202/" target="_blank">
            <LinkedIn className="contact-i"/>
            </a>
            </div>
        </div>
    )
}

export default Contact
