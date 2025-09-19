import React from 'react';
import Frontend from '../../assets/data/frontend.data'
import Backend from '../../assets/data/backend.data'
import cloud from '../../assets/data/cloud.data';
import './experience.css'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>que habilidades tengo</h5>
            <h2>Habilidades</h2> 
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend</h3>
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
                    <h3>Backend</h3>
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

                <div className="experience__cloud">
                    <h3>cloud</h3>
                    <div className="experience__content">
                        {
                            cloud.map(cloud=> (
                                <article className='experience__details' key={cloud.id}>
                                    {cloud.icon}
                                    <h4>{cloud.name}</h4>

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