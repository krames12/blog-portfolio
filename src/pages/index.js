import React from 'react'
import Link from 'gatsby-link'
import headshot from '../images/nick_headshot_cropped.jpg'

const IndexPage = ({data}) => (
  <div>
    <div id="about-me">
      <img src={headshot} id="headshot" alt="Nick Kramer Headshot"/>
      <div id="descriptors">
        <p>Lifelong Learner</p>
        <p>Developer</p>
        <p>Gamer</p>
      </div>
      <p id="self-description">
        I'm a <span className="accent-emphasis">Web Developer</span> who loves to develop solutions to real world problems, learn new technologies, and slay monsters <i className="fab fa-d-and-d d-and-d"></i>
      </p>
    </div>
    <div id="projects">

    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage