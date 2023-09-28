import { Button, Modal, ModalBody, ModalCloseButton, ModalContent,ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa'

const CreatePostModel = ({
    onClose,isOpen
}) => {

    const [isDragOver,setIsDragOver]=useState(false);
    const [file,setFile]=useState();


    const handelDrop=(event)=>{
        event.preventDefault()
        const droppedFIle=event.dataTransfer.file[0];
        if(droppedFIle.type.startWith("image/") || droppedFIle.type.startWith("vido/")){
            setFile(droppedFIle)
        }
    }

    

    const handelDragOver=()=> {
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOver(true)
    }

    const handelDragLeave=()=> {
        setIsDragOver(false)
    }
    

  return (
    <div>
        <Modal  size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 item-center'>
            <p>Create New Post</p>
            <Button  className='' varient={"ghost"} size="sm" colorSchema={"blue"}> Share </Button>
          </div>
          <hr />
          <ModalBody>
            <div>
                <div>
                    <div 
                    onDrop={handelDrop} 
                    onDragOver={handelDragOver} 
                    onDragLeave={handelDragLeave}
                    className='drag-drop h-full'
                    >
                        <div>
                            <FaPhotoVideo className='text-3xl'></FaPhotoVideo>
                            <p>Drag Photos or videos here</p>
                        </div>
                        <label htmlFor="file-upload" className='custom-file-upload'>Select From Computer</label>
                        <input type="text" id="file-upload" accept="image/* , video/*" onChange={handelOnChange} />
                    </div>
                </div>
            </div>
          </ModalBody>
        
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePostModel