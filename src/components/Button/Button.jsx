import React from 'react'

const Button = ({variant = 'primary', text='Button', link, onClick}) => {

  let variants = {

    'primary' : 'btn bg-primary text-white hover:bg-primary/80 active:scale-95  duration-300 transition-colors ',
    'secondary': 'btn bg-secondary text-white hover:bg-secondary/80 active:scale-95  duration-300 transition-colors '

  }

  const openLink = () => {

    if(link) {

      window.open(link, '_blank');
    }else{

      window.open(link, '_self');
    }
  }

  const handleClick = () => {

    if(onClick) {

      onClick()
    }else{
      openLink();
    }
  }

  return (
    <button className={`${variants[variant]}`}
            onClick={handleClick}>
        {text}
    </button>
  )
}

export default Button
