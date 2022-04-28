import React from 'react';
import form from '../assets/sampleform.png'
import conditional from '../assets/Gifs/dessert_conditional.gif'
import email from '../assets/Gifs/email_example.gif'
import usernameAsync from '../assets/Gifs/username_async.gif'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Start () {

  return(
    <div id="start">
      <div id="title" className="start-item">FEATURE</div>
      <div className="start-item"> 
        <div className="start-item-list">Performant and fully customizable inputs with built-in data validation</div>
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true" duration="2">
          <img className="animation-img feature-img" src={email} width="500" />
        </AnimationOnScroll>
      </div>
      <div className="start-item"> 
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true" duration="2">
          <img className="animation-img feature-img" src={conditional} width="500" />
        </AnimationOnScroll>
        <div className="start-item-list">Easily build conditional fields that render based on dependent input</div>
      </div>
      <div className="start-item"> 
        <div className="start-item-list">Handle asynchronous data with validation on input </div>
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true" duration="2">
          <img className="animation-img feature-img" src={usernameAsync} width="500" />
        </AnimationOnScroll>
      </div>

    </div>
  )
}

export default Start;