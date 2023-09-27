import React from 'react'
import { useState } from 'react';
import {BsBookmark, BsBookmarkFill, BsThreeDots} from 'react-icons/bs'
import "./PostCard.css"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';

const PostCard = () => {

    const [showDropDown,setShowDropDown]=useState(false);
    const [isPostLiked,setIsPostLiked] =useState(false);
    const [isSaved,setIsSaved]=useState(false);

    const handelSavedPost=()=> {
        setIsSaved(!isSaved);
    }

    const handelPostLike=()=> {
        setIsPostLiked(!isPostLiked);
    }

    const handelClick=()=> {
        setShowDropDown(!showDropDown);
    }
  return (
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between item-center w-full py-4 px-5'>
                <div className='flex item-center'>
                    <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/09/14/20/11/elephants-8253675_640.jpg" alt="" />
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>Username</p>
                        <p className='font-thin text-sm'>Location</p>
                    </div>
                </div>

                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handelClick}/>
                </div>
                <div  className='dropdown-content'>
                 {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p> }
                </div> 
            </div>

            <div className='w-full'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2023/04/24/16/53/young-woman-7948563_640.jpg" alt="" />
            </div>

            <div className='flex justify-between item-center w-full px-5 py-4'>
                <div className='flex item-center space-x-2'>
                    {isPostLiked? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handelPostLike}></AiFillHeart>:<AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handelPostLike}></AiOutlineHeart>}
                    <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'></FaRegComment>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'> </RiSendPlaneLine>
                    
                </div>
                <div className='cursor-pointer'>
                    {isSaved ?
                    <BsBookmarkFill onClick={handelSavedPost} className='text-xl hover:opacity-50 cursor-pointer text-black-700' ></BsBookmarkFill>:
                    <BsBookmark onClick={handelSavedPost} className='text-xl hover:opacity-50 cursor-pointer'></BsBookmark>}
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard