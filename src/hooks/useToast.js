import {useState} from 'react';

const useToast = () => {

    const [toast, setToast] = useState({
        show: false,
        message: '',
        success: true,
      } );
    

    const openToast = (message, success=true) => {
        console.log('TOAST OPENED');
        setToast({show: true, message, success});

        setTimeout(() => {

            closeToast();

        }, 3000)
    }

    const closeToast = () => {

        setToast((prev) => ({...prev, show: false}));
    }

    return { toast, openToast, closeToast };
}

export default useToast;