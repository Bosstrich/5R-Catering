import React from 'react';
import {menu, highlightDish} from '../../constants/menu';
import { Headings } from '../../components';
import './Menu.css';

const Menu = () => {
  return (
    <section className='bg-white pb-36' id='Menu'>
        <div className='Menu-bg relative h-[150px]'>         
            <Headings headingText={`Our Menu`}
                      headingColor='text-white'
                      className={'relative pt-7 z-[2]'}
            />
            <div className='absolute inset-0 bg-black/30'></div> 
        </div>
        <div className='padding-x'>
          <HighlightDish item={highlightDish}/>
          <p className='text-primary text-center font-cormorant text-3xl font-semibold pt-8 pb-5 my-2'>Other delicacies that fits your taste</p>
        </div>
        
        <div className='padding-x w-full flex flex-col sm:flex-row sm:items-stretch flex-wrap items-center justify-center gap-10 '>
          {menu.map((item) => (

              <SideDish key={item.item} 
                        menuIMG={item.img}
                        menuItem={item.item}
                        menuPrice={item.price}
                        menuDescription={item.description}
              />
          ))}
        </div>
         

    </section>
  )
}

const HighlightDish = ({item}) => {


  return (

      <div className='special-section h-max shadow-lg rounded-lg flex flex-col-reverse  sm:flex-row justify-between mt-10 w-full overflow-hidden bg-white'>
        <div className='description h-full p-7'>
          <p className='font-cormorant text-3xl font-semibold text-primary'>What Everyone’s Talking About 🔥</p>
          <p className='mt-5 text-secondary font-alt font-semibold text-2xl'>{item.item}</p>
          <p className='text-secondary font-bold text-xl my-1'>₱{item.price}.00</p>
          <p className='text-gray-600 text-md'>5R's Signature Dish</p>
          <p className='py-5 text-md sm:text-lg text-primary '>{item.description}</p>
        </div>
        <div className='w-full max-sm:h-[250px] sm:w-[60%] md:w-[40%] relative overflow-hidden'>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover hover:scale-110 cursor-pointer transition delay-100'
            src={item.img}
            alt=''
          />
        </div>
    </div>
  )
}

const SideDish = ({menuItem, menuIMG, menuPrice, menuDescription}) => {


  return (
    <div className='bg-white card rounded-md shadow-lg w-full sm:w-min items-stretch overflow-hidden'>
      <div className='relative h-[150px] sm:w-[350px] sm:h-[250px] overflow-hidden'>
        <img className='absolute left-0 top-0 w-full h-full object-cover transition-transform cursor-pointer duration-300 hover:scale-110' src={menuIMG} alt="" />
      </div>
      <div className='font-alt p-5'>
        <p className='text-2xl text-primary'>{menuItem}</p>
        <p className='text-xl py-2'>₱{menuPrice}.00</p>
        <p className='text-md sm:text-lg'>{menuDescription}</p>
      </div>
    </div>


  )

}

export default Menu
