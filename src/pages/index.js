import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Swipermy from '../components/swipermy'
import Proclaim from '../components/proclaim'
import Servicebox from '../components/servicebox'
import Swipersmall from '../components/swipersmall'
import Whatisay from '../components/whatisay'
import MuuriMaker from '../components/muurimaker'

import {Helmet} from 'react-helmet'
// import { HashLink as Link } from 'react-router-hash-link';
//import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/layout-boxed.css'
import '../styles/swiper/css/swiper.css'
import '../styles/swiper/css/swipercustom.css'
import '../styles/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Luke Home Page</title>
      <meta name="description" content="Home Page" />
    </Helmet>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   <div style={{ marginTop: `88px` }}>
    <Swipermy />
    <Proclaim />
    <Servicebox />  
    <Swipersmall />
    <Whatisay />
    <MuuriMaker/>

    </div>
  
  </Layout>
)

export default IndexPage
