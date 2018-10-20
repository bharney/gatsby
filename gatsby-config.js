module.exports = {
  siteMetadata: {
    title: 'Bad Boy Bri Bri',
    author: 'Brian Harney',
    description: 'A blog about building incredible software.',
    siteUrl: 'https://https://bharney.azureedge.net/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: 
        {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
        {
          path: `${__dirname}/src/images`,
          name: 'images',
        },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
