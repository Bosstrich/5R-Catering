import React from 'react'
import useScroll from '../../hooks/useHooks'
import { IoIosArrowUp } from "react-icons/io";

const FloatButton = () => {

   const isScrolled = useScroll(50);

   const handleClick = () => {

        window.scrollTo({top: 0, behavior: 'smooth'});
   }

  return (
    <div className={`${isScrolled? '-translate-y-0': 'translate-y-full'} duration-300  cursor-pointer z-[5] fixed -bottom-1 rounded-md left-1/2 -translate-x-1/2 bg-secondary hover:bg-secondary-dark`}>
        <button className='flex items-center gap-3 px-4 py-2' type='button' onClick={handleClick}>
            <IoIosArrowUp className='inline-block text-white'/>
            <p className='inline-block text-white'>Back to Top</p>
        </button>
      
    </div>
  )
}

export default FloatButton
