import React from 'react';
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/elite-forms-logo.png'

function Header () {
  return (
    <div id="header">
      <div id="logo">
        <HashLink smooth to="#top" className="menu-name">
          <img src={logo} height="70px" />
        </HashLink>
      </div>
      <div id="menu">
        <div className="menu-items">
          <HashLink smooth to={'/#first'} className="menu-name">START</HashLink>
        </div>
        <div className="separator">|</div>
        <div className="menu-items">
          <HashLink smooth to={'/#second'} className="menu-name">FEATURES</HashLink>
        </div>
        <div className="separator">|</div>
        <div className="menu-items">
          <HashLink smooth to={'/#third'} className="menu-name">OUR TEAM</HashLink>
        </div>
        <div className="separator">|</div>
        <div className="menu-items">
          <a className="menu-name" href="../../public/docs.html">DOCUMENTATION</a>
        </div>        
        <div className="separator">|</div>
        <div className="menu-items">
          <HashLink smooth to={'/#fourth'} className="menu-name">CONTACT</HashLink>
        </div>
      </div>
    </div>
  )
}

export default Header;