import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle}) => (
  <div
    style={{
      background: `grey`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            cursor:`pointer`,
          }}
        >
          {siteTitle} 
          
        </Link>
      </h1> 
        © {new Date().getFullYear()}, Built withxx
        {`  `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>    
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer