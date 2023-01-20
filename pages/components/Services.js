import React from 'react'
import Image from "next/image";
import { Offer, Skills } from '../constants/data';

const Services = () => {
    return (
        <section>
            <div className=' text-center pt-20 max-w-3xl mx-auto'>
                <h3 className='text-3xl py-1 dark:text-white'>{Offer.title}</h3>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>{Offer.desc}</p>
                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>{Offer.desc2}</p>
            </div>

            <div className='lg:flex gap-10 md:flex-row md:flex-wrap md:gap-5'>

            {Skills.map((Skills) => (
                <div key={Skills.id} className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white max-w-md mx-auto hover:bg-teal-100 dark:hover:bg-gray-300'>
                <Image src={Skills.img} alt={Skills.name} width={100} height={100} className='inline-block' />
                <h3 className='text-lg font-medium pt-8 pb-2'>
                    {Skills.name}
                </h3>
                <p className='py-2'>
                    {Skills.desc}
                </p>
                <h4 className='py-4 text-teal-600 text-base font-medium'>{Skills.value}</h4>
                {Skills.instrument.map((val, index) => ( 
                    <div key={index}>
                        <p className='text-gray-800 py-1'>{val}</p>
                    </div> ))}
            </div>
            ))}

            </div>
        </section>
    )
}

export default Services
