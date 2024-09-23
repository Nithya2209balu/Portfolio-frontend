
import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between'>
      <h1 className='text-secondary sm:text-xl text-2xl font-semibold'>PORTFOLIO</h1>
      <li><a className='text-secondary font-semibold cursor-pointer' href='/admin-login'>Admin</a></li>
      


    </div>
  )
}

export default Header