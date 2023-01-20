import React from 'react'
import { FaTelegramPlane, FaDribbble, FaGithub } from "react-icons/fa"
import { footer } from '../constants/data'

const Footer = () => {
    return (
        <section className='text-center py-8'>
            <div className='border-teal-600 border-t-2 py-8'></div>
            <div>
                <h1 className='font-burtons text-base dark:text-teal-600'>portfolio</h1>
                <p className='text-sm py-5 leading-8 text-gray-800 md:text-xs max-w-lg mx-auto dark:text-gray-300'>
                    {footer.title}
                </p>
            </div>
            <div className='text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
                <a className='cursor-pointer hover:text-teal-600' href='https://t.me/vania_savosko' target='_blank' rel='noreferrer'><FaTelegramPlane /></a>
                <a className='cursor-pointer hover:text-teal-600' href='https://dribbble.com/VaniaSavosko' target='_blank' rel='noreferrer'><FaDribbble /></a>
                <a className='cursor-pointer hover:text-teal-600' href='https://github.com/VaniaSavosko' target='_blank' rel='noreferrer'><FaGithub /></a>
            </div>
            <p className='text-sm py-5 leading-8 text-gray-800 md:text-xs max-w-lg mx-auto dark:text-gray-300'>
                <small>&copy; All rights reserved. 2023</small>
            </p>
        </section>
    )
}

export default Footer
