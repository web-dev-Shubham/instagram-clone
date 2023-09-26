import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponent/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponent/ReqUserPostPart'

const profile = () => {
  return (
    <div className='px-20'>
        <div >
            <ProfileUserDetails/>
        </div>
        <div>
            <ReqUserPostPart></ReqUserPostPart>
        </div>

    </div>
  )
}

export default profile