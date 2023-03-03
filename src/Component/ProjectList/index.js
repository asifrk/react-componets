import React from 'react';
import Project from '../Project';
import './index.css';

function ProjectList() {
  const projects = [
    { id: 1, name: 'Project 1', tasks: [] },
    { id: 2, name: 'Project 2', tasks: [] },
    { id: 3, name: 'Project 3', tasks: [] },
  ];

  return (
    <div className="contain">
      <h2>Project List</h2>
      <div className="project-list">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
