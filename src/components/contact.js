import React from 'react';
import github from '../assets/github.png'
import linkedin from '../assets/linked-in.png'

function Contact (props) {

  //props = ammar image, name = ammar doo, gh href, linkedin href
  return(
    <div className="contact-container">
      <div className="contact-item">
        <img src={props.info.image} height="150px" className="contact-image" />
      </div>
      <div className="contact-item contact-name" c>
        <div>{props.info.name}</div>
      </div>
      <div className="contact-item">
        <div>Software Engineer</div>
      </div>
      <div className="contact-item contact-links">
        <a className="contact-links-item" href={props.info.gh}> <img src={github} height="40px"/></a>
        <a className="contact-links-item" href={props.info.linkedin}><img src={linkedin} height="40px"/></a>
      </div>
    </div>
  )
}

export default Contact;