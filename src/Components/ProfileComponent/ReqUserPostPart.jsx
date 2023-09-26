import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import {BiBookmark} from 'react-icons/bi'
import ReqUserPostCard from './ReqUserPostCard'

const ReqUserPostPart = () => {
    const [activeTab,setActiveTab]=useState()
    const tabs= [

        {
            tab:"Post",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab:"Reels",
            icon:<RiVideoAddLine></RiVideoAddLine>
        },
        {
            tab:"Save",
            icon:<BiBookmark></BiBookmark>
        },
        {
            tab:"Tagged",
            icon:<AiOutlineUser></AiOutlineUser>
        }
    ]
  return (
    <div>

        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item)=><div onClick={()=> setActiveTab(item.tab)} className={`${activeTab===item.tab?"border-t border-black":'opactity-60'} flex item-center cursor-pointer py-2 text-sm `}>
                <p className='p1'>{item.icon}</p> 
                <p className='ml-1'>{item.tab}</p>
            </div>)}

            
        </div>

        <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
            </div>
        </div>

    </div>
  )
}

export default ReqUserPostPart