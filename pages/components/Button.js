import React from 'react'

const Button = (props) => {
  return (
    <a className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500
    text-white px-4 py-2 rounded-md border-cyan-500 border-2
    hover:bg-none hover:border-cyan-500 hover:border-2 hover:text-gray-900 dark:hover:text-white' target='_blank' rel='noreferrer' href={props.href}>
      {props.value}
    </a>
  )
}

export default Button
