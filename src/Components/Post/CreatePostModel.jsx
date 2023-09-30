import { Button, Modal, ModalBody, ModalContent,ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa'
import "./CreatePostModel.css"
import { GrEmoji } from 'react-icons/gr'
import { GoLocation } from 'react-icons/go'

const CreatePostModel = ({
    onClose,isOpen
}) => {

    const [isDragOver,setIsDragOver]=useState(false);
    const [file,setFile]=useState();
    const [caption,setCaption]=useState("");


    const handelDrop=(event)=>{
        event.preventDefault()
        const droppedFIle=event.dataTransfer.file[0];
        if(droppedFIle.type.startWith("image/") || droppedFIle.type.startWith("vido/")){
            setFile(droppedFIle)
        }
    }

    

    const handelDragOver=(event)=> {
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOver(true)
    }

    const handelDragLeave=()=> {
        setIsDragOver(false)
    }
    
    const handelOnChange=(e)=> {
        const file=e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            setFile(file);
        }
        else{
            setFile(null);
            alert("Please select an image or video")
        }
    }
    const handelCaptionChange=(e)=> {
        setCaption(e.target.value)
    }
    

  return (
    <div>
        <Modal  size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 item-center'>
            <p>Create New Post</p>
            <Button  className='' varient={"ghost"} size="sm" colorSchema={"blue"}> Share </Button>
          </div>
          <hr />
          <ModalBody>
            <div className='h-[70vh] justify-between pb-5 flex'>
                <div className='w-[50%]'>
                 {!file && <div 
                    onDrop={handelDrop} 
                    onDragOver={handelDragOver} 
                    onDragLeave={handelDragLeave}
                    className='drag-drop h-full'
                    >
                        <div>
                            <FaPhotoVideo className='text-3xl'></FaPhotoVideo>
                            <p className=''>Drag Photos or videos here</p>
                        </div>
                        <label htmlFor="file-upload" className='custom-file-upload'>Select From Computer</label>

                        <input className='fileInput' type="file" id="file-upload" accept="image/* , video/*" onChange={handelOnChange} />
                    </div>
                 }   
                 {file && <img class="max-h-full" src={URL.createObjectURL(file)} alt="" /> }

                
                </div>
                <div className='w-[1px] border  h-full'></div>
                <div className='w-[50%]'>
                    <div className='flex item-center px-2'>
                        <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg" alt="" />
                        <p className='font-semibold ml-4'>username</p>
                    </div>
                    <div className='px-2'>
                        <textarea 
                        placeholder='Write a Caption' 
                        className='captionInput' 
                        name="caption" 
                        rows="8"
                        onChange={handelCaptionChange}>
                        </textarea>
                    </div>
                    <div className='flex justify-between px-2'>
                        <GrEmoji/>
                        <p className='opacity-70'>{caption?.length} /2,200</p>
                    </div>
                    <hr />

                    <div className='flex p-2 justify-between item-center'>
                        <input className='locationInput' type="text" placeholder='location' name='location' />
                        <GoLocation/>
                    </div>
                    <hr />
                </div>
            </div>
          </ModalBody>
        
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePostModel;