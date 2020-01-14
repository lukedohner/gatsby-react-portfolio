module.exports = {
  siteMetadata: {
    description: `Files you might need.`,
    author: `xx @gatsbyjs`,
    author2: `xx @gatsbyjs`,
    siteUrl: `https://www.gatsbyjs.org`,
    title: `L. Dohner portfolio `,
    menuLinks:[
      {
         name:`home`,
         link:`/`
      },
      {
         name:`banner`,
         link:`/Banners`
      },
      {
         name:`contact`,
         link:`/#homefooter`
      },
      

    ]
  },
  //pathPrefix: `/react-ld/public`,
  module.exports = {
  pathPrefix: `/react-ld/public`,
  }
  //pathPrefix: `/bootstrap-ld/react-site/public`,
  plugins: [
   'gatsby-plugin-eslint',
    'react-hooks'
  ],
  'rules': {
    // ...
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon_ld.png`, // This path is relative to the root of the site.
      },
    },
  ],
}