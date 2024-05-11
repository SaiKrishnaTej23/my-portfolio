import Head from 'next/head';
import React from 'react'
import AnimatedText from '../components/AnimatedText';
import profilebw from '../../public/images/profile/Profilebw.jpg';
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
import Image from 'next/image';
import Experience from './Experience';
import Education from './Education';

const About = () => {
  return (
    <>
      <Head key={'about'}>
        <title>About</title>
        <meta name="description" content="about" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center text-center px-4 py-14 md:px-28'>
        <AnimatedText text="Passion Fuels Purpose!" className="text-5xl md:text-6xl" />
        <div className='w-full my-8 flex flex-col-reverse items-center justify-between gap-10 md:flex-row'>
          <div className='flex flex-col items-center justify-between w-full text-left font-medium md:w-1/2'>
            <h2 className='w-full text-lg font-semibold text-left uppercase'>Biography</h2>
            <p className='mt-4'>
              Technologically-sophisticated professional with expertise designing, coding, and developing software applications, while
              ensuring optimum performance, uptime, and efficiency. Demonstrated success in developing backend / REST API, data
              models, and standalone services, while automating various processes for customers. Created several front-end UI
              applications in Angular & React including Micro-frontends. Adept at identifying, interpreting, and analysing user
              requirements to deliver product in line with user needs. Instrumental in converting technical requirements into
              understandable language for non-technical users. Strong relationship-building, team leadership, and communication skills
              evidenced by ability to excel at establishing and nurturing collaborative relationships with employees and management.
            </p>
            <p className='mt-4'>
              I have a passion for creating beautiful, functional,
              and user-centered digital experiences. With 7 years of experience in React & Angular. I am always looking for
              new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='mt-4'>
              I believe that design is about more than just making things look pretty – it's about solving problems and
              creating intuitive, enjoyable experiences for users.
            </p>
            <p className='mt-4'>
              Whether I'm working on a website, mobile app, or
              other digital product, I bring my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>

          </div>
          <div className='flex w-full h-full items-start md:w-1/2'>
            <div className='rounded-2xl border-2 border-solid border-black w-full p-8'>
              <Image src={profilebw} alt="teja" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <AnimatedText text="My Skills !" className="text-3xl w-full" />
        <div className='w-full p-8 flex flex-row flex-wrap items-center justify-around gap-2'>
          <Image src={java} alt='java' className="w-auto h-auto " />
          <Image src={spring} alt="teja" className="w-auto h-auto" />
          <Image src={boot} alt="teja" className="w-auto h-auto" />
          <Image src={reactjpg} alt="teja" className="w-auto h-auto" />
          <Image src={angular} alt="teja" className="w-auto h-auto" />
          <Image src={node} alt="teja" className="w-auto h-auto" />
        </div>
        <div className='w-full p-8 flex flex-row flex-wrap items-center justify-around gap-2'>
          <Image src={kafka} alt="teja" className="w-auto h-auto" />
          <Image src={aws} alt="teja" className="w-auto h-auto" />
          <Image src={tanzu} alt="teja" className="w-auto h-auto" />
          <Image src={mongo} alt="teja" className="w-auto h-auto" />
          <Image src={apigee} alt="teja" className="w-auto h-auto" />
          <Image src={tailwind} alt="teja" className="w-auto h-auto" />
        </div>
        <Experience />
        <Education />
      </main >

    </>
  )
}

export default About;