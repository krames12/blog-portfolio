import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.scss'
import './theme.scss'
import '../css/fontawesome/css/fontawesome-all.min.css'

const Layout = ({ children, data }) => (
  <div className="site-container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Nick Kramer - Builder of web things' },
        {
          name: 'keywords',
          content:
            'web, web development, react, javascript, php, laravel, css, scss, developer',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div id="body">{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
