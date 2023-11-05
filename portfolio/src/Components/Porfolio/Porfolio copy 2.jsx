import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Porfolio = () => {
    return (
        <div>
            <div className='md:max-w-screen-lg max-w-screen-sm mx-auto'>
                <div>
                    <h1 className='text-3xl font-semibold my-4'>My Portfolio
                    </h1>
                </div>
                <div className='grid grid-cols-3 mb-6 gap-8'>
                    <div className='bg-white shadow-lg rounded-lg'>

                        <img src='https://my-awesome-react-project.netlify.app/img/placeholder-image.png'></img>

                        <div className='mx-8 pb-8'>
                            <h1 className='font-semibold pt-4'>Ahuse</h1>
                            <p className='font-light pt-1 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>

                            <a className='border-b-2 cursor-pointer'>
                                View In GitHub
                            </a>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg'>

                        <img src='https://my-awesome-react-project.netlify.app/img/placeholder-image.png'></img>

                        <div className='mx-8 pb-8'>
                            <h1 className='font-semibold'>Ahuse</h1>
                            <p className='font-light pt-1 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>

                            <a className='border-b-2 cursor-pointer'>
                                View In GitHub
                            </a>
                        </div>
                    </div> <div className='bg-white shadow-lg rounded-lg'>

                        <img src='https://my-awesome-react-project.netlify.app/img/placeholder-image.png'></img>

                        <div className='mx-8 pb-8'>
                            <h1 className='font-semibold'>Ahuse</h1>
                            <p className='font-light pt-1 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>

                            <a className='border-b-2 cursor-pointer'>
                                View In GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porfolio