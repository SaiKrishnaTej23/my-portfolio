'use client'
import React from 'react'
import { motion } from 'framer-motion';

const TransistionEffect = () => {
    return (
        <>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen bg-black z-[30]'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: 0 }}
                transition={{ duration: 0.8 , ease: 'easeInOut'}}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen bg-white z-[20]'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: 0 }}
                transition={{ delay:0.2, duration: 0.4 , ease: 'easeInOut'}}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen bg-orange-700 z-[10]'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: 0, width: 0 }}
                transition={{ delay: 0.4, duration: 0.2 , ease: 'easeInOut'}}
            />
        </>

    )
}

export default TransistionEffect;