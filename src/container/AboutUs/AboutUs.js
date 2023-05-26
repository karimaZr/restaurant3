import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import { SubHeading } from '../../components';


const AboutUs = () => (

  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="header img" />

    </div>
    <div className='app__aboutus-content_about'>
      
      <h1 className='headtext__cormorant'>A propos de  nous</h1>
      <p className='p__opensans'>Notre application a été créée dans le but de simplifier la recherche de restaurants et de faciliter la prise de décision pour les utilisateurs.
        Notre objectif est de fournir une solution pratique et efficace pour aider les gens à trouver des restaurants qui répondent à leurs préférences et à leurs besoins.
        Notre équipe est composée de professionnels passionnés par la technologie et la gastronomie.
        Nous sommes engagés à fournir une application conviviale et intuitive qui offre une expérience utilisateur exceptionnelle.
        Nous sommes fiers de notre application et nous sommes impatients de travailler avec vous pour atteindre nos objectifs.
        Contactez-nous dès aujourd'hui pour en savoir plus sur notre application et comment nous pouvons vous aider à trouver les meilleurs restaurants dans votre région.</p>
    </div>
    
  </div>


);

export default AboutUs;
