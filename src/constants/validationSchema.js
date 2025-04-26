import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({

    name: yup.string().required('Name is Required'),
    number: yup
        .string()
        .matches(/^\d{11}$/, "Contact must be 11 digits")
        .required('Contact Number is Required'),
    address: yup.string().required('Address is Required'),
    order: yup.string().required('Please Select an Order')
})