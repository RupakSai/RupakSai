import React from 'react'
import './Portfolio.css'
import CodePic from './assets/CodePic.avif'

function Portfolio() {
  const data = [
    {
      id: 1,
      image: CodePic,
      title:'My Portfolio website',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 2,
      image: CodePic,
      title:'iTechnoz club website',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 3,
      image: CodePic,
      title:'Amazon clone project',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 4,
      image: CodePic,
      title:'Daksha Event website',
      github: 'https://github.com',
      demo: '#'
    },
  ]
  return (
    <section id='portfolio'>
      <div className='mainPF'>
        <div className='mainPFT' data-aos="fade-down" data-aos-duration="1000">
          <h5 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">Check out</h5>
          <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">My recent Projects</h1>
        </div>
        <div className='cardsPF'>
            {
              data.map(({id, image, title, github, demo}) => {
                return(
                  <div className='cardPF' key={id} data-aos="flip-up" data-aos-duration="1000">
            <img src={image} alt="" />
              <h3>{title}</h3>
              <a href={github} className='btnn' target='_blank'>GitHub</a> 
              <a href={demo} className='btnn' target='_blank'>Demo</a>
            </div>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}
export default Portfolio