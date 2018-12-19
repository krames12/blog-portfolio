import React from 'react'
import Link from 'gatsby-link'
import headshot from '../images/nick_headshot_cropped.jpg'
import Project from '../components/Project'
import projects from '../project-list'

const IndexPage = ({ data }) => (
  <div>
    <div id="about-me">
      <img src={headshot} id="headshot" alt="Nick Kramer Headshot" />
      <div id="descriptors">
        <p>Lifelong Learner</p>
        <p>Developer</p>
        <p>Gamer</p>
      </div>
      <p id="self-description">
        I'm a <span className="accent-emphasis">&#60;WebDeveloper /&#62;</span>{' '}
        who loves to create solutions to real world problems, learn new
        technologies, and slay monsters <i className="fab fa-d-and-d d-and-d" />
      </p>
    </div>
    <div id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map(project => <Project project={project} />)}
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
