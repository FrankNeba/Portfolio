import React from 'react'
import '../Styles/projects.css'
import ProjectCard from './ProjectCard'
import image from './ProfilePicture.jpeg'
import '../Styles/Home.css'

import Pop from './Pop'

function Projects() {
  const projects = [
    {
      name:'Social Media',
      github : 'https://github.com/FrankNeba/SocialMedia.git',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Social media site built with Django'
    },
    {
      name:'Social Media',
      github : 'https://github.com/frankneba/portfolio',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Socisl media site built with Django'
    },
    {
      name:'Social Media',
      github : 'https://github.com/frankneba/portfolio',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Socisl media site built with Django'
    },
    {
      name:'Social Media',
      github : 'https://github.com/frankneba/portfolio',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Socisl media site built with Django'
    },
    {
      name:'Social Media',
      github : 'https://github.com/frankneba/portfolio',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Socisl media site built with Django'
    },
    {
      name:'Social Media',
      github : 'https://github.com/frankneba/portfolio',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Socisl media site built with Django'
    },
    {
      name:'Social Media',
      github : 'https://github.com/frankneba/portfolio',
      image : {image},
      live : 'https://ngwafrank.netlify.app',
      about : 'This is a simple Socisl media site built with Django'
    },
  
  ]
  return (
    <Pop>
        <div className='skills-head'>
           <h2>My Works</h2> 
        </div>

    
    <div className='projects'>
      {projects.map((project) => (
        <ProjectCard 
            name= {project.name}
            github = {project.github}
            image = {project.image}
            live={project.live}
            about = {project.about}
            />

      ))}
    </div>

   </Pop>
  )
}

export default Projects