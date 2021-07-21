import React from 'react';
import emailIcon from '../img/email.png';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedIn.png';

function Footer() {
    return (
        <div className="footer">
            <div className="icon-container">
                <a href="mailto: ryanascherr@gmail.com" target="_blank"><img src={emailIcon}></img></a>
            </div>
            <div className="icon-container">
                <a href="https://github.com/ryanascherr" target="_blank"><img src={githubIcon}></img></a>
            </div>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/ryanascherr/" target="_blank"><img src={linkedinIcon}></img></a>
            </div>
        </div>
    )
}

export default Footer;