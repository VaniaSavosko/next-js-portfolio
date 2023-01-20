import React from 'react'
import { FaTelegramPlane, FaDribbble, FaGithub } from "react-icons/fa"
import Image from "next/image";
import { AboutMe } from '../constants/data'; 

const Navigation = () => {
    return (
        <section>
            <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>{AboutMe.name}</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300'>{AboutMe.position}</h3>
                <p className='text-xl py-5 leading-8 text-gray-800 md:text-base max-w-lg mx-auto dark:text-gray-300'>{AboutMe.title}</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
                <a className='cursor-pointer hover:text-teal-600' href='https://t.me/vania_savosko' target='_blank' rel='noreferrer'><FaTelegramPlane /></a>
                <a className='cursor-pointer hover:text-teal-600' href='https://dribbble.com/VaniaSavosko' target='_blank' rel='noreferrer'><FaDribbble /></a>
                <a className='cursor-pointer hover:text-teal-600' href='https://github.com/VaniaSavosko' target='_blank' rel='noreferrer'><FaGithub /></a>
            </div>

            <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:w-96 md:h-96'>
                <Image src={AboutMe.img} alt={AboutMe.name} fill style={{ objectFit: 'cover' }} />
            </div>
        </section>
    )
}

export default Navigation