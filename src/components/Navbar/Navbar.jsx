import React from 'react'
import {Button, Logo, ContactForm, Toast} from '../../components'
import { MdMenu, MdClose } from "react-icons/md"
import { handleNavClick, handleMobileBtn } from '../../utils/navigation'
import useScroll from '../../hooks/useHooks'
import { navLinks } from '../../constants/data'
import Modal from '../Modal/Modal'
import useModal from '../../hooks/useModal'
import useToast from '../../hooks/useToast.js';



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const isScrolled = useScroll(10);
  const [showModal, openModal, closeModal] = useModal();
  const { toast, openToast } = useToast();

  return (
    <>
        <nav className={`${isScrolled ? `navbar`: `navbar--isScrolled`} padding-x py-1 transition-all duration-300 w-full`}>
            <a href="#">
              <Logo height={65} className={isScrolled? '' : 'scale-125'}/>
            </a>
            <ul className='nav-links text-md '>
                {navLinks.map((link) => (
                    <li key={link.label} className={`${isScrolled ? 'nav-link' : 'nav-link--isScrolled'}`}>
                      <a className="cursor-pointer" onClick={() => handleNavClick(link.scrollId, false)} >{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden md:block'>
                <Button text='Order Now' 
                        variant={`${isScrolled ? 'primary' : 'secondary'}`}
                        onClick={openModal}
                />
            </div>
            <div className='block md:hidden'>
                { !toggleMenu && (
                  <div>
                    <MdMenu color={`${isScrolled? `#151944` : `#ed8a5d`}`} 
                            fontSize={30} 
                            className='cursor-pointer' onClick={() => {setToggleMenu(true)}}/>
                  </div>
                ) }
                <MobileMenu menuToggled={toggleMenu} onClose={() => {setToggleMenu(false)}} openModal={openModal}/>
            </div>
            <Modal showModal={showModal} closeModal={closeModal} >
              <div className='w-[450px] h-max max-sm:w-full max-sm:h-full bg-primary px-8 py-5'
                   onClick={(e) => e.stopPropagation()}
              >
                <div className='flex justify-between'>
                  <p className='text-white text-xl font-semibold font-cormorant mb-5'>Let's Make it Happen!</p>
                  <MdClose className='inline-block ml-auto cursor-pointer text-white ' fontSize={35} onClick={closeModal}/>
                </div>
                <div>
                  <ContactForm closeModal={closeModal} openToast={openToast}/>
                </div>
              </div>
            </Modal>
            <Toast showToast={toast.show} success={toast.success} message={toast.message} />

        </nav>      
    </>
  )
}

const MobileMenu = ({menuToggled, onClose, openModal}) => {

  return (  
      <>
        <div className={`fixed inset-0 bg-black/50 transition-all duration-300
              ${menuToggled ? `opacity-100` : `opacity-0 pointer-events-none`}
          `}
            onClick={onClose}
        />


  
        <MdClose fontSize={33} className={`nav-close-icon ${menuToggled ? `block` : `hidden`}`}
                  onClick={onClose}/>    
                  

        <ul className={`nav-links-sm duration-300 transition-all ${menuToggled ? `translate-x-0` : `-translate-x-full`}`} >
          <li className='w-full'>
            <Logo height={60} className={` bg-white pl-5 py-1`}/>
          </li>
          {navLinks.map((link) => (
            <li key={link.label} 
                onClick={() => handleNavClick(link.scrollId, true, onClose)} 
                className={`nav-link-sm`}
            >
              <a >{link.label}</a>
            </li>
          ))}
          <div className='mt-5 sm:ml-5'>
            <Button onClick={() => {handleMobileBtn(onClose, openModal)}} text='Order Now' variant='secondary'/>
          </div>
        </ul>
      </>
  )
}



export default Navbar
