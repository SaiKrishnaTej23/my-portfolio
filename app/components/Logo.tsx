'use client'
import Link from 'next/link';
import React from 'react';
import { motion} from 'framer-motion';
import data from '../data.json'; 

const Logo = () => {
  return (
    <motion.div whileHover={{scale: 1.5}} className='flex self-center items-center justify-center mt-2' >
        <Link  href="/" className='w-14 h-14 bg-black text-white text-xl font-bold rounded-full flex items-center justify-center'>{data.abbv}</Link>
    </motion.div>
  )
}

export default Logo;