import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
// import './index.css'

function HeaderSocial() {
  return (
    <div className='headerSocial' data-aos="fade-up">
        <a href="https://www.linkedin.com/in/rupak-sai-2168b6261/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/s_rupak79/" target='_blank'><BsInstagram/></a>
    </div>
  )
}
export default HeaderSocial