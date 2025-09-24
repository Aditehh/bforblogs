import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <div className="py-5 px-5 md:px-12 lg:px-28">
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-bold'>
                        bforBLOG
                    </p>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 rounded-2xl sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                        Get started
                    </button>
                </div>
                <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-5xl font-medium '>
                        Latest Blogs
                    </h1>
                    <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus necessitatibus, rerum ad in saepe debitis repudiandae exercitationem laudantium eveniet id sequi voluptatum maiores ipsum voluptate tempora eum porro aliquid beatae modi eaque. Cumque, minus? Id eligendi ut aliquid beatae illo reprehenderit impedit expedita.
                    </p>
                    <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border shadow-[-7px_7px_0px_#000000] border-black' action="">
                        <input type="email" placeholder='Enter email' className='pl-4 outline-none' />
                        <button
                        type='submit'
                         className='border-l border-black py-4 px-4 sm:px-8 active:bg-black active:text-white '> Subscribe </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header
