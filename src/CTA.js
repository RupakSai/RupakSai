import React from 'react'
import Resume from './assets/Resume.docx'
import './Header.css'

function CTA(){
    return(
        <div className='CTA'>
            <a href="#" target='_blank' className='btn'  data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">My Resume</a>
            <a href="#contact" className='btn'  data-aos="fade-left" data-aos-duration="700" data-aos-delay="400">Connect</a>
        </div>
    )
}
export default CTA