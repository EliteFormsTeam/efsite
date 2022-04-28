import React from 'react';
import form from '../assets/sampleform.png'
import install from '../assets/install-elite-forms.png'
import download from '../assets/import-elite-forms.png'
import code from '../assets/start-code.png'
import result from '../assets/start-result.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Features () {
  return(
    <div id="features">
      <div className="features-item" id="title">START USING</div>
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true" duration="2">
        <div className="features-item">
          <div className="start-column">
            <img className="features-list animation-img" src={install} width="350" />
            <img className="features-list animation-img" src={download} width="300" />
            <h2>Install and import into your project</h2>
          </div>
          <div className="start-column">
            <img className="features-list animation-img" src={code} width="300" />
            <h2>Write simple and declaritive code</h2>
          </div>
          <div className="start-column">
            <img className="features-list animation-img" src={result} width="300" />
            <h2>Create smart and powerful forms</h2>  
          </div>   
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default Features;