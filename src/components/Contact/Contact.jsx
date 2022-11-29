import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons//md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons//bs'
const Contact = () => {
  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='cointainer contact__container'>
        <div className='contact__options'>
        </div>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kbalji15j@gmail.com</h5>
          <a href ="mailto:kbalaji15j@gmail.com" target="_blank">Send a Message</a>

        </article>
        <article className='contact__option'>
          <BsInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>sleepy fellow_91221</h5>
          <a href ="msgto:https://www.instagram.com/sleepy_fellow_91221/" target="_blank">Send a Message</a>

        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9398806613</h5>
          <a href ="https://api.whatsapp.com/send?phone=+919398806613" target="_blank">Send a Message</a>

        </article>
          <form action="">
            <input type="text" name="name" placeholder='your full name' required/>
            <input type="email" name="email" placeholder='Email' required/>
            <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className='btn  btn-primary'> Send Messsage</button>


          </form>
      </div>
    </section>
  )
}

export default Contact