import React from 'react'
import data from '../assets/data'

const ProfileSlide = () => {
  return (
    <div className='pt-14 h-screen '>
        <div className='w-100vh overflow-hidden h-20 bg-red-500 '></div>
    <div className='flex px-[26px] gap-8 justify-start items-center overflow-scroll '>
        {
            data.map((data) =>{
                return(
                        <img className='w-[170px] h-[200px]' src={data.image} alt='nn' />
                )
            })
        }
    </div>
    </div>
  )
}

export default ProfileSlide