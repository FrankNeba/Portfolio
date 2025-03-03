import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';


import profile from '../Files/ProfilePicture.jpeg';

import About from './About'
// import Pop from './Pop';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  const [display, setDisplay] = useState('_');
  const [index, setIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);

  const skills = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Django',
    'React js',
    'React Native',
    'Tailwindcss',
    'Bootstrap',
  ];

  useEffect(() => {
    if (skillIndex >= skills.length) return;

    const interval = setInterval(() => {
      if (index < skills[skillIndex].length) {
        setDisplay((prev) => prev + skills[skillIndex][index].toUpperCase());
        setIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills.length); 
          setIndex(0);
          setDisplay('_');
        }, 2000); 
        clearInterval(interval); 
      }
    }, 200);

    return () => clearInterval(interval);
  }, );

  return (
    <div className='page'>
    <div className="home-body">
      <div className="body-info">
        
        <h1 className="name">Ngwa Frank Neba</h1>
        <p className="about">
          Experienced Full-Stack Developer with 3+ years of expertise in building dynamic and responsive web and mobile applications. Proficient in HTML, CSS, Bootstrap, JavaScript, React.js, React Native, Python, and Django. Passionate about creating seamless user experiences and scalable backend solutions.
        </p>
        <div className='buttons'>
             <a  
            className='button'
            download="Ngwa_Frank_Neba_resume.pdf"
            href={`${process.env.PUBLIC_URL}/Ngwa_Frank_CV.pdf`}
            > 
            <button className='order-services'>
                Download CV
            </button></a>
            <a  
            className='button'
            // download="Ngwa_Frank_Neba_resume.pdf"
            href='mailto:frankneba92@gmail.com'
            > 
            <button className='order-services'>
                Contact Me
            </button></a>

        </div>
       
      </div>
      <div className="picture">
        <img src={profile} alt="Ngwa Frank" className="image" />
        <h3 className='skills'>{display}_</h3>
      </div>
    </div>
   
         <About />

   
        <Skills/>

        <Projects />
    </div>
  );
};

export default Home;
