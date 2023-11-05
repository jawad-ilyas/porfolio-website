import React from 'react'
import userTheme from '../../Context/Theme'
import useTheme from '../../Context/Theme';
import { FiLinkedin } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {



    const menuLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Portfolio",
            link: "/",
        },
        {
            name: "About Me",
            link: "/",
        },
        {
            name: "Testimonials",
            link: "/",
        },
    ]

    return (
        <div className='bg-customHeroBg dark:bg-black dark:text-white dark:shadow-white py-24 shadow-sm z-50 w-full '>
            <div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='font-bold'> JAWAD MUGHAL</div>
                <div className='py-8 md:py-0'>
                    <ul className='flex '>
                        {menuLinks.map((items) => {
                            return <li className='mr-8 cursor-pointer hover:text-purple-600'>{items.name}</li>
                        })}
                    </ul>
                </div>
                <div className='flex '>
                    <FiLinkedin size={30} />
                    <FiFacebook size={30} />
                    <FaXTwitter size={30} />
                    <AiOutlineInstagram size={30} />
                    <AiOutlineYoutube size={30} />


                </div>
            </div>
        </div>
    )
}

export default Footer