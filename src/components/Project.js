import React from 'react'

export default ({ project }) => (
  <div className="project-card">
    <div className="project-card-image">
      <img src={project.image} />
    </div>
    <div className="project-card-info">
      <h4 className="project-title">{project.title}</h4>
      <ul className="project-links">
        {project.links.map( (link, index) => (
          <li key={`project-${index}`}>
            <a href={link.url}>
              <i className={link.classes} />
            </a>
          </li>
        ))}
      </ul>
      <ul className="project-tech">
        {project.technologies.map( (tech, index) => <li key={`tech-${index}`}>{tech}</li>)}
      </ul>
      <p className="project-description">{project.description}</p>
    </div>
  </div>
)
