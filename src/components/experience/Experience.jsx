import React from 'react';
import { AiOutlineHtml5, AiOutlineConsoleSql, AiOutlineCodeSandbox } from 'react-icons/ai'
import { SiCsswizardry, SiJavascript, SiReact, SiPython } from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import './experience.css'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>Skills With Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            <AiOutlineHtml5 />
                            <h4>HTML</h4>
                          
                        </article>

                        <article className='experience__details'>
                            <SiCsswizardry />
                            <h4>CSS</h4>
                            
                        </article>

                        <article className='experience__details'>
                            <SiJavascript />
                            <h4>Javascript</h4>
                            
                        </article>

                        <article className='experience__details'>
                            <SiReact />
                            <h4>React</h4>
                           
                        </article>
                    </div>


                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaNode />
                            <h4>Node.js</h4>
                            
                        </article>

                        <article className='experience__details'>
                            <AiOutlineConsoleSql />
                            <h4>SQL</h4>
                           
                        </article>

                        <article className='experience__details'>
                            <SiPython />
                            <h4>Python</h4>
                            
                        </article>

                        <article className='experience__details'>
                            <AiOutlineCodeSandbox />
                            <h4>Algoritmos</h4>
                           
                        </article>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;