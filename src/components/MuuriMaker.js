import React, { Component } from 'react'
import MuuriGrid from 'react-muuri';
//import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Link } from 'gatsby'
// eslint-disable-next-line
import PropTypes from 'prop-types'
// eslint-disable-next-line
import { StaticQuery, graphql } from 'gatsby'

import '../styles/bootstrap.css'

import '../styles/layout.css'
import '../styles/custom.css'
import '../styles/gridisotope.css'
import '../styles/style.css'
import '../styles/skin-green.css'
import '../styles/muurigrid.css'
 
class MuuriMaker extends Component {
  constructor () {
    super();
    this.gridElement = React.createRef();
    this.removeElement = this.removeElement.bind(this);
  }
 
  componentDidMount () {
    console.log("componentDidMount () {");

    this.grid = new MuuriGrid({
      node: this.gridElement,
      layoutDuration: 2000,
      defaultOptions: {
      dragEnabled: false,
      layout: {
      fillGaps: true
  }  // See Muuri's documentation for other option overrides.
      },
    });

 
    // An example of how to use `getEvent()` to make `synchronize()` update the grid.
    this.grid.getEvent('dragEnd');
  }
 
  componentWillUnmount () {
    this.grid.getMethod('destroy'); // Required: Destroy the grid when the component is unmounted.
  }
 
  removeElement () {
    // An example of how to use `getMethod()` to remove an element from the grid.
    if (this.gridElement && this.gridElement.children.length) {
      this.grid.getMethod('remove', this.gridElement.children[0], {removeElements: true});
    }
  }


  render () {

    return (
      <div className="work-section" >

        <div>
          {/* Assign a ref to the grid container so the virtual DOM will ignore it for now (WIP). */}
          <div ref={gridElement => this.gridElement = gridElement}>

            {/* Required: `item` and `item-content` classNames */}
            <div className="item-ld">
              <div className="item-content">

              {/* square */}
                <div className="grid-item">
                
                
                <div className="hovereffect md-sq">
                  <div className="arrowoverlay"><h5>view</h5></div>
                  <div className="plusoverlay"></div>

                  <div className="dell-tech"></div>

                  <div className="md-sq-img"></div>
                  <div className="overlay">
                    <h2>Dell Tech</h2>
                    <hr/>
                    <h5>Dell Technologies, corporate site</h5>
                    {/*</AniLink> className={`info`}  paintDrip to="/DellTech" duration={1} hex="#ffffff"></AniLink>*/} 
                    <a className="info" href="https://www.delltechnologies.com/en-us/index.htm" >fpo1</a>

                  </div>
                  

                 </div>
              </div>
               
              </div>
            </div>


             <div className="item-ld">
              <div className="item-content">
              {/* square */}
                <div className="grid-item"  id="griditem4">
                <div className="hovereffect md-sq">
                  <div className="arrowoverlay"><h5>view</h5></div>
                  <div className="plusoverlay"></div>

                  <div className="clairmail"></div>

                  <div className="md-sq-img"></div>
                <div className="overlay">
                    <h2>ClairMail</h2>
        <hr/>
        <h5>ClairMail, mobile banking<br/>app demo</h5>
                  </div>
                  {/*</AniLink> className={`info`}  paintDrip to="/MobileBanking" duration={1} hex="#ffffff"></AniLink>*/} 
                   {/*<a className="info" href="/MobileBanking" >fpo1</a>*/} 
                  <Link className={`info`}  to="/MobileBanking"></Link>
                 </div>
              </div>

              </div>
            </div>           



<div className="item-ld">
<div className="item-content">
{/* small rec */}
  <div className="grid-item grid-item--height2" id="griditem3">
   <div className="hovereffect sm-rec">
    <div className="arrowoverlay"><h5>view</h5></div>
      <div className="plusoverlay"></div>
     <div className="secondchance"></div>
      <div className="overlay">
        <h2>Second Chance Animal Services</h2>
        <hr/>
        <h5>Veterinary Hospital network</h5>
      </div>
      {/*</AniLink> className={`info`}  paintDrip to="/Secondchance" duration={1} hex="#d8a918"></AniLink>*/} 
      <Link className={`info`}  to="/Secondchance"></Link>
     </div>
  </div>
 </div>
</div>


<div className="item-ld">
<div className="item-content">
 {/* small rec */}
 <div className="grid-item grid-item--height2"  id="griditem5">
   <div className="hovereffect sm-rec">
    <div className="arrowoverlay"><h5>view</h5></div>
      <div className="plusoverlay"></div>  
      <div className="wataah"></div>
      <div className="overlay">
        <h2>Wa-aah Water!</h2>
        <hr/>
        <h5>Wa-aah Water!, showcase of murals and<br/>art work</h5>
      </div>
      <Link className={`info`}  to="/Watahh"></Link>
     </div>
  </div>

     </div>
  </div> 
{/* square */}
                <div className="grid-item">
                <div className="hovereffect md-sq">
                  <div className="arrowoverlay"><h5>view</h5></div>
                  <div className="plusoverlay"></div>

                  <div className="aestheticcare"></div>

                  <div className="md-sq-img"></div>
                  <div className="overlay">
                    <h2>Aesthetic Care</h2>
                    <hr/>
                    <h5>Aesthetic Care cosmetic medical services</h5>
                  </div>
                 
                  {/*</AniLink> className={`info`}  paintDrip to="/Aesthetic" duration={1} hex="#4c77ad"></AniLink>*/} 
                  <Link className={`info`}  to="/Aesthetic"></Link>
                 </div>
              </div>
  {/* small rec */}
  <div className="item-ld">
    <div className="item-content">
     <div className="grid-item grid-item--height2"  id="griditem5">
       <div className="hovereffect sm-rec">
        <div className="arrowoverlay"><h5>view</h5></div>
          <div className="plusoverlay"></div>
         <div className="wilmette"></div>
          <div className="overlay">
            <h2>Wilmette History Museum</h2>
            <hr/>
            <h5>Interactive history map<br/>Responsive on large touch, desktop and mobile screens</h5>
          </div>
          <Link className={`info`}  to="/Wilmette"></Link>
          {/*</AniLink> className={`info`}  paintDrip to="/Wilmette" duration={1} hex="#1e6f1d"></AniLink>*/} 
         </div>
      </div>
     </div>
    </div> 

              {/* small rec */}
  <div className="item-ld">
    <div className="item-content">
     <div className="grid-item grid-item--height2"  id="griditem5">
       <div className="hovereffect sm-rec">
        <div className="arrowoverlay"><h5>view</h5></div>
          <div className="plusoverlay"></div>
         <div className="banners"></div>
          <div className="overlay">
            <h2>Display ads for Viacom and other folks</h2>
            <hr/>
            <h5>Rich media and interactive</h5>
          </div>
          <Link className={`info`}  to="/Banners"></Link>
         </div>
      </div>
     </div>
    </div> 

    

            {/* lg vertical rec */}
            <div className="item-ld">
              <div className="item-content">
              
                <div className="grid-item">
                <div className="hovereffect md-sq">
                  <div className="arrowoverlay"><h5>view</h5></div>
                  <div className="plusoverlay"></div>

                  <div className="copa-mudial"></div>

                  <div className="md-sq-img"></div>
                  <div className="overlay">
                    <h2>NBC Universal Creative Group</h2>
                    <hr/>
                    <h5>Corporate site</h5>
                  </div>
                  <Link className={`info`}  to="/NBCU"></Link>
                  {/*</AniLink> className={`info`}  paintDrip to="/NBCU" duration={1} hex="#9e9e9e"></AniLink>*/} 
                 </div>
              </div>
               
              </div>
            </div>
              



              {/* small rec */}
  <div className="item-ld">
    <div className="item-content">
     <div className="grid-item grid-item--height2"  id="griditem5">
       <div className="hovereffect sm-rec">
        <div className="arrowoverlay"><h5>view</h5></div>
          <div className="plusoverlay"></div>
         <div className="avaya"></div>
          <div className="overlay">
            <h2>Avaya Trial Timeline</h2>
            <hr/>
            <h5>Used in complex corporate litigation</h5>
          </div>
          <Link className={`info`}  to="/Avaya"></Link>
         </div>
      </div>
     </div>
    </div> 

                              {/* small rec */}
  <div className="item-ld">
    <div className="item-content">
     <div className="grid-item grid-item--height2"  id="griditem5">
       <div className="hovereffect sm-rec">
        <div className="arrowoverlay"><h5>view</h5></div>
          <div className="plusoverlay"></div>
         <div className="mcgraw"></div>
          <div className="overlay">
            <h2>McGraw-Hill<br/>employee recruitment</h2>
            <hr/>
            <h5>Rich media and interactive</h5>
          </div>
          
          {/*</AniLink> className={`info`}  paintDrip to="/Banners" duration={1} hex="#9e9e9e"></AniLink>*/} 
          <Link className={`info`}  to="/Banners"></Link>
         </div>
      </div>
     </div>
    </div> 

            {/* lg vertical rec */}
            <div className="item-ld">
              <div className="item-content">
              
                <div className="grid-item">
                <div className="hovereffect md-sq">
                  <div className="arrowoverlay"><h5>view</h5></div>
                  <div className="plusoverlay"></div>

                  <div className="optioncare"></div>

                  <div className="md-sq-img"></div>
                  <div className="overlay">
                    <h2>OptionCare</h2>
                    <hr/>
                    <h5>OptionCare home transfusion<br/>services, corporate site</h5>
                  </div>
                  {/*</AniLink> className={`info`}  paintDrip to="/Optioncare" duration={1} hex="#ad4ca9"></AniLink>*/}
                  <Link className={`info`}  to="/Optioncare"></Link> 
                 </div>
              </div>
             </div>
              </div>




                          {/* small rec */}
  <div className="item-ld">
    <div className="item-content">
     <div className="grid-item grid-item--height2"  id="griditem5">
       <div className="hovereffect sm-rec">
        <div className="arrowoverlay"><h5>view</h5></div>
          <div className="plusoverlay"></div>
         <div className="banners2"></div>
          <div className="overlay">
            <h2>Display ads</h2>
            <hr/>
            <h5>Rich media and interactive</h5>
          </div>
          <Link className={`info`}  to="/Banners"></Link> 
          {/*</AniLink> className={`info`}  paintDrip to="/Banners" duration={1} hex="#ad4ca9"></AniLink>*/} 
         </div>
      </div>
     </div>
    </div> 



          </div>
          <button
            className="grid-button"
            onClick={() => this.removeElement()}
          >
            hide first box
          </button>

        </div>
      </div>
    )
}

}
 
export default MuuriMaker;