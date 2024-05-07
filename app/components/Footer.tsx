import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-10 flex items-center  border-t-2 border-solid border-black'>
            <div className='px-10 py-10 mt-10 w-full flex items-center justify-between'>
                <span> {new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>Made with ❤️ by <Link className='underline' href="https://github.com/SaiKrishnaTej23" target="_blank">Teja Pothapragada</Link></div>
            </div>
        </footer>
    )
}

export default Footer;