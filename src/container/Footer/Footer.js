import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import images from '../../constants/images';

const Footer = () => (
  <div className='app__footer section__padding' id="contact">
    <div className='app__footer-links'>
      <div className='app-footer-links_contact'>
        <h1 className='app__footer-headtext'>Contactez nous</h1>
        <p className='p__opensans'>Email:NEAR@info_gmail.com</p>
        <p className='p__opensans'> +212-674378874</p>
        <p className='p__opensans'>+212-674378874</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>"Votre confort est notre priorité"</p>
        <img src={images.spoon} alt="spoon" className='spoon_img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <a href='https://web.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FiFacebook />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FiInstagram />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
            <FiTwitter />
          </a>
        </div>
      </div>
      <div className='app__footer-links_work'></div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>&copy;2023 NEAR.All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
