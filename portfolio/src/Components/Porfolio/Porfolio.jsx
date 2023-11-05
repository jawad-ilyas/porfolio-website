import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Model from '../Model/Model';
import { BsArrowUpRight } from 'react-icons/bs';
const Porfolio = () => {

    const data = [
        {
            id: 1,
            imgSrc: 'https://my-awesome-react-project.netlify.app/img/placeholder-image-1.png',
            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            technologies : ['html' , 'tailwind css' , 'react js '],
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

            title: 'Ahuse',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
            linkText: 'View In GitHub',
            catageroy: 'web'
        }
    ];

    const [nextItems, setNextItem] = useState(3);
    const [portfolio, setPortfolio] = useState(data)
    const [selectTab, setSelectTab] = useState('all')
    const [showModel, setShowModel] = useState(false)
    const [activeId, setActiveId] = useState(null)


    const showModelHandler = id => {
        setShowModel(true);
        console.log("activeId " + id);
        setActiveId(id);
    }

    useEffect(() => {
        console.log("activeId after " + activeId);
        showModel && <Model setShowModel={showModel} setActiveId={activeId} />
    }, [activeId]);

    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolio(data)
        }
        else if (selectTab === 'web') {
            const FilterData = data.filter(item => item.catageroy === "web")
            setPortfolio(FilterData)
        }
        else if (selectTab === 'mobile') {
            const FilterData = data.filter(item => item.catageroy === "mobile")
            setPortfolio(FilterData)
        }
    }, [selectTab])

    const loadMoreHandler = () => {
        setNextItem(prev => prev + 3);
    }
    return (
        <div className='py-20 dark:bg-black ' id="portfolio">
            <div className='md:max-w-screen-lg max-w-screen-sm mx-auto p-6 md:p-0'>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <h1 className='text-3xl font-semibold my-4 dark:text-white py-4'>My Portfolio
                    </h1>
                    <div className='mb-4 md:mb-0 overflow-x-auto md:overflow-hidden dark:text-white'>
                        <button onClick={() => setSelectTab("all")} className=' border px-4 py-1 mr-2  border-gray-300 rounded-md'>ALL</button>
                        <button onClick={() => setSelectTab("mobile")} className=' border px-4 py-1 mr-2  border-gray-300 rounded-md'>REACT JS</button>
                        <button onClick={() => setSelectTab("web")} className=' border px-4 py-1 mr-2  border-gray-300 rounded-md'>MERN</button> 
                        <button onClick={() => setSelectTab("web")} className=' border px-4 py-1 mr-2  border-gray-300 rounded-md'>PHP</button>
                        <button onClick={() => setSelectTab("web")} className=' border px-4 py-1 mr-2  border-gray-300 rounded-md'>WORDPRESS</button>
                        <button onClick={() => setSelectTab("web")} className=' border px-4 py-1 mr-2  border-gray-300 rounded-md'>SQUARE SPACE</button>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 mb-6 gap-8'>
                    {portfolio?.slice(0, nextItems)?.map((item, index) => (
                        <div key={item.id} className='group bg-white shadow-lg rounded-lg dark:bg-gray-700  dark:text-white '>
                            <img onClick={() => showModelHandler(item.id)} src={item.imgSrc} alt='Placeholder' />
                            <div className='w-full h-full bg-purple-400 bg-opacity-40 absolute top-0 left-0 z-10 hidden group-hover:block'> </div>
                            <div className='mx-8 pb-8'>
                                <h1 className='font-semibold py-3'>{item.title}</h1>
                                <p className='font-light pt-1 pb-2'>{item.description}</p>
                                <a className='border-b-2 cursor-pointer flex items-center'><p>{item.linkText}</p> <BsArrowUpRight className='ms-1' /></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center'>
                    {nextItems < portfolio.length && data.length > 6 && (<button onClick={loadMoreHandler} className='bg-purple-600 rounded-md px-4 py-2 text-white '>Load more</button>)}

                </div>
            </div>

            <div>
                {showModel && activeId!=null && <Model setShowModel={setShowModel} activeId={activeId} />}
            </div>

        </div>
    )
}

export default Porfolio