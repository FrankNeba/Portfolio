import React from 'react'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
        <nav className='nav'>
            <div className='nav-pages'>
                <Link className='link' to='/' >Home</Link>
                <Link className='link' to='/About'>About</Link>
                <Link className='link' to='/Skills'>Skills</Link>
                <Link className='link' to='/Contact'>Contact</Link>
                <Link className='link' to='/Projects'>Projects</Link>
            </div>
            <div className='social'>
                <a href='https://linkedin.com/in/ngwafrank'>linkedIn</a>
                <a href='https://github.com/frankneba' target='_blank' rel="noreferrer">Github</a>

            </div>

        </nav>

  )
}

export default Nav