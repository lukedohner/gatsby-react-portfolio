/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// eslint-disable-next-line
import { StaticQuery, Link, graphql } from "gatsby"


import Header from "./header"
import Footer from './footer'
import "./layout.css"
import '../styles/layout.css'
import '../styles/custom.css'
import '../styles/layout-boxed.css'
import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/layout-boxed.css'
import '../styles/skin-green.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title, description
            menuLinks {
              name 
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className={"wrapbox"}>
     
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
          <div
            style={{
              marginTop: `140px `,
              marginBottom: `40px`,
              paddingTop: 0,
            }}
          > 
            
            {children}
            
          </div>
          
        <Footer id="homefooter" siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description}/>
      </div>

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

