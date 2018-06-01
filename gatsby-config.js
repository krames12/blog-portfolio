module.exports = {
  siteMetadata: {
    title: 'Nick Kramer',
    siteUrl: 'http://www.nickkramer.me',
    description: 'Nick Kramer is a Web Developer who loves to create solutions to real world problems, learn new technologies, and slay monsters.'
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
