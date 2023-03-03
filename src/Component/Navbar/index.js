import React from 'react';

import "./index.css"


function Navbar() {
  return (
    <>
    <div >
    <nav className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
    </div>
    

    </>
  
  );
}

export default Navbar;
