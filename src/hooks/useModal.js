
import {useState, useEffect} from 'react';

const useModal = () => {

    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     if (showModal) {

    //       document.body.style.overflow = 'hidden';

    //     } else {
    //       document.body.style.overflow = 'auto';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    //   }, [showModal]);
    
    const openModal = () => {
        
        document.body.classList.add('modal-open');
        (setShowModal(true));
    }

    const closeModal = () => {
        document.body.classList.remove('modal-open');

        (setShowModal(false));
    }

    return [showModal, openModal, closeModal]; 
    
}

export default useModal;