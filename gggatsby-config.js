module.exports = {
  siteMetadata: {
    title: `Luke Dohner`,
    description: `Front End Developer`,  
    author: `@lukedohner`,
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
  pathPrefix: `/react-ld/public`,
  plugins: [
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
