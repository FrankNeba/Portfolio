import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Nav() {
  return (
    
        <nav className='nav'>
            <div className='nav-pages'>
                <Link className='link' to='/' >Home</Link>
                <Link className='link' to='/About'>About</Link>
                <Link className='link' to='/skills'>Skills</Link>
                <Link className='link' to='/Contact'>Contact</Link>
                <Link className='link' to='/projects'>Projects</Link>
            </div>
            <div className='social'>
                <a href='https://linkedin.com/in/ngwafrank' target='_blank' rel="noreferrer">
                    <FaLinkedin className='socials' />
                </a>
                <a href='https://github.com/frankneba' target='_blank' rel="noreferrer">
                    <FaGithub className='socials' />
                </a>

            </div>

        </nav>

  )
}

export default Nav