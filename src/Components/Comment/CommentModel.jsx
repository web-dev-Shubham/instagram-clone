import {  Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const CommentModel = ({onClose,isOpen}) => {
  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          
          <ModalBody>
            <div className='flex h-[75vh'>
                <div className='w-[45%] flex flex-col justify-center'>
                    <img className='max-h w-full' src="https://cdn.pixabay.com/photo/2023/04/24/16/53/young-woman-7948563_640.jpg" alt="" />
                </div>
                <div className='w-[55%] pl-10'>
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
                    

                </div>
            </div>
         
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModel