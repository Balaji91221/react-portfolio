import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kelavath-balaji-naik-9952761a7/' target="__blank"><BsLinkedin color="#0072b1" /></a>
        <a href='https://github.com/Balaji91221' target="__blank"><BsGithub color="#ffff" /></a>
        <a href='https://www.instagram.com/sleepy_fellow_91221/' target="__blank"><BsInstagram fill='#e4717a'/></a>
    </div>
  )
}

export default HeaderSocial