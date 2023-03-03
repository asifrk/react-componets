import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import ProjectList from "./Component/ProjectList";
function App() {
  return (
    <div>
      <Navbar />
      <div className="side_cont">
       <Sidebar />
      <ProjectList /> 
      </div>
    </div>
  );
}

export default App;
