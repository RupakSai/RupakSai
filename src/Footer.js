import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerDiv'>
      <div className='fDiv1' data-aos="fade-up" data-aos-duration="1000">
        <h1>Rupak Sai</h1>
      </div>
      <div className='fDiv2'>
        <li><a href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Home</a></li>
        <li><a href="#about" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">About</a></li>
        <li><a href="#services" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Services</a></li>
        <li><a href="#experience" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Experience</a></li>
        <li><a href="#portfolio" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">Portfolio</a></li>
        <li><a href="#contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Contact</a></li>
      </div>
      <div className='fDiv3'></div>
    </div>
  )
}
export default Footer