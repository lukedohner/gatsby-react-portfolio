import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../images/lion.jpg'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
        <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success