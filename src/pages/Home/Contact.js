import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
 
  const{ portfolioData} = useSelector((state) =>state.root);
 const contact = portfolioData && portfolioData.contact ? portfolioData.contact : {};
 
  return (
    <div>
        <SectionTitle title='Say Hello'/>
        <div className='flex sm:flex-col items-center justify-between'>
          <div className='flex flex-col '>
            
          <p className="text-tertiary"> {'{'} </p>

            {Object.keys(contact).map((key)=>key !== "_id" && (

                <p  className='ml-5'>
                    <span className='text-tertiary'>{key} :</span>
                    <span className='text-tertiary'>{contact[key]}</span>
                </p>
            ))
            
            }
            <p className="text-tertiary"> {'}'} </p>
          </div>
<div className='h-[60vh] w-1/2 sm:w-full'> 
<dotlottie-player src="https://lottie.host/2520d336-8fe7-4d4a-823e-c2ff8974b088/W6BYXwOdeT.json"
 background="transparent"
  speed="1" 
   autoplay></dotlottie-player>
    </div>
        </div>
    </div>
  )
}

export default Contact