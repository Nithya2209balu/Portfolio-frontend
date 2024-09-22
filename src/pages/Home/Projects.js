import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useState } from 'react';

import { projects } from '../../resources/projects';
import { useSelector } from 'react-redux';

function Projects() {
    const [selectedItemIndex,setselectedItemIndex]=useState(0);
    const{ portfolioData} = useSelector((state) =>state.root);
   const {projects} = portfolioData;
  return (
    <div>
        <SectionTitle title="Projects"/>

        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:gap-4 sm:flex-row sm:overflow-x-scroll sm:w-full'>
            {projects.map((project,index)=>(
                <div onClick={()=>{
                    setselectedItemIndex(index);
}} className='cursor-pointer'>
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index 
                        ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
                        :"text-white"
                        }`}>
                            {project.title}
                            </h1>
                    </div>
            ))}

        </div>
        
       <div className='flex items-center justify-center gap-10 sm:flex-col'  >
       <img src={projects[selectedItemIndex]? projects[selectedItemIndex].image:''} alt='' className='bg-transparent  h-70 w-72 '/>
       
       <div className='flex flex-col gap-5'>
        <h1 className=' text-secondary text-xl'>{projects[selectedItemIndex]? projects[selectedItemIndex].title:''}</h1>
        <p className='text-white'>{projects[selectedItemIndex]? projects[selectedItemIndex].description:''}</p>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad temporibus dicta, iste nemo maxime aspernatur similique possimus itaque quam nobis magnam illum debitis soluta voluptatum. Dolor vel eum unde?</p>
          </div>
       </div>
        </div>
    </div>
  );
}

export default Projects