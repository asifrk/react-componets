import React from 'react';
import Task from '../Task';
import './index.css';

function TaskList({ tasks }) {
  console.log(tasks);
  return (
    <table className='tab'>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Assigned To</th>
          <th>Status</th>
          
        </tr>
        <tr>
          <td>Task Name</td>
          <td>Workdone</td>
          
          <progress className="prog"  value="70" max="100"> 32% </progress>
          
         
        </tr>

        <tr>
          {/* <th>Task Name</th>
          <th>Assigned To</th>
          <th>Status</th> */}
          
        </tr>
        <tr>
          <td>Task Name</td>
          <td>Workdone</td>
          
          <progress className="prog"  value="65" max="100"> 32% </progress>
          
         
        </tr>

        

        
       
      </thead>
      <tbody>
        {tasks.map(task => (
          <Task key={task.id} task={tasks} />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
