import React from 'react';
import Coworkers from '../Coworkers';
import logo2 from '../images/logo2.jpg'

import "./index.css"

function Sidebar() {
  return (
    <>
    <div className='side_nav'>
    <h3> Manager Name :XYZ</h3>
      <img src={logo2} alt="Employee Profile Image" />

      
      <Coworkers />
   
    </div>
   
    </>
    
  
  );
}

export default Sidebar;

