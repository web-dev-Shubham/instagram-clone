import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/07/26/16/59/men-8151667_640.jpg" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div><AiFillHeart></AiFillHeart> <span>10</span> </div>
                <div><FaComment></FaComment> <span>30</span></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ReqUserPostCard