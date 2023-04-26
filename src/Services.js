import React from 'react'
import './Services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function Services() {
  return (
    <section id='services'>
      <div className='servDiv'>
        <div className='servTDiv' data-aos="zoom-out-right" data-aos-duration="1000"><h1>Services</h1></div>
        <div className='serDiv1' data-aos="fade-left" data-aos-duration="1000">
          <span>Full time</span>
          <li><AiOutlineCheckCircle/>Front End development</li>
          <li><AiOutlineCheckCircle/>Back end development</li>
          <li><AiOutlineCheckCircle/>Flutter(basic)</li>
        </div>
        <div className='serDiv1' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <span>Part time</span>
          <li><AiOutlineCheckCircle/>Video Editor</li>
          <li><AiOutlineCheckCircle/>Picture Editor</li>
          <li><AiOutlineCheckCircle/>Photography</li>
        </div>
      </div>
    </section>
  )
}
export default Services