import React from 'react'
import Link from 'gatsby-link'
import { Terminal } from 'react-feather'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link
        to="/"
        className="logo left"
      >
        <Terminal />
        Nick Kramer
      </Link>
      <nav>
        <ul id="nav-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div id="nav-toggle" className="right">Menu</div>
      </nav>
    </div>
  </header>
)

export default Header
