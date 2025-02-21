import React from 'react'
import '../Styles/projects.css'
import ProjectCard from './ProjectCard'
import image from './ProfilePicture.jpeg'
import '../Styles/Home.css'

import Pop from './Pop'

function Projects() {
  return (
    <Pop>
        <div className='skills-head'>
           <h2>My Works</h2> 
        </div>

    
    <div className='projects'>
        <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
             <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
            <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
            <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
            <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
            <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
            <ProjectCard 
            name='Social Media'
            github = 'https://github.com/frankneba/portfolio'
            image = {image}
            live='https://ngwafrank.netlify.app'
            about = 'This is a simple Socisl media site built with Django'
            />
    </div>

   </Pop>
  )
}

export default Projects