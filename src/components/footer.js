//import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Emailer from './emailer'

const Footer = ({ siteTitle, siteDescription }) => (
  <div>
  <section>
  <div className="footer" >
    <div className="container animated notransition">
      <div className="row">
        <div className="col-md-6">
        <a href="#homefooter"></a>
          <h1 className="title"><span className="colortext">L</span>uke&nbsp;<span className="colortext">D</span>ohner</h1>
          <p>
             Front End development and design
          </p>
          <p>
             HTML, CSS, JavaScript, Node.js, Gatsby.js, React.js, Frameworks.
          </p>
          <p>
             This site made with Gatsby and React &nbsp;<i className="icon-hand-up"></i>&nbsp; by LD.
          </p>
          <h1 className="title"><span className="colortext">H</span>ere <span className="font100">I am</span></h1>
          <div className="footermap">
            <p>
              <strong>Address: </strong>  New York City, Lower East Side
            </p>
            
            <p>
              <strong>Email: </strong> lukedohner@gmail.com
            </p>
            <p>
              <strong>Resume as word doc: </strong> <a href="http://www.lukedohner.com/downloads/LukeDohner.docx">Download word doc</a>
            </p>
            <p>
              <strong>Resume as PDF: </strong> <a href="http://www.lukedohner.com/downloads/Luke_Dohner.pdf">Download PDF</a>
            </p>
            <ul className="social-icons list-soc">
              <li><a href="http://www.linkedin.com/pub/luke-dohner/1/7ba/476/"><i className="icon-linkedin"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <h1 className="title"><span className="colortext">Q</span>uick <span className="font100">Message</span></h1>
         
          <Emailer />
                      
        </div>
      </div>
    </div>
  </div>
  <p id="back-top">
    <a href="#top"><span></span></a>
  </p>
    

  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p className="pull-left">
             Luke Dohner {new Date().getFullYear()}, built with 
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby.js</a> React, JAMStack.  
         
        </p>
        </div>
        <div className="col-md-8">
          <ul className="footermenu pull-right">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </section>
  

<div>
  <div
    style={{
      background: `#8e92b5`,
      marginBottom: `1.45rem`,
    }}
  >
   
  </div>
</div>
</div>
)


Footer.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Footer