import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Porfolio = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
 
  const cardData = [
    {
        title: 'Ahuse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
        imageSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
    },
    {
        title: 'Ahuse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
        imageSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
    },
    {
        title: 'Ahuse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
        imageSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
    },
    {
        title: 'Ahuse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
        imageSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
    },
    {
        title: 'Ahuse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
        imageSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
    },
    {
        title: 'Ahuse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
        imageSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
    },

];

  return (
    <div className='bg-black'>
      <div className='md:max-w-screen-lg max-w-screen-sm mx-auto'>
        <div>
          <h1 className='text-3xl font-semibold my-4'>My Portfolio</h1>
        </div>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg '>
              <img src={card.imageSrc} alt={`Image ${index}`} />
              <div className='mx-8 pb-8'>
                <h1 className='font-semibold pt-4'>{card.title}</h1>
                <p className='font-light pt-1 pb-2'>{card.description}</p>
                <a className='border-b-2 cursor-pointer'>
                  View In GitHub
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Porfolio;
