import React, { useContext } from 'react'
import UserContext from '../../Context/WebsiteContext'
const About = () => {



    const handleValue = (value) =>{

        console.log(value)
        SetUser({"value" : value})
    }
    return (
        <div className='dark:bg-black dark:text-white' id="about">

            <div className='md:max-w-screen-lg max-w-screen-sm mx-auto py-20  p-6 md:py-20'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex-1'>
                        <img src='https://my-awesome-react-project.netlify.app/img/hero_img.png'></img>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-3xl font-semibold my-4'>About Us
                        </h1>

                        <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, distinctio alias temporibus nesciunt repellendus nostrum velit commodi eveniet placeat sapiente voluptatibus laudantium cumque. Voluptates suscipit eius consectetur in atque nostrum</p>
                        <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, distinctio alias temporibus nesciunt repellendus nostrum velit commodi eveniet placeat sapiente voluptatibus laudantium cumque. Voluptates suscipit eius consectetur in atque nostrum</p></div>

                </div>

            </div>
        </div>
    )
}

export default About