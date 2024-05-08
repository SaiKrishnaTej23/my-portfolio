'use client'
import React from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons';
import { usePathname } from 'next/navigation';

const CustomLink = ({ href, title, className = '' }: any) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <motion.a href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? 'w-full' : 'w-0'}` }
            >
                &nbsp;
            </span>
        </motion.a>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-28 py-6 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' className='mr-4' title='Home'> </CustomLink>
                <CustomLink href='/about' className='mx-4' title='About'></CustomLink>
                <CustomLink href='/projects' className='mx-4' title='Projects'></CustomLink>
                <CustomLink href='/contact' className='ml-4' title='Contact'></CustomLink>
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a whileHover={{ y: -2 }} href='https://twitter.com/saikrishnatej_' target='_blank' className='w-6 mx-3'><TwitterIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} href='https://github.com/SaiKrishnaTej23' target='_blank' className='w-6 mx-3'><GithubIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} href='/' target='_blank' className='w-6 mx-3'><LinkedInIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} href='/' target='_blank' className='w-6 mx-3'><PinterestIcon /></motion.a>
                <motion.a whileHover={{ y: -2 }} href='/' target='_blank' className='w-6 mx-3'><DribbbleIcon /></motion.a>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />    
            </div>
        </header>
    )
}

export default NavBar;