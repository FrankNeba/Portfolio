import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import profile from '../Files/ProfilePicture.jpeg';

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
    <div className="home-body">
      <div className="body-info">
        <h1 className="name">Ngwa Frank Neba</h1>
        <p className="about">
          Full stack Developer with over 4 years of experience and a mastery of
          HTML, CSS, Bootstrap, JavaScript, React.js, React Native, Python, and
          Django.
        </p>
      </div>
      <div className="picture">
        <img src={profile} alt="Ngwa Frank" className="image" />
        <h3 className='skills'>{display}</h3>
      </div>
    </div>
  );
};

export default Home;
