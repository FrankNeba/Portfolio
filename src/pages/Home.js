import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';


import profile from '../Files/ProfilePicture.jpeg';

import About from './About'
import Pop from './Pop';
import ProgressBar from './Loader';

const Home = () => {
  const [display, setDisplay] = useState('');
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
          setDisplay('');
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
        <Pop/>
        <h1 className="name">Ngwa Frank Neba</h1>
        <p className="about">
          Full stack Developer with over 4 years of experience and a mastery of
          HTML, CSS, Bootstrap, JavaScript, React.js, React Native, Python, and
          Django.
        </p>
        <a
            
             download="Ngwa_Frank_Neba_resume.pdf"
            href={`${process.env.PUBLIC_URL}/Ngwa_Frank_CV.pdf`}
            > 
            <button className='order-services'>
                Download CV
            </button></a>
      </div>
      <div className="picture">
        <img src={profile} alt="Ngwa Frank" className="image" />
        <h3 className='skills'>{display}</h3>
      </div>
    </div>
   
         <About />

   
   <div className='progress-bars'>
     <ProgressBar percentage = {97} skill={'HTML'} color = {'green'}/>
     <ProgressBar percentage = {86} skill={'CSS'} color = {'red'}/>
      <ProgressBar percentage = {95} skill={'JAVASCRIPT'} color = {' #4a90e2'}/>
       <ProgressBar percentage = {75} skill={'DJANGO REST'} color = {'brown'}/>
        <ProgressBar percentage = {91} skill={'REACT'} color = {'yellow'}/>
         <ProgressBar percentage = {80} skill={'REACT NATIVE'} color = {'orange'}/>
   

   </div>
    </div>
  );
};

export default Home;
