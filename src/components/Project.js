import React from 'react'

export default props => (
  <div className="project-card">
    <img src={props.image} className="project-card-image" />
    <div className="project-card-info">
      <h4>{props.title}</h4>
      <ul className="project-card-info-tech">
        {props.technologies.map(tech => <li>{tech}</li>)}
      </ul>
      <p className="project-card-info-description">{props.description}</p>
    </div>
  </div>
)
