import React from 'react';
import { useSelector } from 'react-redux';


function Intro() {
  const{loading, portfolioData} = useSelector((state) =>state.root);
  const {intro}=portfolioData;
  const {firstName , lastName , welcomeText , description , caption} = intro;
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8  py-10 sm:gap-4'>
        <h1 className='text-white'>{welcomeText || ''} </h1>
        <h1 className='text-secondary sm:text-3xl text-7xl font-semibold'>{firstName || ""} {lastName || ""}</h1>
        <h1 className='text-white sm:text-3xl text-5xl font-semibold'>{caption || ""}s</h1>
        <p className='text-white w-2/3'>{description || ""}</p>
    <button className='border-2 border-tertiary text-white px-10 py-3 rounded-md'>Get Started</button>
    
    
    </div>
  )
}

export default Intro

