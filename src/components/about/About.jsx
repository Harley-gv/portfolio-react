import React from 'react';
import { FaAward } from 'react-icons/fa'
import './about.css'
import ME from '../../assets/me-about.jpg'

const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about___container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about picture" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Education</h5>
                            <small>Student - Academlo, Full Stack Web Development</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Education</h5>
                            <small>Graduate - Censa, system technique</small>
                        </article>

                        {/* <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>My projects</h5>
                            <small>Projects done in academlo</small>
                        </article> */}
                    </div>

                    <p>I am a Full-Stack Web programming student at Academlo, in my current career at Academlo I have worked on projects with HTML, CSS, JavaScript, React.js and I am currently studying the backend module with Node.js, I am always willing to learn and continue expanding my knowledge in this wonderful world of web programming </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>

    );
};

export default about;