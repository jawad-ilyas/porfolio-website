import React, { useContext } from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import UserContext from '../../Context/WebsiteContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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


            <div className='md:max-w-screen-lg max-w-screen-sm mx-auto py-20 '>
                <h1 className='text-6xl font-semibold my-12 dark:text-white'>Customer Feedback

                </h1>
                {/* <div className='grid md:grid-cols-3 grid-cols-1  gap-4'> */}
                <Slider {...settings}>

                    {skills.map((items) => {
                        return <div>
                            <div className='bg-customHeroBg p-4 m-2  shadow rounded-lg cursor-pointer border-b-4  dark:bg-gray-700 dark:white dark:text-white border-customHeroBg hover:duration-500 hover:border-b-4 dark:hover:border-purple-700 hover:border-blue-500  '>
                                <img src='https://my-awesome-react-project.netlify.app/img/product-chain-1.png' />

                                <h1 className='my-4 font-semibold  text-2xl'>{items.name}</h1>
                                <p>{items.description}</p>
                            </div>
                        </div>

                    })}
                </Slider>
                {/* </div> */}



            </div>
        </div>
    )
}

export default Review