import React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img/me.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola, Soy </h5>
                <h1>Harley Guerra</h1>
                <h5 className="text-ligth">
                    Desarrollador Web
                </h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="harley picture" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;