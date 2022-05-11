import React from 'react';
import Header from './header';
import Footer from './footer';
import Features from './features';
import Landing from './landing';
import Start from './start';
import Team from './team';
import { HashLink } from 'react-router-hash-link'


function Everything () {
  return (
    <div>
      <Header/>
      <Landing/>
      <div id="first">
        <Features/>
      </div>
      <div id="second">
        <Start/>
      </div>
      <div id="third">
        <Team/>
      </div>
      <div id="fourth">
        <Footer/>
      </div>
    </div>
  )
}

export default Everything;