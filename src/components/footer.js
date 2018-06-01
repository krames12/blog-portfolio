import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="social-links text-center">
        <h2>Get in touch with me!</h2>
        <a href="https://twitter.com/krames12">
          <i className="fab fa-twitter fa-2x social twitter" ></i>
        </a>
        <a href="https://www.github.com/krames12">
          <i className="fab fa-github fa-2x social github" ></i>
        </a>
        <a href="https://www.linkedin.com/in/nick-kramer-22320035">
          <i className="fab fa-linkedin fa-2x social linkedin" ></i>
        </a>
        <a href="mailto:krames12@gmail.com">
          <i className="far fa-envelope fa-2x social email" ></i>
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
