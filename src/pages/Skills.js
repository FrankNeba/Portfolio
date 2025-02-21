import React from 'react'
import Pop from './Pop'
import ProgressBar from './Loader'
import '../Styles/Home.css'

function Skills() {
  return (
     <Pop >
    <div className='progress-bars'>
     <ProgressBar percentage = {97} skill={'HTML'} color = {'green'}/>
     <ProgressBar percentage = {86} skill={'CSS'} color = {'red'}/>
     <ProgressBar percentage = {95} skill={'JAVASCRIPT'} color = {' #4a90e2'}/>
     <ProgressBar percentage = {75} skill={'DJANGO REST'} color = {'brown'}/>
     <ProgressBar percentage = {91} skill={'REACT'} color = {'yellow'}/>
     <ProgressBar percentage = {80} skill={'REACT NATIVE'} color = {'orange'}/>
   </div>
   </Pop>
  )
}

export default Skills