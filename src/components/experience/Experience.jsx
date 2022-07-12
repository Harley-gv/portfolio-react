import React from 'react';
import Frontend from '../../assets/data/frontend.data'
import Backend from '../../assets/data/backend.data'
import './experience.css'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Skills</h3>
                    <div className="experience__content">
                        {
                            Frontend.map(front=> (
                                <article className='experience__details' key={front.id}>
                                    {front.icon}
                                    <h4>{front.name}</h4>

                                </article>
                            ))
                        }
                    </div>


                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {
                            Backend.map(back => (
                                <article className='experience__details' key={back.id}>
                                    {back.icon}
                                    <h4>{back.name}</h4>

                                </article>
                            ))
                        }

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;