import React, { useRef }  from 'react';
import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_1w8ovwq', 'template_jpb9nw6', form.current, '7OintB97h8xlf3rWT')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
         e.target.reset()
        
      };

    return (
        <section id='contact'>
            <h5>Ponerse en</h5>
            <h2>Contacto</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>harleyguerra.dev@gmail.com</h5>
                        <a href="mailto:harleyguerra.dev@gmail.com">Enviar Mensaje</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlineWhatsApp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+57 3005935898</h5>
                        <a href="https://wa.me/+573113740130">Enviar Mensaje</a>
                    </article>

                    <article className="contact__option">
                        <BsTelephone className='contact__option-icon' />
                        <h4>Llámame</h4>
                        <h5>+57 3005935898</h5>
                    </article>

                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nombre Completo' required />
                    <input type="email" name='email' placeholder='Correo Electrónico' required />
                    <textarea name="message" rows="7" placeholder='Mensaje' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;