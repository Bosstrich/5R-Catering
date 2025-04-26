import React from 'react'
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'motion/react'

const Modal = ({showModal, closeModal, children}) => {

  return ReactDOM.createPortal (

    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          key='modal'
          initial={{opacity: 0}}
          animate={{opacity: 1,}}
          transition={{ duration: 0.5 }}
          exit={{opacity: 0}}
          className='fixed inset-0 bg-black/60 z-10'
          onClick={closeModal}
        >
          <motion.div 
            initial={{y: -200}}
            animate={{y: 0}}
            exit={{ y: -200 }} 
            transition={{ duration: 0.5 }}
            className='fixed inset-0 flex justify-center items-center'
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    ,document.body
  )
}

export default Modal
