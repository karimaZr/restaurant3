import React ,{useState}from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { Routes, Route, a } from "react-router-dom";


const Navbar = () => {
  const[toggleMenu,setToggleMenu]=React.useState(false);
  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href='#home'>Accueil</a></li>
      <li className="p__opensans"><a href='#about'>A propos</a></li>
      <li className="p__opensans"><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login'  className="p__opensans" >Connexion/Enregistrer</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide_bottom '>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
        <ul className='app__navbar-smallscreen-links'>
          <li className="p__opensans"><a href="#home">Accueil</a></li>
          <li className="p__opensans"><a href="#about">A propos</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      )}
      

    </div>





  </nav>)
}

export default Navbar;
