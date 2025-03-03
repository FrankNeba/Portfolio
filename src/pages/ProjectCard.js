import React from 'react'
import '../Styles/projects.css'
import Picture from './ProfilePicture.jpeg'

function ProjectCard(props) {
  return (
    <div className='card'>
        {/* <div> */}
            <h3>{props.name}</h3>
            <img src={Picture} alt='Social Media' className='project-image'/>
            
        {/* </div> */}
        <div>
            <p>{props.about}</p>
        </div>

        <div className='preview'>
            <a 
                href={props.github}
                target='_blank' 
                rel="noreferrer"
                className='link-to'
                 >
                Visit Github
            </a>

            { 
             props.live? (<a
                href={props.live}
                target='_blank' 
                rel="noreferrer"
                className='link-to'
                 >
                Live Site
            </a>) : ''
            }
                

        </div>

    </div>
  )
}

export default ProjectCard