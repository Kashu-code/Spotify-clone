import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' onClick={()=>navigate(-1)} src={assets.arrow_left} alt="" />
                    <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' onClick={()=>navigate(+1)} src={assets.arrow_right} alt="" />
                </div>
                <div className='flex items-center gap-2'>
                    <p className='bg-white text-black text-base px-4 py-2 rounded-3xl cursor-pointer hidden md:block' >Explore Premium</p>
                    <p className='bg-black text-white py-2 px-4 rounded-3xl text-base cursor-pointer hidden md:block '>Install App</p>
                    <p className='bg-purple-500 text-black w-9 h-9 rounded-full flex justify-center items-center'>T</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                        <p className=' bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                        <p className=' bg-black text-white px-4 py-[5px] rounded-2xl cursor-pointer'>Music</p>
                        <p className=' bg-black text-white px-4 py-[5px] rounded-2xl cursor-pointer'>Podcast</p>
            </div>
        </>
    )
}

export default Navbar
