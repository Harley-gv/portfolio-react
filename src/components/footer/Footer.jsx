import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
       <footer>
        <a href="#" className='footer__logo'>Harley G.V</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/harley-enrique-guerra-vergara-70b77b173/" target='_blank'><FaLinkedinIn /></a>
            <a href="https://github.com/Harley-gv" target='_blank'><FaGithub /></a>
        </div>

        <div className="footer__copyright">
            <small> made by Harley Guerra student of academlo.</small>
        </div>
       </footer>
    );
};

export default Footer;