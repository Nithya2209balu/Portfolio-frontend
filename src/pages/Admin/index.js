
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import AdminProjects from './AdminProjects';
import AdminContact from './AdminContact';
import { useSelector } from 'react-redux';


const {TabPane} = Tabs;

function Admin() {
    const {portfolioData}=useSelector((state) => state.root);

    useEffect(()=>{
        if(!localStorage.getItem("token")){
            window.localStorage.href = "http://localhost:3000/admin-login";
        }

    },[])

  return (
    <div>
        <Header/>
        <div className='flex gap-10 items-center py-2 px-5 justify-between'>
       <div className='flex gap-10 items-center' >
       <h1 className='text-3xl text-primary '>Portfolio Admin</h1>
        <div className='w-60 h-[1px] bg-gray-500'> </div>
       </div>
       <h1 className="underline text-primary text-xl cursor-pointer"
        onClick={()=>{
            localStorage.removeItem("token");
            window.location.href="http://localhost:3000/admin-login";
            
        }}>Logout</h1>
        </div>
        
       {portfolioData &&  <div className=' px-5'>
            <Tabs defaultActiveKey='1'>
                <TabPane tab="Intro" key="1">
                    <AdminIntro/>
                </TabPane>
                <TabPane tab="About" key="2">
                    <AdminAbout/>
                </TabPane>
                <TabPane tab="Projects" key="3">
                    <AdminProjects/>
                </TabPane>
                <TabPane tab="Contact" key="4">
                    <AdminContact/>
                </TabPane>
            </Tabs>
        </div>}
    </div>
  )
}

export default Admin