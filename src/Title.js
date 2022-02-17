// src/Title.js

import React from 'react'
import './Title.css';
import mainKrishanFondsLogo from './krishanfonds LIGHTMODE.png'
function Title() {
  return (
    <div className="Title">
      <h1><img src={mainKrishanFondsLogo} alt="mainlogo" width="200" height="200"/> Welcome to Krishanfonds webpage!</h1>
        <div className="Title-Subtitle">Test successful, Last updated: 17/02/2022 11:46</div>
    </div>
  )
}

export default Title