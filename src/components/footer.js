import React from 'react'
import Link from 'gatsby-link'
import * as Icon from 'react-feather'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="social-links text-center">
        <h2>CONTACT</h2>
        <a href="https://twitter.com/krames12">
          <Icon.Twitter className="social twitter" />
        </a>
        <a href="https://www.linkedin.com/in/ian-chase-15531172">
          <Icon.Linkedin className="social linkedin" />
        </a>
        <a href="mailt:krames12@gmail.com">
          <Icon.Mail className="social email" />
        </a>
    </div>

    <div className="footer text-center">
        <div className="wrapper padding">
            <p>Crafted by: &#60;Designer&#62; <a href="http://www.synergyfirm.com/" className="reference-link">Synergy Web &amp; Graphics</a> &amp; &#60;Developer&#62; <a href="http://nickkramer.me" className="reference-link">Nick Kramer</a></p>
        </div>
    </div>
  </footer>
)

export default Footer;
