import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {BsCodeSquare} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import { useState } from 'react'
function Nav() {
  window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    const a1 = document.querySelector('#a1');
    const a2 = document.querySelector('#a2');
    const a3 = document.querySelector('#a3');
    const a4 = document.querySelector('#a4');
    const a5 = document.querySelector('#a5');
    if(scrolled>=0){
      a1.classList.add("active");
      a2.classList.remove("active");
      a3.classList.remove("active");
      a4.classList.remove("active");
      a5.classList.remove("active");
    }
    if(scrolled>=338){
      a2.classList.add("active");
      a1.classList.remove("active");
      a3.classList.remove("active");
      a4.classList.remove("active");
      a5.classList.remove("active");
    }
    if(scrolled>=1114){
      a3.classList.add("active");
      a1.classList.remove("active");
      a2.classList.remove("active");
      a4.classList.remove("active");
      a5.classList.remove("active");
      
    }
    if(scrolled>=1859){
      a4.classList.add("active");
      a1.classList.remove("active");
      a2.classList.remove("active");
      a3.classList.remove("active");
      a5.classList.remove("active");
    }
    if(scrolled>=3349){
      a5.classList.add("active");
      a1.classList.remove("active");
      a2.classList.remove("active");
      a3.classList.remove("active");
      a4.classList.remove("active");
    }
  });
  const [activeNav, setActiveNav] = useState('');
  return (
    <nav data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
      <a href="#" id='a1' style={{transition:'0.5s ease'}} onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" id='a2' style={{transition:'0.5s ease'}} onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><AiOutlineUser></AiOutlineUser></a>
      <a href="#experience" id='a3' style={{transition:'0.5s ease'}} onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><BsCodeSquare></BsCodeSquare></a>
      <a href="#services" id='a4' style={{transition:'0.5s ease'}} onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} data-aos="fade-up-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><FaRegHandshake></FaRegHandshake></a>
      <a href="#contact" id='a5' style={{transition:'0.5s ease'}} onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} data-aos="fade-up-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><AiOutlineMessage></AiOutlineMessage></a>
    </nav>
  )
}
export default Nav