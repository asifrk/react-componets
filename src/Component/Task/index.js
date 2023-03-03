import React from 'react';
import logo5 from '../images/logo5.jpg';

import './index.css';

function Task({ task }) {
  return (
    <>
    <tr className="task-row">
      <td className="task-name">{task.name}</td>
      {/* <td className="task-name">{task.name}</td> */}
      <td className="task-name">{task.percentage}</td>
      <td className="mytask in-progress">
       
     
        
      </td>
      <td className="mytask">{task.assignedTo}</td>
      <td className="mytask">
        <input type="checkbox" name="completed" id="completed" />
        <label htmlFor="completed">Completed</label>
        <button typeof='submit'> Submited</button>
      </td>
    </tr>
   
    </>
  );
}

export default Task;
