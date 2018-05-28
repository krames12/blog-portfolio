module.exports = {
  siteMetadata: {
    title: 'Nick Kramer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-transformer-remark'
  ],
}
