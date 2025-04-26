import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver  } from '@hookform/resolvers/yup'
import { contactFormSchema } from '../../constants/validationSchema'
import emailjs from '@emailjs/browser';



const ContactForm = ({closeModal, openToast}) => {


    const { register, 
            handleSubmit,
            formState: {errors},
            reset
        
        } = useForm({
                resolver: yupResolver(contactFormSchema)
        })


    const onSubmit = (data) => {

        console.log('Submitted: ',  data)

        const templateParams = {

            name: data.name,
            number: '+63' + data.number,
            address: data.address,
            order: data.order

        }


        emailjs
            .send('service_kl550yn', 'template_hata245', templateParams, {
                publicKey: 'sGjVpIx7H1sFrVRx5'
            })
            .then(() => {
                console.log('SUCCESS!');
                openToast('Order Sent Successfully', true);
                closeModal();
                reset()

            },
            () => {
                openToast('Error Sending Order..', false);

             })
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className='block text-white'>Name:</label>
        <input {...register('name')}
               className='my-1 w-full px-2 py-2 rounded-md' 
               type="text" 
               placeholder='Name'
               maxLength={50}/>
        {errors.name && <p className="text-red-400 text-md">{errors.name.message}</p>}
        <label className='mt-2 block text-white'>Contact Number:</label>
        <div className='flex items-center my-1 border-red-50'>
            <span className='bg-gray-100 h-full py-2 px-2 rounded-l-md'>+63</span>
            <input {...register('number')}
                   className='after:contents w-full px-2 py-2 rounded-r-md outline-none' 
                   type="tel" 
                   placeholder="000-000-0000"
                   maxLength={11}
            />
        </div>
        {errors.number && <p className="text-red-400 text-md">{errors.number.message}</p>}

        <label  className='block mt-2 text-white'>Address:</label>
        <input  {...register('address')}
                placeholder='Address'
                className='my-1 w-full px-2 py-2 rounded-md' 
                type="text" />
        {errors.address && <p className="text-red-400 text-md">{errors.address.message}</p>}

        <label className='mt-2 block text-white'>Your Order:</label>
        <select {...register('order')}
                defaultValue=''
                className='w-full my-1 px-2 py-2 rounded-md' 
                name="order">
            <option value="" disabled>--Select Your Order--</option>
            <option value="Chicken">Chicken</option>
            <option value="Lumpia">Lumpia</option>
            <option value="Spaghetti">Spaghetti</option>
            <option value="Pancit">Pancit</option>
        </select>
        {errors.order && <p className="text-red-400 text-md">{errors.order.message}</p>}

        <input className='bg-secondary w-full rounded-md hover:bg-secondary-dark text-white cursor-pointer py-2 mt-5 mb-2' type="submit" value='Send'/>
        <p className='text-white text-sm text-justify py-1'> <strong className='text-secondary'>Note: </strong>We respect your privacy and are committed to protecting your information. Your data will remain within our team. </p>
    </form>
  )
}

export default ContactForm
