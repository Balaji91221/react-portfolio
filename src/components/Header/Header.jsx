import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import CTA from './CTA';
import './Header.css'

import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="cointainer header__cointainer">
        <h5>Hi ,there!</h5>
        <h1>This is Balaji</h1>
        <h5 className="text-light" style={{paddingTop:'1rem',margin:'auto 0'}}>
          I'm a
          <span style={{color:'Yellow',fontweight:'bold',marginLeft:'10px'}}>
            <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Student','Developer','Photographer']}
            />
          </span>
         </h5>

        <CTA />
        
        <HeaderSocial/>
        
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

        
        


export default Header