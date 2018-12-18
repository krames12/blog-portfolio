import React from 'react'
import Link from 'gatsby-link'
import headshot from '../images/nick_headshot_cropped.jpg'
import pugcheck from '../images/Character-View-PugCheck.png'
import lumfull from '../images/Movie-List-LUMDB.jpg'
import lummovie from '../images/Movie-View-LUMDB.jpg'

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
        <div className="project-screenshot">
          <img src={pugcheck} alt="PugCheck Teams example" />
        </div>
        <div className="project-description image-right">
          <h3>
            PugCheck Teams{' '}
            <a href="https://teams.pugcheck.com/1">
              <i className="icon fas fa-link" />
            </a>
            <a href="https://github.com/krames12/pugcheck">
              <i className="icon fab fa-github" />
            </a>
          </h3>
          <ul className="project-tech-used">
            <li>
              <p>Laravel</p>
            </li>
            <li>
              <p>PHP</p>
            </li>
            <li>
              <p>MySQL</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
          </ul>
          <p>
            A clean and simple World of Warcraft character look up displaying
            their current raid progression, as well as logs for that given fight
            and difficulty if available. Using the{' '}
            <a href="www.worldofwarcraft.com">World of Warcraft</a> &{' '}
            <a href="www.warcraftlogs.com">WarcraftLogs</a> API's.
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-screenshot">
          <img src={pugcheck} alt="PugCheck character view" />
        </div>
        <div className="project-description image-right">
          <h3>
            PugCheck{' '}
            <a href="https://pugcheck.com/us/proudmoore/boombawks">
              <i className="icon fas fa-link" />
            </a>
            <a href="https://github.com/krames12/pugcheck">
              <i className="icon fab fa-github" />
            </a>
          </h3>
          <ul className="project-tech-used">
            <li>
              <p>Laravel</p>
            </li>
            <li>
              <p>PHP</p>
            </li>
            <li>
              <p>MySQL</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
          </ul>
          <p>
            A clean and simple World of Warcraft character look up displaying
            their current raid progression, as well as logs for that given fight
            and difficulty if available. Using the{' '}
            <a href="www.worldofwarcraft.com">World of Warcraft</a> &{' '}
            <a href="www.warcraftlogs.com">WarcraftLogs</a> API's.
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-screenshot">
          <img src={lumfull} alt="LUMDB main page" />
        </div>
        <div className="project-description image-left">
          <h3>
            LUMDB{' '}
            <a href="https://github.com/krames12/lumdb">
              <i className="icon fab fa-github" />
            </a>
          </h3>
          <ul className="project-tech-used">
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Javascript</p>
            </li>
            <li>
              <p>SASS</p>
            </li>
            <li>
              <p>Gatsby.js</p>
            </li>
          </ul>
          <p>
            Movie database that pulls the top 20 movies from{' '}
            <a href="https://www.themoviedb.org/">TheMovieDB.org</a>'s movie and
            tv show API.
          </p>
        </div>
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
