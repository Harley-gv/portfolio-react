import React from 'react';
import './about.css'
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/img/me-about.jpg'
import About from '../../assets/data/about.data'

const about = () => {
    return (
        <section id='about'>
            <h5>conoce un poco</h5>
            <h2>Sobre Mi</h2>

            <div className="container about___container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about picture" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        {
                            About.map(card => (
                                <div>
                                    <article className='about__card'>
                                        <FaAward className='about__icon' />
                                         <h5>Estudios</h5>
                                        <small>{card.description} - {card.institute}</small>
                                    </article>
                                </div>

                            ))
                        }

                    </div>

                    <p>Soy Harley Guerra, Técnico en Sistemas y Desarrollador Web Full Stack, egresado del programa Full-Stack Web Development and Computer Science en Academlo. Cuento con más de 2 años de experiencia profesional en el desarrollo de aplicaciones web, participando activamente en proyectos desde el frontend con HTML, CSS, JavaScript y React.js, hasta el backend con Node.js, Express, PostgreSQL.</p>

                    <a href="#contact" className='btn btn-primary'>Hablemos</a>
                </div>
            </div>
        </section>

    );
};

export default about;