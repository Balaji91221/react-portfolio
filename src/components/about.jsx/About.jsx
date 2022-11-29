import React from 'react'
import './About.css'
import {FaHtml5} from 'react-icons//fa'
import {FaCss3Alt} from 'react-icons//fa'
import {SiJavascript} from 'react-icons//si'
import {FaReact} from 'react-icons//fa'
import {SiFirebase} from 'react-icons//si'
import {FaPython} from 'react-icons//fa'
import {FaJava} from 'react-icons//fa'

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='cointainer about_cointainer'>
        <div className="about__me">
          <div className="about__me-image">
           
          </div>
        </div>
      </div>
           
   
         
        <p > I am sophomore studying in VIT-AP,Amaravti purusing Btech in Computer science.
           A self proclaimed Junior Dev,and passionate to learn new things from technologies
        </p>
        <h5>Skills</h5>
        <div className='pill-container'>
        <a href='https://www.html.com' ><FaHtml5  fill="#ff8c00" size="60px" /></a>
        <a href='https://www.css.com' ><FaCss3Alt color="blue" size="60px"/></a>
        <a href='https://www.javascript.com' ><SiJavascript  color="Yellow" size="60px"/></a>
        <a href='https://www.react.com' ><FaReact  color="#f0f8ff" size="60px"/></a>
        <a href='https://www.firebase.com' ><SiFirebase  color="#FFCA28" size="60px"/></a>
        <a href='https://www.python.com' ><FaPython  color="#4B8BBE" size="60px"/></a>
        <a href='https://www.java.com' ><FaJava  color="#f89820 " size="60px"/></a>
        </div>
        
      
        
       
    
      
    </section>
  )
}

export default About