import React from 'react'
import { Headings } from '../../components'
import { qoutes } from '../../assets'
import { testimonials, swiperConfig } from '../../constants/data'
import { sparkle } from '../../assets'
import { FaArrowLeft ,FaArrowRight } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css'
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


const Testimonials = () => {
    const swiperRef = React.useRef(null);

  return (
    <section className='relative padding-x bg-primary min-h-screen'>

        <Headings headingText={`Testimonials`}
                  icon={sparkle}
                  bodyText={`Hear what others say about our catering service`}
                  className={'pt-7'}
        />
        {/* <div className='relative text-center pt-7'>
            <div className='flex justify-center items-center gap-2'>
                <h1 className='inline-block text-5xl font-cormorant font-semibold text-secondary border-b-2 pb-3'>Testimonials</h1>
                <img className='mb-2 w-[30px] object-cover' src={sparkle} alt="" />
            </div>
            <p className='mt-3 text-xl text-white'>Hear what others say about our catering service</p>
        </div> */}
        <div className='relative px-5 sm:px-10 flex w-full'>
            <TestimonialSwiper swiperRef={swiperRef}/>  
            <div className='lg:hidden absolute left-0 top-1/2 text-white cursor-pointer' onClick={() => swiperRef.current?.slidePrev()}>
                <FaArrowLeft fontSize={25} color='#ed8a5d'/>
            </div>
            <div className='lg:hidden absolute right-0 top-1/2 text-white cursor-pointer' onClick={() => swiperRef.current?.slideNext()}>
                <FaArrowRight fontSize={25} color='#ed8a5d'/>
            </div>
        </div>
    </section>
  )
}

const TestimonialSwiper = ({swiperRef}) => {



    return (
        <Swiper
            {...swiperConfig}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            className='mt-2 sm:mt-10 px-10'
        >
            {testimonials.map((testimonial) => (
                <SwiperSlide className='py-20'>
                    <ReviewCard customerImage={testimonial.Photo}
                            customerName={testimonial.Name} 
                            customerHighlight={testimonial.Highlight}
                            customerReview={testimonial.Testimony}/>
                </SwiperSlide>
                
            ))}
        </Swiper>
    )
}


const ReviewCard = ({customerImage, customerName, customerReview, customerHighlight}) => {

    return (
        <>
            <div className='relative flex flex-col h-full text-primary pt-5 pb-7 px-5 bg-white shadow-secondary shadow-md rounded-md'>
                {/* HALO */}
                <div className='absolute -z-0 -top-[65px] left-[50%] -translate-x-1/2 border-2 border-secondary border-b-transparent rounded-tr-full rounded-tl-full text-white w-[125px] h-[65px]'/>

                <div className='absolute left-[50%] p-2 rounded-t-full -translate-x-[50%] -top-16'>
                    <img className='w-[100px] h-[100px] border-4 border-primary object-cover rounded-full' src={customerImage} alt="" />
                </div>
                <div className='pt-7 font-semibold t text-md text-center sm:mt-3'>{customerName}</div>
                <p className='font-cormorant font-bold text-xl md:text-3xl text-center text-secondary my-2 sm:my-3'>"{customerHighlight}"</p>
                <div className=''>
                    <img className='float-left mt-2 mr-5 mb-1 w-[45px]' src={qoutes} alt="qoutes" />
                    <p className='font-alt text-md text-justify'>{customerReview}.</p>
                </div>
  
            </div>
        </>
    )
}

export default Testimonials
