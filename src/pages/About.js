import React from "react";
import "../Styles/Home.css";

import Pop from "./Pop";

function About() {
  return (
    <Pop>
      <div className="home-body">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            I am a Full-Stack Developer with over 3 years of experience,
            specializing in HTML, CSS, Bootstrap, JavaScript, React.js, Python,
            and Django. I also have knowledge of C and C++, along with expertise
            in version control systems like Git and GitHub. Throughout my
            career, I have worked on numerous projects, delivering user-friendly
            and highly navigable websites and applications for satisfied
            clients. I thrive on collaborating with others to develop innovative
            solutions and continuously expand my skill set.
          </p>
        </div>
      </div>
    </Pop>
  );
}

export default About;
