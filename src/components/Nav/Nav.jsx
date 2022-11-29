import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdPhoneInTalk} from 'react-icons/md'
import {FaProjectDiagram} from 'react-icons/fa'
import {MdCastForEducation} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
    <a href="#" onClick={()=> setActiveNav('#')}  className={activeNav ==='#' ? 'active': ''}><AiOutlineHome/></a>
    <a href="#About" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active': ''} ><AiOutlineUser/></a>
    <a href="#Education" onClick={()=> setActiveNav('#Education')} className={activeNav ==='#Education' ? 'active': ''} ><MdCastForEducation/></a>
    <a href="#Project" onClick={()=> setActiveNav('#Project')} className={activeNav ==='#Project' ? 'active': ''} ><FaProjectDiagram/></a>
    <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav ==='#Contact' ? 'active': ''} ><MdPhoneInTalk/></a>
    </nav>
  )
}

export default Nav