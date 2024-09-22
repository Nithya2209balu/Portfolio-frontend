import React from 'react'


function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
    <div className='flex gap-5 text-6xl font-semibold sm:text-3xl'>
        <h1 className= 'n text-secondary '>N</h1>
        <h1 className='i text-white '>I</h1>
        <h1 className='t text-tertiary '>T</h1> 
        <h1 className= 'h text-secondary '>H</h1>
        <h1 className='y text-white '>Y</h1>
        <h1 className='a text-tertiary '>A</h1>

    </div>
    </div>
  )
}

export default Loader