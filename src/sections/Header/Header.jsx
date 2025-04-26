import React from 'react'
import { Navbar } from '../../components'
import { FaLocationDot } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'motion/react'
import './Header.css'

const Header = () => {

  const MotionFaLocationDot = motion(FaLocationDot)

  return (
    <header className='header__bg w-full h-screen relative pt-20 '>
        <Navbar/>
        <div className='absolute padding-x inset-0 z-0 bg-black/70 flex flex-col  justify-center items-center'>
          <div className='text-5xl sm:text-6xl lg:text-8xl w-[15ch] md:w-[15ch] leading-tight uppercase  text-center'>
            <p className=' text-white font-bold font-cormorant'>THE BEST Catering for:</p>
            <p className='text-4xl sm:text-5xl lg:text-7xl font-semibold font-alt text-secondary'>
              <TypeAnimation
                sequence={[
                  'Small Gatherings', // Types 'One'
                  3000, // Waits 1s
                  'Birthday Parties', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Anniversaries',
                  2000, // Types 'Three' without deleting 'Two'
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                cursor={true}
                repeat={Infinity}
              />
            </p>
          </div>
          <div className='flex items-center gap-2 mt-2'>
            <MotionFaLocationDot
              animate={{y: [2, -8, 2]}}
              transition={{duration: 2, repeat: Infinity}}
              fontSize={25} color='#fff'/>
            <p className='mt-3 text-md font-alt text-gray-300 '>In the City of Golden Friendship</p>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1745043923">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
            </svg>
        </div>
    </header>
  )
}

export default Header
