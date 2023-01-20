import React from 'react'
import Image from "next/image";
import {portfolioData} from '../../public/portfolio-data'
import { Work } from '../constants/data';
import Button from './Button';

const Portfolio = () => {
  return (
    <section>
          <div className='text-center pt-20 max-w-3xl mx-auto'>
            <h3 className='text-3xl py-1 dark:text-white'>{Work.title}</h3>
            <p className='text-lg py-2 leading-8 text-gray-800 dark:text-gray-300'>{Work.desc}</p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
              Would you like me to work on your project? 
              <a className='hover:text-cyan-700 dark:hover:text-cyan-300 text-cyan-500'
              href="mailto:savoskoua@gmail.com" target="_blank" rel="noreferrer"> Email me.</a>  
            </p> 
          </div>

          <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              {portfolioData.map((work) => (
                  <div key={work.id} className='basis-1/3 flex-1 relative'>
                      <a href={work.url} target='_blank' rel='noreferrer'>
                        <Image src={work.img} alt={work.id} className='rounded-lg object-cover hover:opacity-50' width={'100%'} height={'100%'} />
                      </a>
                  </div>
              ))}
            </div>
              <div className='py-8'>
                <Button value='See more on dribbble' href='https://dribbble.com/VaniaSavosko' />
              </div>
          </div>
        </section>
  )
}

export default Portfolio
