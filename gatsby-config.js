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
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72170171-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}
