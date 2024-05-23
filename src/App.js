import React from "react";
import "./App.css";

// import './Files/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="body">
      <div className="head">
        <div className="Name">
          <h1>
            <i className="fas fa-user"></i> Ngwa Frank Neba
          </h1>
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
        <div className="contact">
          <a
            className="buttons"
            download="Ngwa_Frank_Neba_resume.pdf"
            href={`${process.env.PUBLIC_URL}/Ngwa_Frank_CV.pdf`}
          >
            <button className="cv">Download CV</button>
          </a>
          <a href="mailto:frankneba92@gmail.com">
            <button className="cv"> Contact me</button>
          </a>
        </div>
      </div>
      <div className="container about">
        <h3>About me</h3>
        <p>
          I am a frontend web developer with over a year of experience and
          mastery of HTML, CSS , Javascript. I am verse with frameroks like
          React.js, React native and Bootstrap. I have knowledge with languages
          like C, C++, Python and verion control systems like git and Github.I have
          worked on many projects with different individuals and groups in
          building user friendly and easily navigated sites.
        </p>
        <p>
          While leaning and improving on my skills, I have been tutoring Advance
          Level students in C programming language. I love working in a team but
          I have no problem working on priojects individually. I make sure I
          keep myself updated with latest technologies as the days go body. I am
          looking forward to working and collaborating with others in realizing
          projects and expanding my skill set.
        </p>
        <hr></hr>
        <hr></hr>

        <div className="skillset">
          <h3>Tech skills</h3>
          <ul>
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">JAVASCRIPT</li>
            <li className="skill">BOOTSTRAP</li>
            <li className="skill">REACT.JS</li>
            <li className="skill">REACT NATIVE</li>
            <li className="skill">PYTHON</li>
            <li className="skill">C</li>
            <li className="skill">C++</li>
            <li className="skill">GIT</li>
            <li className="skill">GITHUB</li>
          </ul>

          <h3>Soft skills</h3>
          <ul>
            <li className="skill">Good communication skills</li>
            <li className="skill">Fluent in English language</li>
            <li className="skill">Delivers on time and respects dateline</li>
            <li className="skill">Comfortable working remotely</li>
            <li className="skill">Effective in problem solving</li>
          </ul>
        </div>
        <hr></hr>

        <div className="education">
          <h3>Education</h3>
          <div className="school">
            <h4>National Higher Polytechnic Institute Bamenda</h4>
            <h5>Bachelor in Computer Engineering</h5>
            <h6>2023 - Present</h6>
          </div>
          <hr></hr>

          <div className="school">
            <h4>Progressive Comprehensive High School Bamenda</h4>
            <h5>Science</h5>
            <h6>2020 - 2023</h6>
          </div>
          <hr></hr>

          <div className="school">
            <h4>Government High School Bafut</h4>
            <h5>General Education</h5>
            <h6>2013 - 2016</h6>
          </div>
          <hr></hr>
          <hr></hr>
        </div>
        
        <div className="work">
          <h3>Work Experience</h3>
          <div className="school">
            <h4>Frontend Developer</h4>
            <h5>Zilotech, 2024 - Present</h5>
          <ul>
            <li>Building user friendly sites and UIs</li>
            <li>Implementing responsive designs on websites and applications</li>
            <li>Maintaining and updating websites and applicatons </li>
          </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
