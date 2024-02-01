import React from 'react'
import { Link } from 'react-router-dom'
function Logo({type}) {
  
  return (
    <div className=''>
      <Link to='/' className={`text-2xl font-semibold dark:text-white ${type && "text-white text-4xl"}`}>
        Blog
        <span className={`text-3xl text-rose-500 ${type && "text-5xl font-bold"}`}>
            wave
        </span>
      </Link>
    </div>
  )
}

export default Logo
