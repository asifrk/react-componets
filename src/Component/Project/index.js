import React from 'react';
import TaskList from '../Tasklist';
import './index.css'; 

function Project({ project }) {
  return (
    <div className="container">
      <h2 className="project-name">{project.name}</h2>
      <TaskList tasks={project.tasks} />
    </div>
  );
}

export default Project;
