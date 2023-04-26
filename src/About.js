import React from 'react'
import './About.css'
import CodePic from './assets/CodePic.avif'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsAward} from 'react-icons/bs'
function About() {
  return (
    <section id='about'>
      <div className='titleAbout' data-aos="fade-down" data-aos-duration="1000">
      <h5 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">Get to know</h5>
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">About Me</h1>
      </div>
      <div className='mainAbout'>
        <img src={CodePic} alt="" data-aos="zoom-out" data-aos-duration="1000" />
        <div className='expAbout'>
          <div className='eAb' style={{color:'#0FFF50'}} data-aos="flip-right" data-aos-duration="1000">
          <VscFolderLibrary/>
          <br/>
          <h5 style={{color:'white'}}>Projects</h5>
          </div>
          <div className='eAb' style={{color:'#0FFF50'}} data-aos="flip-left" data-aos-duration="1000">
            <BsAward/>
            <br/>
            <h5 style={{color:'white'}}>Experience</h5>
          </div>
          <div className='eAb2' data-aos="fade-up" data-aos-duration="1000">
            <p>I am a freelancing full stack developer working with technologies like ReactJS, HTML, CSS, Python(Web development), Node JS, MongoDB, JavaScript(Front End), Flutter. You can check out my projects in projects section. Contact me for collaboration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About