import React from 'react'
import data from '../data.json';
const Education = () => {
  return (
    <div className='my-32'>
        <h2 className='font-semibold text-8xl w-full text-center mb-32'>
            Education
        </h2>
        {
            data.education.map((edu: any) => {
                return (
                    <div className='w-full m-8 flex flex-row items-start justify-between '>
                        <div className='flex flex-col justify-between w-1/2 text-left font-medium p-8'>
                            <h2 className='w-full text-lg font-semibold text-left uppercase'>{edu.degree}</h2>
                            <p className='mt-4'>{edu.university}</p>
                            <p className='mt-4'>{edu.time}</p>
                            <p className='mt-4'>{edu.address}</p>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Education;