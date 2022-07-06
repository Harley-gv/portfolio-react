import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
    return (
     <div className="header__socials">
        <a href="https://www.linkedin.com/in/harley-enrique-guerra-vergara-70b77b173/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Harley-gv" target='_blank'><BsGithub /></a>
     </div>
    );
};

export default HeaderSocial;