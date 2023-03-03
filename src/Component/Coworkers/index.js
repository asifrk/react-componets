import React from 'react';
import logo2 from '../images/logo2.jpg'
import logo1 from '../images/logo1.jpg'
import "./index.css"



function Coworkers() {
 

  return (
    <div className='container'>
      <h3>Coworkers</h3>
      <ul>
        <li>
        <img src={logo1} alt="John Profile Image" />
          Ragu
        </li>
        <li>
          <img src={logo2} alt="Jane Profile Image" />
          Mohan
        </li>
        <li>
          <img src={logo2} alt="Bob Profile Image" />
          Rohan
          
        </li>
      </ul>
    </div>
  );
}

export default Coworkers;

