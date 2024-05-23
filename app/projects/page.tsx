import React from 'react'
import AnimatedText from '../components/AnimatedText';
import TransistionEffect from '../components/TransistionEffect';
import Experience from './Experience';
import Education from './Education';
const Project = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center px-4 py-14 md:px-28'>
      <TransistionEffect />
      <Experience />
      <Education />
    </div>
  )
}

export default Project;