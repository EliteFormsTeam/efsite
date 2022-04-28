import React from 'react';
import github from '../assets/github.png';
import twitter from '../assets/twitter.png';
import vs from '../assets/vs.png'
import logo from '../assets/elite-forms-logo.png'

function Footer () {
  return(

    <div id="footer">
      <div id="footer-main">
        <div id="links">
          <div id="links-logo">
            <img src={logo} height="100px" />
          </div>
          <div id="links-items">
            <a href="https://github.com/"> <img src={github} height="30px"/></a>
            <a href="https://twitter.com/"><img src={twitter} height="30px"/></a>
            <a href="https://visualstudio.microsoft.com/"> <img src={vs} height="30px"/></a>
          </div>
        </div>
        <div className="footer-item">
          QUICK LINKS
          <a className="footer-list" href="https://www.freeprivacypolicy.com/live/ff558616-160c-4281-a044-d85018c4cd25">Privacy Policy</a>
        </div>
        <div className="footer-item">
          CONTACT
          <div className="footer-list">contact@apes.io</div>
        </div>
      </div>
    </div>

  )
}

export default Footer;