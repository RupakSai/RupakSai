import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <div className='expDiv'>
        <div className='expDiv1' data-aos="fade-down" data-aos-duration="1000">
          <h5 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">About my</h5>
          <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">Work Experience</h1>
        </div>
        <div className='expDiv2'>
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <h3>Front End</h3>
            <h4> <p><BsPatchCheckFill/></p> HTML <p style={{fontSize:'12px', color:'#0FFF50'}}>Experienced</p></h4>
            <h4> <p><BsPatchCheckFill/></p> CSS <p style={{fontSize:'12px', color:'#0FFF50'}}>Experienced</p></h4>
            <h4> <p><BsPatchCheckFill/></p> JavaScript <p style={{fontSize:'12px', color:'#0FFF50'}}>Experienced</p></h4>
            <h4> <p><BsPatchCheckFill/></p> ReactJS <p style={{fontSize:'12px', color:'#0FFF50'}}>Intermediate</p></h4>
            <h4> <p><BsPatchCheckFill/></p> Bootstrap <p style={{fontSize:'12px', color:'#0FFF50'}}>Intermediate</p></h4>
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1000">
            <h3>Back End</h3>
            <h4> <p><BsPatchCheckFill/></p> Python <p style={{fontSize:'12px', color:'#0FFF50'}}>Experienced</p></h4>
            <h4> <p><BsPatchCheckFill/></p> NodeJS <p style={{fontSize:'12px', color:'#0FFF50'}}>Intermediate</p></h4>
            <h4> <p><BsPatchCheckFill/></p> PHP <p style={{fontSize:'12px', color:'#0FFF50'}}>Intermediate</p></h4>
            <h4> <p><BsPatchCheckFill/></p> MongoDB <p style={{fontSize:'12px', color:'#0FFF50'}}>Experienced</p></h4>
            <h4> <p><BsPatchCheckFill/></p> MySQL <p style={{fontSize:'12px', color:'#0FFF50'}}>Experienced</p></h4>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Experience