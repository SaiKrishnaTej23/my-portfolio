'use client'
import React from 'react';
import { motion } from 'framer-motion';

const quote ={
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};

const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 className={`inline-block w-full text-black font-bold text-5xl ${className}`}
                variants={quote}
                initial="initial" animate="animate"
                transition={{ duration: 2, type: 'spring', bounce: 0.4 }}
            >
                {text.split(" ").map((word, index) => (
                    <motion.span key={word + '-' + index} variants={singleWord}  className='inline-block'>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    )
}

export default AnimatedText;