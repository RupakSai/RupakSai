import React from 'react'
import './Header.css'
import './CTA'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className='container headerContainer'>
        <h3 className='animH1'  data-aos="fade-down" data-aos-duration="700">Hello there,</h3>
        <div className='animH'  data-aos="fade-down" data-aos-duration="700" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}><h4>I am </h4><h1>Rupak Sai</h1></div>
        <h4 className='textLight animH2'  data-aos="fade-down" data-aos-duration="700">
          Fullstack Developer
        </h4>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
      </div>
    </header>
  )
}
export default Header