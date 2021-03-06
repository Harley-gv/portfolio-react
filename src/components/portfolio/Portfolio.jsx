import React from 'react';
import Projects from '../../assets/data/portfolio.data'

import './portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Mi trabajo reciente</h5>
            <h2>Portafolio</h2>
            <div className="container portfolio__container">

                {Projects.map(project => (
                    <article className='portfolio__item' key={project.id}>
                        <div className="portfolio__item-image">
                            <img src={project.img} alt="portfolio image" />
                        </div>
                        <h3>{project.name}</h3>
                        <h3>{project.description}</h3>
                        <div className="portfolio__item-cta">
                            <a href={project.github} className='btn' target='_blank'>Github</a>
                            <a href={project.demo} className='btn btn-primary' target='_blank'>Demo</a>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    );
};

export default Portfolio;