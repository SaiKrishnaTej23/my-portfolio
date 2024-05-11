import React from 'react';
import data from '../data.json'


const Details = ({ postion, company, companyLink, time, address, work }: any) => {
    return (
        <li className='my-6 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-between text-left'>
            <h3 className='capitalize font-semibold text-lg'>{postion} &nbsp; <br className='flexmd:hidden' /><a className='text-purple-500 font-semibold' href={companyLink} target='_blank'>@{company}</a></h3>
            <span className='capitalize font-light text-sm'>{time} | {address}</span>
            <ul className='text-md font-normal w-full list-disc mt-4'>
                {
                    work.map((item: any) => {
                        return <li className='text-md font-normal w-full' key={item}>
                            {item}
                            <br />
                        </li>
                    })
                }
            </ul>
        </li>
    );
}

const Experience = () => {
    return (
        <div>
            <h2 className='font-semibold text-4xl w-full my-10 text-center md:text-8xl'>
                Experience
            </h2>

            <div className='mx-auto relative px-4' >
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