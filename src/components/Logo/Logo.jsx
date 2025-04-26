import React from 'react'
import { logo, logo2, logo3 } from '../../assets'
import useScroll from '../../hooks/useHooks'


const Logo = ({height, className, withText= true, textClass = null}) => {

  const isScrolled = useScroll(10);


  return (
    <>
        <div className={`logo__container ${className} transition-all duration-300`} >
            <img src={isScrolled ? logo2: logo3} alt="5R Logo" className='logo-img pointer-events-none'  style={{ width: `${height}px` }}/>
            {withText ? (
              <div className={`${textClass?  textClass : `text-xl mt-4 -ml-1`}  font-logo  text-secondary`}>
                  <p>Catering</p>
                  <p className='-mt-2 ml-2'>Services</p>
              </div>
            ): null}

        </div>
      
    </>
  )
}

export default Logo
