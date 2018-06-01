import React from 'react'
import Link from 'gatsby-link'
import { Twitter, Linkedin, Mail, Github } from 'react-feather'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="social-links text-center">
        <h2>Get in touch with me!</h2>
        <a href="https://twitter.com/krames12">
          <Twitter className="social twitter" />
        </a>
        <a href="https://www.github.com/krames12">
          <Github className="social github" />
        </a>
        <a href="https://www.linkedin.com/in/nick-kramer-22320035">
          <Linkedin className="social linkedin" />
        </a>
        <a href="mailto:krames12@gmail.com">
          <Mail className="social email" />
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
