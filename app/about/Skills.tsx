import React from 'react'
import AnimatedText from '../components/AnimatedText';
import Image from 'next/image';


import java from '../../public/images/projects/java.jpg';
import spring from '../../public/images/projects/spring.png';
import boot from '../../public/images/projects/boot.png';
import reactjpg from '../../public/images/projects/react.png';
import angular from '../../public/images/projects/angular.jpg';
import node from '../../public/images/projects/node.jpg';
import kafka from '../../public/images/projects/kafka.png';
import aws from '../../public/images/projects/aws.png';
import tanzu from '../../public/images/projects/tanzu.png';
import mongo from '../../public/images/projects/mongo.jpg';
import apigee from '../../public/images/projects/apigee.png';
import tailwind from '../../public/images/projects/tailwind.png';

const Skills = () => {
  return (
    <div>
        <AnimatedText text="My Skills" className="text-3xl w-full" />
        <div className='w-full p-8 flex flex-row flex-wrap items-center justify-around gap-8'>
          <Image src={java} alt='java' className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={spring} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={boot} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={reactjpg} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={angular} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={node} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={kafka} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={aws} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={tanzu} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={mongo} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={apigee} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
          <Image src={tailwind} alt="teja" className="w-[150px] h-[150px] rounded-full shadow-2xl object-contain" />
        </div>
    </div>
  )
}

export default Skills;