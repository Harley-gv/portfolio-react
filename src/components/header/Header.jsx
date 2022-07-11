import React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Harley Guerra</h1>
                <h5 className="text-ligth">
                Full-Stack Web Programming Student at Academlo
                </h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="harley picture"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;