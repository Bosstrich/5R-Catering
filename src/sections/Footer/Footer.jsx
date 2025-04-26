import React from 'react'
import { Logo } from '../../components'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-primary padding-x py-12 font-alt'>
      <div className='flex flex-col sm:flex-row sm:justify-around items-center gap-10'>
        <div className='text-white flex-1 order-2 sm:order-1 text-center'>
          <h1 className='text-secondary text-4xl font-semibold font-cormorant'>
            Contact Us
          </h1>
          <p className='text-white mt-5 '>
            43 Julio Pacana Street, Cagayan de Oro, 9000 Misamis Oriental
          </p>
          <p className='text-white mt-2 py-1'>
            +63-92-468-8321
          </p>
          <p className='text-white py-1'>
            +63-92-468-8321
          </p>
        </div>
        <div className='flex flex-1  flex-col  order-1 sm:order-2 items-center gap-2 text-center'>
          <Logo 
              height={70}
              className={'bg-white w-[120px] h-[120px] pr-5 rounded-full justify-center'}
              textClass={'text-xl mt-5 -ml-3'}
          />
          <p className='mt-4 text-white'>The Best Catering for Small Gatherings in the City of Golden Friendship</p>
          <div className='flex gap-5 mt-5 mb-2'>
            <FaFacebook className='text-white cursor-pointer hover:text-secondary duration-200' size={35}/>
            <FaTwitter className='text-white cursor-pointer hover:text-secondary duration-200' size={35}/>
            <FaInstagram className='text-white cursor-pointer hover:text-secondary duration-200' size={35}/>
          </div>
         
        </div>
        <div className='text flex-1 text-white order-3 text-center'>
          <h1 className='text-secondary text-4xl font-semibold font-cormorant'>
              Working Hours
          </h1>
          <p className='text-white mt-5'>
              Monday-Friday:
              <span className='block'>
                08:00 am - 12:00 am
              </span>
          </p>
          <p className='text-white mt-5'>
              Saturday-Sunday:
              <span className='block'>
                07:00 am - 11:00 pm
              </span>
          </p>
        </div>
      </div>
      <div className='mx-auto text-center mt-5'>
          <div className='my-2 h-[2px] rounded-sm bg-secondary'/>
          <p className='text-white text-sm py-2'>
            ©2025 5R Catering Services. All Rights Reserved
          </p>
      </div>
    </footer>
  )
}

export default Footer
