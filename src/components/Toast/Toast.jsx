import React from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'

const Toast = ({showToast, success=false, message="Sample Toast"}) => {
  return ReactDOM.createPortal (
    <AnimatePresence>
      {showToast && (
        <motion.div 
          initial={{ opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{duration: 0.5}}
          className={`${success? 'bg-green-400' : 'bg-red-400'} z-10 fixed right-8 bottom-3 py-3 px-5 rounded-md`}
        >
          <p className={`${success ? 'text-primary' : 'text-white'} text-sm`}>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('modals-toasts')
  )
}

export default Toast
