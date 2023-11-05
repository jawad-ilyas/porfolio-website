import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='bg-white dark:bg-black' id="contact">

            <div className='md:max-w-screen-md max-w-screen-sm mx-auto bg-white dark:bg-black md:py-20  p-6'>

                <div className='text-center'>
                    <h4 className='text-xl font-medium'>Get In Touch</h4>
                    <h1 className='text-3xl font-semibold pt-2'>Contact Me</h1>
                    <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
                    </p>
                </div>
                <div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input {...register("firstName")} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input  {...register("lastName")} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" />
                            </div>
                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                <input type="text"  {...register("company")} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Expo Tech Solution " />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input type="tel"  {...register("phone")} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" />
                                {/* pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" */}
                            </div>


                        </div>

                        <div class="mb-6">
                            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                            <input   {...register("website")} type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jawadmughal.netlify.com" />
                        </div>
                        <div class="mb-6">
                            <label for="email"  {...register("email")} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
                        </div>

                        <div class="mb-6">
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea  {...register("subject")} className='w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white ' placeholder="Enter Your Message"></textarea>
                        </div>


                        <button type="submit" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact