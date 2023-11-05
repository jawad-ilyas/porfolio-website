import React, { useContext } from 'react'
import UserContext from '../../Context/WebsiteContext'
const HeroSection = () => {

   
    return (
        <div className='h-screen z-10 bg-customHeroBg dark:bg-black dark:text-white'>

            <div className='md:max-w-screen-lg max-w-screen-sm mx-auto pt-24 pb-12 flex items-center flex-col md:flex-row p-10 md:pt-36'>
                <div className='flex-1 order-2 md:order-1 '>
                    <h6 className='font-semibold text-xl'>Hey, I'm Jawad Mughal</h6>
                    <div className='flex md:flex-col flex-row my-1 md:my-0'>
                        <h1 className='font-bold text-2xl  md:text-6xl md:mt-4 mb-0'>Full Stack
                        </h1>
                        <h1 className='font-bold text-2xl  md:text-6xl md:mb-4 mb-0 ms-2 md:ms-0'>  Developer
                        </h1>
                    </div>
                    <p className='text-base'>Hi there, I am jawad Mughal a software engineer from Pakistan. I'm a full-time freelancer Web designer with a degree in Web Development from the University of Central Punjab. I serve my expertise for your business effective worldwide Internet exposure at low prices.</p>
                    <button className='py-4 px-8 mt-4 text-white rounded-lg bg-purple-500  hover:border-purple-600 border-2 hover:text-purple-500 hover:duration-700 hover:bg-customHeroBg'>Get In Touch</button>
                </div>
                <div className='flex-1 order-1 md:order-2'>
                    <img src='https://my-awesome-react-project.netlify.app/img/hero_img.png'></img>
                </div>
            </div>


        </div>

    )
}

export default HeroSection