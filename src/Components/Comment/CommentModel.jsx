import {  Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import "./commentModel.css";

const CommentModel = ({onClose,isOpen,isSaved,isPostLiked,handelPostLike,handelSavedPost}) => {
  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          
          <ModalBody>
            <div className='flex h-[75vh '>
                <div className='w-[45%] flex flex-col justify-center'>
                    <img className='max-h w-full' src="https://cdn.pixabay.com/photo/2023/04/24/16/53/young-woman-7948563_640.jpg" alt="" />
                </div>
                <div className='w-[55%] pl-10 relative'>
                    <div className='flex justify-between  item-center py-5'>
                        <div className='flex item-center'>
                        <div>
                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/08/31/10/11/small-fire-butterfly-8224901_640.jpg" alt="" />
                        </div>
                        <div className='ml-2'>
                            <p>username</p>
                        </div>
                    </div>

                    <BsThreeDots></BsThreeDots>
                    </div>
                    <hr />
                    <div className='comment'>
                        {[1,1].map(()=><CommentCard></CommentCard>)}
                    </div>
                    
            <div className='absolute bottom-0 w-[90%]'>
                    <div className='flex justify-between item-center w-full py-4'>
                <div className='flex item-center space-x-2'>
                    {isPostLiked? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handelPostLike}></AiFillHeart>:<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handelPostLike}></AiOutlineHeart>}
                    <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'></FaRegComment>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'> </RiSendPlaneLine>
                    
                </div>
                <div className='cursor-pointer'>
                    {isSaved ?
                    <BsBookmarkFill onClick={handelSavedPost} className='text-xl hover:opacity-50 cursor-pointer text-black-700' ></BsBookmarkFill>:
                    <BsBookmark onClick={handelSavedPost} className='text-xl hover:opacity-50 cursor-pointer'></BsBookmark>}
                    
                    
                </div>
                </div>

            <div className='w-full py-2'>
                <p>10 likes</p>
                <p className='opacity-50 text-sm'>1 day ago</p>
            </div>

           
                <div className='flex item-center '>
                    <BsEmojiSmile className='mr-2 mt-2'></BsEmojiSmile>
                    <input className='CommentInput' type="text" placeholder='Add a Comment...'/>
                </div>
            
                    </div>
                  
              

                </div>
            </div>
         
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModel