import React from "react";
import './App.css'

function App() {
  return (
      <div className="body">
        <div className="Name">
          <h1><i className="fas fa-user"></i> Ngwa Frank Neba </h1>
        </div>

        <div className="skills">
          <ul>
            <li>Frontend Web Developer</li>
            <li>HTMl</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>React.js</li>
            <li>Python</li>
            <li>C++</li>
            <li>C</li>
            <li>mySQL</li>
            <li>Git</li>
          </ul>
        </div>

        <a download="Ngwa_Frank_Neba_CV.pdf" href="./Files/Ngwa_Frank_CV.pdf"><button >Download CV</button></a>
      
      
      </div>
  );
}

export default App;