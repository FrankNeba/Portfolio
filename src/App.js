import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import './Files/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className=" body">
      <div className="head">
        <div className="Name">
          <h1>
            <i className="fas fa-user"></i> Ngwa Frank Neba
          </h1>
        </div>

        <div className="skills">
          <ul>
            <li>Frontend Web Developer</li>
            <li>HTML</li>
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
            className="buttons btn-success"
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
      <div className=" about">
        <h3>About me</h3>
        <p>
          I am a full stack Developer with over 4 years of experience and a
          mastery of HTML, CSS, Bootstrap, JavaScript, React.js, Python and
          Django. I have some knowledge in C and C++ with knowledge on version
          control systems like Git and Github. I have worked on many projects
          for many different satisfied customers and with different individuals
          in building user friendly and easily navigated websites and
          applications. While learning and improving on my skills I have been
          providing others with the knowledge I have especially knowledge on C
          to students going in for GCE advance level. I am looking forward to
          working and collaborating with others in completing projects and
          expanding my skill set.
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
            <li className="skill">DJANGO</li>
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
            <h5>Zilotech, 2023 - Present</h5>
            <ul className="white">
              <li className="white">Building user friendly sites and UIs</li>
              <li className="white">
                Implementing responsive designs on websites and applications
              </li>
              <li className="white">
                Maintaining and updating websites and applicatons{" "}
              </li>
            </ul>
          </div>

          <div className="school">
            <h4>Full stack developer</h4>
            <h5>freelancer, 2020 - Present</h5>
            <ul className="white">
              <li className="white">
                Built websites and applictions for over 100 different customers
                with HTML, CSS JavaScript, React.js and Django
              </li>
              <li className="white">
                Collaborated with others in developing full stack applications
              </li>
              <li className="white">
                Maintaining and updating websites and applicatons{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
