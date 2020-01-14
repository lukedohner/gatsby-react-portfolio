/* eslint-disable */
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import '../styles/bootstrap.css'


import '../styles/layout.css'


import '../styles/style.css'
import '../styles/skin-green.css'

 

const Whatisay = ({ siteTitle}) => (
  <div>
    <section className="home-features topspace30">
    <div className="container animated notransition">
      <h1 className="small text-center">Here's what I say</h1>
      <div className="br-hr type_short">
        <span className="br-hr-h">
        <i className="icon-pencil"></i>
        </span>
      </div>
      <div id="cbp-qtrotator" className="cbp-qtrotator">
        <div className="cbp-qtcontent">   
          <blockquote>
            <p className="bigquote">
              <i className="icon-quote-left colortext quoteicon"></i> During the past 10 years I've worked the following areas:
Front End Development: HTML5, CSS, JavaScript libraries, jQuery, bootstrap, greensock, PHP, WordPress, scripted animation, banners, games and quizzes. Flash, actionScript 2 and 3, Rich media traffic platforms. Design: Art Direction, UI, banners, demos, pitches, animation, audio, video and photography.
Content: Direct consumer, rich media, education, demos, healthcare and financial. <i className="icon-quote-right colortext quoteicon"></i>
            </p>

            <h1 className="small text-center grey-text">&#8212; Luke Dohner / owner, lukedohner.com>
            <div className="portrait-ld"></div></h1>
            
          </blockquote>
        </div>

      </div>
      <br />
      
     
    </div>
    </section>
  </div>
)


export default Whatisay