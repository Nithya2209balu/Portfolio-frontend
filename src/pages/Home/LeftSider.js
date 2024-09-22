import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10  sm:static '>
        <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row '>
         <a href='https://www.linkedin.com/in/nithya22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><i class="ri-linkedin-box-line text-gray-600 "></i></a>
         <a href='nithyabalu2209@gmail.com'><i class="ri-mail-line text-gray-600 "></i></a>
        <a href='https://github.com/Nithya2209balu'><i class="ri-github-fill text-gray-600 "></i></a>
        
        
        </div>
        <div className='w-[1px] h-32 bg-[#125f63] sm:hidden '>

        </div>
        </div>
    </div>
  )
}

export default LeftSider