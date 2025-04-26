import React from 'react'

const Headings = ({headingText, textAlign='center', headingColor = `text-secondary`, bodyText, icon=null, className}) => {
  return (
    <>
        <div className={`${className} flex flex-col`}>
            <div className={`flex ${textAlign === 'center' ? 'justify-center' : 'justify-start'} items-center gap-2`}>
                <h1 className={`inline-block text-4xl sm:text-5xl font-cormorant font-semibold ${headingColor} border-b-2 pb-3`}>{headingText}</h1>
                <img className={`mb-2 w-[30px] object-cover ${icon? '' : 'hidden'}`} src={icon} alt="" />
            </div>
            <p className={`mt-3 font-alt text-lg sm:text-xl text-white text-${textAlign}`}>{bodyText}</p>
        </div> 
    </>
  )
}

export default Headings
