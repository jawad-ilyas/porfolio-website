import React, { useEffect } from 'react'
import userTheme from '../../Context/Theme'
import useTheme from '../../Context/Theme';
import Aos from "aos";
import "aos/dist/aos.css"

const Navbar = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    const { themeMode, darkTheme, lightTheme } = useTheme();
    const menuLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Portfolio",
            id: 'portfolio',
            link: "/",
        },
        {
            name: "About Me",
            id: 'about',

            link: "/",
        },
        {
            name: "Testimonials",
            id: 'testimonials',
            link: "/",
        },    
          {
            name: "Contact",
            id: 'contact',
            link: "/",
        },
    ]
    const onChangeBtn = (e) => {
        const darkThemeStatus = e.currentTarget.checked;
        if (darkThemeStatus) {
            darkTheme();
        }
        else {
            lightTheme();
        }
    }


    return (
        <div className='bg-white dark:bg-black dark:text-white dark:shadow-white py-8 shadow-sm z-10 w-full fixed  top-0'>
            <div className=' max-w-screen-lg mx-auto flex justify-between items-center'>
                <div className='font-bold'> JAWAD MUGHAL</div>
                <div>
                    <ul className='flex '>
                        {menuLinks.map((items) => {
                            return <li className='mr-8 cursor-pointer hover:text-purple-600' onClick={() => scrollToSection(items.id)}>{items.name}</li>
                        })}
                    </ul>



                </div>
                <div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            onChange={onChangeBtn}
                            checked={themeMode === "dark"}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                        {/* <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span> */}
                    </label>

                    {/* <button className='py-2 px-4  text-white rounded-lg bg-purple-500  hover:border-purple-600 border-2 hover:text-purple-500 hover:duration-700 hover:bg-customHeroBg'>Contact Us</button> */}


                </div>
            </div>
        </div>
    )
}

export default Navbar