import React from 'react'
import data from '../data.json';
const Education = () => {
  return (
    <div className='w-full'>
        <h2 className='font-semibold text-4xl w-full text-center my-10 md:text-8xl'>
            Education
        </h2>
        {
            data.education.map((edu: any) => {
                return (
                    <div className='w-full flex flex-row items-start justify-between' key={edu.degree}>
                        <div className='flex flex-col justify-between w-full text-left font-medium py-4'>
                            <h2 className='w-full text-lg font-semibold text-left uppercase'>{edu.degree}</h2>
                            <a className='text-purple-500 font-semibold' href={edu.universityLink} target='_blank'>@{edu.university}</a>
                            <span className='capitalize font-light text-sm'>{edu.time} | {edu.address}</span>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Education;