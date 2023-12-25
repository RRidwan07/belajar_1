import React from 'react'

const Button = (props) => {
  return (
    <button style={{backgroundColor: '#A2C5C9'}} className='cursor-pointer py-2 px-4 text-white font-bold rounded-full mt-5 ml-[55px] shadow-xl'>
    Get Started{props.name}
    </button>
  )
}

export default Button