import React from 'react';
import github from '../assets/github.png';
import logo from '../assets/elite-forms-logo.png'

function Footer () {
  return(

    <div id="footer">
      <div id="footer-main">
        <div id="links">
          <div id="links-logo">
            <img src={logo} height="100px" />
          </div>
        </div>
        <div className="footer-item">
          QUICK LINKS
          <a className="footer-list" href="https://www.freeprivacypolicy.com/live/a55e5ffc-c48d-4ec0-b181-7aa3ee3c47a2">Privacy Policy</a>
          <a href="https://github.com/"> <img src={github} height="30px"/></a>
        </div>
        <div className="footer-item">
          CONTACT
          <div className="footer-list">424.526.6883</div>
          <div className="footer-list">200 Spectrum Center Drive, Irvine, CA</div>
        </div>
      </div>
    </div>

  )
}

export default Footer;