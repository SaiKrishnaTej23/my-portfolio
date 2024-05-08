import React from 'react';
import data from '../data.json'


const Details = ({ postion, company, companyLink, time, address, work }: any) => {
    return (
        <li className='my-6 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-between text-left'>
            <h3 className='capitalize font-semibold text-lg'>{postion} &nbsp; <a className='text-purple-500 font-semibold' href={companyLink} target='_blank'>@{company}</a></h3>
            <span className='capitalize font-light text-sm'>{time} | {address}</span>
            <ul className='text-md font-normal w-full list-disc mt-4'>
                {
                    work.map((item: any) => {
                        return <li className='text-md font-normal w-full' key={item}>{item}</li>
                    })
                }
            </ul>
        </li>
    );
}

const Experience = () => {
    return (
        <div className='my-32'>
            <h2 className='font-semibold text-8xl w-full text-center mb-32'>
                Experience
            </h2>

            <div className='w-[80%] mx-auto relative' >
                <ul >
                    {
                        data.experience.map((exp: any) => {
                            return <Details key={exp.id} postion={exp.position} company={exp.company} companyLink={exp.companyLink} time={exp.time} address={exp.address} work={exp.work} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Experience;