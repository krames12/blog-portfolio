import React from 'react'

export default ({ project }) => (
  <div className="project-card">
    <img src={project.image} className="project-card-image" />
    <div className="project-card-info">
      <h4>{project.title}</h4>
      <ul className="project-tech">
        {project.technologies.map(tech => <li>{tech}</li>)}
      </ul>
      <ul className="project-links">
        {project.links.map(link => (
          <li>
            <a href={link.url}>
              <i className={link.classes} />
            </a>
          </li>
        ))}
      </ul>
      <p className="project-description">{project.description}</p>
    </div>
  </div>
)
