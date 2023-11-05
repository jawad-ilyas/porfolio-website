import React from 'react'

import Porfolio from '../Porfolio/Porfolio'
const Model = ({ activeId, setShowModel }) => {

    console.log(activeId)
    const data = [
        {
            id: 1,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-1.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            technologies: ['html', 'tailwind css', 'react js '],

            catageroy: 'mobile'
        },
        {
            id: 2,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-1.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'mobile'
        },
        {
            id: 3,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-1.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'mobile'
        },
        {
            id: 4,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'mobile'
        },
        {
            id: 5,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'mobile'
        },
        {
            id: 6,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'mobile'
        },
        {
            id: 7,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
        , {
            id: 8,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png',

            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
        , {
            id: 9,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png',

            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
        , {
            id: 10,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png',


            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
        , {
            id: 11,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png',


            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
        , {
            id: 12,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png',

            title: 'jawad',
            description: 'Lorem ipsum d Lorem Lorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d LoremLorem ipsum d Lorem',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
    ];
    const portfolio = data.find(port => port.id === activeId)

    console.log(portfolio)
    return (
        <div onClick={()=>setShowModel(false)} className='w-full h-full fixed top-0 left-0 z-10 bg-customHeroBg bg-opacity-40'>


            <div className='md:w-1/3 w-10/12 p-4 absolute top-1/2 left-1/2 z-100 bg-customHeroBg text-black transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-md' >
                <div className='relative'>
                    <img src={portfolio?.imgSrc}></img>
                    <div onClick={()=>setShowModel(false)} className='cursor-pointer   absolute top-0 right-0 bg-black text-white w-6 h-6 rounded-full flex justify-center items-center -translate-x-1/2 translate-y-1/2 pb-1'>
                        x
                    </div>
                </div>
                <div>
                    <h2 className='text-white py-2'>{portfolio.title}</h2>
                    <p className=''>{portfolio.description}</p>
                    <div className='flex items-center mt-1'>
                        <h4 className='font-semibold me-2'>Technologies : </h4>
                        {portfolio?.technologies?.map((tech, index) => (
                            <span   className='capitalize cursor-pointer  border px-2 py-1 mr-2  border-gray-300 rounded-md' key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <button className='py-2 px-4  text-white rounded-lg bg-purple-500  hover:border-purple-600 border-2 hover:text-purple-500 hover:duration-700 hover:bg-customHeroBg'>Live Site</button>
                </div>


            </div>

        </div>
    )
}

export default Model