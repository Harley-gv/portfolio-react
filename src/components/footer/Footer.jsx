import React from 'react';
import './footer.css'
import Permalink from '../../assets/data/footer.data'
import icon from '../../assets/data/footerIcon.data'



const Footer = () => {
    return (
       <footer>
        <a href="#" className='footer__logo'>Harley G.V</a>

        <ul className="permalinks">

            {
                Permalink.map(link => (
                    <li key={link.id}><a href={link.link}>{link.name}</a></li>
                ))
            }
        </ul>

        <div className="footer__socials">
              {icon.map(icon => (
                  <a href={icon.url} target='_blank' key={icon.id}>{icon.icon}</a>
              ))}   
        </div>

        <div className="footer__copyright">
            <small> Harley Enrique Guerra Vergara </small>
        </div>
       </footer>
    );
};

export default Footer;