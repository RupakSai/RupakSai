import React, {useRef} from 'react'
import './Contact.css'
import {BiMailSend} from 'react-icons/bi'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xy42cv2', 'template_j7iviab', form.current, 'AqJny55V0V7pXWRAN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <div className='conDiv' data-aos="fade-down" data-aos-duration="1000">
        <h5 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">Get in Touch</h5>
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">Contact Me</h1>
      </div>
      <div className='conDiv2'>
        <div className='subCon'>
          <div data-aos="fade-right" data-aos-duration="700">
            <BiMailSend/>
            <p>rupaksai2809@gmail.com</p>
            <a href="mailto:rupaksai2809@gmail.com">Send an email</a>
          </div>
          <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
            <BsLinkedin/>
            <p>Rupak Sai</p>
            <a href="https://www.linkedin.com/in/rupak-sai-2168b6261/">Connect with me</a>
          </div>
          <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
            <BsInstagram/>
            <p>s_rupak79</p>
            <a href="https://www.instagram.com/s_rupak79/">Follow</a>
          </div>
        </div>
        <div className='subCon2'>
          <form ref={form} onSubmit={sendEmail}>
          <input className='inp' placeholder='Enter your name' name='name' type="text" required  data-aos="fade-left" data-aos-duration="700"/>
          <input className='inp' placeholder='Enter your email' name='email' type="text" required  data-aos="fade-left" data-aos-duration="700" data-aos-delay="100"/>
          <input className='inp2' placeholder='Enter your message' name='message' type="text" required  data-aos="fade-left" data-aos-duration="700" data-aos-delay="200"/>
          <button className='btn btbtn' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">Contact</button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact