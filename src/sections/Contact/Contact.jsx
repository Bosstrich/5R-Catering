import React from 'react'

import { Headings } from '../../components'
import { chefHat } from '../../assets'

const Contact = () => {
  return (
    <section id='Contact' className='bg-white py-10'>
        <div className='flex sm:flex-row flex-col padding-x justify-between gap-10'>
            <div className='relative pt-5 text-left'>
                <Headings
                    textAlign='left'
                    headingText={'Find Us'}
                />
                <p className='text-primary font-alt text-lg'>
                    43 Julio Pacana Street, Cagayan de Oro, 9000 Misamis Oriental
                </p>
                <p className='mt-12 text-secondary font-semibold font-alt text-xl'>
                    Opening Hours
                </p>
                <p className='mt-5 py-1 text-primary font-alt text-lg'>
                    Mon - Fri: 10:00 am - 02:00 am
                </p>
                <p className='py-1 text-primary font-alt  text-lg'>
                    Sat - Sun: 10:00 am - 03:00 am
                </p>
                <img src={chefHat} className='w-[450px] absolute left-1/2 -translate-x-1/2 bottom-0 opacity-15 pointer-events-none'  alt="" />
                
            </div>
            <div className='overflow-hidden rounded-lg shadow-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d348.7846056233755!2d124.65182550195328!3d8.494776667069958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1745353158897!5m2!1sen!2sph"  
                    width="600" 
                    height="450" 
                    style={{border: 0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    </section>
  )
}

export default Contact
