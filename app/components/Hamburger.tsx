import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import React from 'react'
import { CustomLink } from './NavBar';

const Hamburger = () => {
    return (
        <div className='flex md:hidden'>
            <Drawer >
                <DrawerTrigger> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg></DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerClose />
                    </DrawerHeader>
                    <div className='w-full flex flex-col items-center justify-between '>
                        <CustomLink href='/' className='py-4' title='Home'> </CustomLink>
                        <CustomLink href='/about' className='py-4' title='About'></CustomLink>
                        <CustomLink href='/projects' className='py-4' title='Projects'></CustomLink>
                        <CustomLink href='/contact' className='py-4' title='Contact'></CustomLink>
                    </div>

                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Hamburger;