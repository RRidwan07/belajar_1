import React from 'react'
import dataCarousel from '../assets/dataCarousel';
import Carousel from '../Card/cardCarousel2';

const Carousell = () => {
  return (
    <>
    <div className='flex p-2 justify-between items-center'>
        <h1><b>Histories famly</b></h1>
        <p>View</p>
    </div>
    <Carousel images={dataCarousel}/>
      {/* <img
          src="../../img/hr.jpg"
          alt="imag"
          className="h-full w-10/12 object-cover"
        /> */}
      </>
  )
}

export default Carousell