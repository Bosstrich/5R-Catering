import React from 'react'
import './About.css'
import { Logo, Headings } from '../../components'
import { aboutContent } from '../../constants/data'

const About = () => {
  return (
    <section id='About' className='relative w-full min-h-max py-24 sm:py-36 about-bg '>

        {/* Overlay */}
        <div className='bg-black/60 z-[0] h-full absolute inset-0 text-center '/>
        <div className=' relative w-full z-[2] px-10 text-center flex md:flex-row flex-col justify-around gap-12 sm:gap-20'>
                {aboutContent.map((content) => (

                    <Headings
                        headingText={content.title}
                        bodyText={content.text}
                        textAlign='justify'
                        className={'gap-5'}
                
                    />
                ))}
        </div>
        <Logo height={150} 
              className={'bg-white pr-3 rounded-full max-sm:items-center absolute -top-20  left-[50%] -translate-x-1/2'}
              withText={false}
              textClass={'ml-5 text-5xl -ml-8 text-4xl leading-[40px]'}
        />

    </section>
  )
}

export default About
