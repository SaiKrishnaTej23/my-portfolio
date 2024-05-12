import React from 'react'
import AnimatedText from '../components/AnimatedText';
import TransistionEffect from '../components/TransistionEffect';

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center px-4'>
      <TransistionEffect />
      <AnimatedText text="Contact Page is under construction" className='text-5xl' />
    </div>
  )
}

export default Contact;