import React from 'react';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import './footer.css'
import Permalink from '../../assets/data/footer.data'


const Footer = () => {
    return (
       <footer>
        <a href="#" className='footer__logo'>Harley G.V</a>

        <ul className="permalinks">

            {
                Permalink.map(link => (
                    <li key={link.id}><a href={link.link}>{link.name}</a></li>
                ))
            }
        </ul>

        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/harley-enrique-guerra-vergara-70b77b173/" target='_blank'><FaLinkedinIn /></a>
            <a href="https://github.com/Harley-gv" target='_blank'><FaGithub /></a>
        </div>

        <div className="footer__copyright">
            <small> Harley Guerra Vergara.<br/>Academlo Student</small>
        </div>
       </footer>
    );
};

export default Footer;