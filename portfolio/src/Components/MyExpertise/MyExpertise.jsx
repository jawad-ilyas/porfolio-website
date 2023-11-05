import React, { useContext } from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import UserContext from '../../Context/WebsiteContext';

const MyExpertise = () => {


    const skills = [

        {
            img: " ",
            name: "Front End",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident possimus necessitatibus adipisci nam assumenda, consequuntur numquam minima ducimus sunt rerum sapiente saepe rem doloremque commodi debitis ea non a?"
        },

        {
            img: " ",
            name: "Front End",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident possimus necessitatibus adipisci nam assumenda, consequuntur numquam minima ducimus sunt rerum sapiente saepe rem doloremque commodi debitis ea non a?"
        },

        {
            img: " ",
            name: "Front End",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident possimus necessitatibus adipisci nam assumenda, consequuntur numquam minima ducimus sunt rerum sapiente saepe rem doloremque commodi debitis ea non a?"
        },

        {
            img: " ",
            name: "Front End",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident possimus necessitatibus adipisci nam assumenda, consequuntur numquam minima ducimus sunt rerum sapiente saepe rem doloremque commodi debitis ea non a?"
        },
        {
            img: " ",
            name: "Front End",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident possimus necessitatibus adipisci nam assumenda, consequuntur numquam minima ducimus sunt rerum sapiente saepe rem doloremque commodi debitis ea non a?"
        },

        {
            img: " ",
            name: "Front End",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident possimus necessitatibus adipisci nam assumenda, consequuntur numquam minima ducimus sunt rerum sapiente saepe rem doloremque commodi debitis ea non a?"
        },
    ]
    return (
        <div className='dark:bg-black'>


            <div className='md:max-w-screen-lg max-w-screen-sm mx-auto py-20  p-6 md:p-0'>
                <h1 className='md:text-4xl text-2xl font-semibold py-12 dark:text-white'>My Expertise
                </h1>
                <div className='grid md:grid-cols-3 grid-cols-1  gap-4 '>
                    {skills.map((items) => {
                        return <div className='bg-customHeroBg p-4 shadow rounded-lg cursor-pointer border-b-4 dark:bg-gray-700 dark:white dark:text-white border-gray-700 hover:duration-500 hover:border-b-4 dark:hover:border-white hover:border-blue-500'>
                            <img src='https://my-awesome-react-project.netlify.app/img/product-chain-1.png' />

                            <h1 className='my-4 font-semibold  text-2xl'>{items.name}</h1>
                            <p className='text-justify md:text-left'>{items.description}</p>
                        </div>
                    })}
                </div>



            </div>
        </div>
    )
}

export default MyExpertise