import React from 'react'
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLiked,setIsCommentLike]=useState();
    const handleLike=()=> {
        setIsCommentLike(!isCommentLiked);
    }
  return (
    <div>
        <div className='flex item-center justify-between py-5'>
            <div className='flex'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/09/03/11/30/fire-8230528_640.jpg" alt="" />
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>

                        <span className='ml-2'>nice post</span>
                   </p>
                   <div className='flex item-center space-x-3 text-xs opacity-60 pt-2'>
                    <span>1 min ago</span>
                    <span>23 likes</span>
                   </div>
                    
                </div>
            </div>

            {isCommentLiked ? 
             (<AiFillHeart onClick={handleLike} className='text-xs hover:opacity-50 cursor-pointer text-red-600 '></AiFillHeart> )
             :
             (<AiOutlineHeart onClick={handleLike} className='text-xs hover:opacity-50 cursor-pointer'></AiOutlineHeart>)
            }
        </div>
    </div>
  )
}

export default CommentCard