import React from 'react';
import form from '../assets/landing-form.png' 
import github from '../assets/github-button.png'  
import npmCarrot from '../assets/npm-carrot.png' 
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Landing () {
  return(
    <div id="landing">
      <div id="landing-item">
        <div id="landing-item-text">
        <strong>E<span id='pop'>lit</span>eForms</strong><br></br>
         A robust form library for Lit that enriches input components with easy-to-use data validation features
        </div>
        <div id="button-container">
          <div className="button" id="button-left">
            <a className="button-link" href="https://github.com/oslabs-beta/EliteForms"> <img id="button-gh" src={github} height="25"></img> Contribute</a>
          </div>
          <div className="button" id="button-right"> <a className="button-link" href="https://www.npmjs.com/package/elite-forms"><img id="button-npm" src={npmCarrot} height="20"></img> npm i elite-forms</a></div>
        </div>
      </div>
      <div className="landing-item">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" duration="2">
          <img className="animation-img" src={form} width="400"/>
        </AnimationOnScroll>
      </div>
    </div>
  )
}


export default Landing;