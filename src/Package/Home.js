
import CardUser from '../Component/Card/CardUser'
import Carousell from '../Component/Component/Carousel'
import data from '../Component/assets/data'
import React from 'react'

const Homee = () => {
  return (
    <div className='bg-slate-300 grid grid-cols-1 px-5 tablet:hidden' style={{paddingTop: '70px'}}>
        <Carousell />
        {data.map((data, index) => {
          return(
            <CardUser key={index} data={data}/>
          )
        })}
        <div className='flex justify-center items-center w-auto h-auto pt-7 pb-7 pl-2 pr-2'>
          <div className="flex justify-center items-center w-[303.86px] h-[265px] bg-gradient-to-br from-white to-blue-700 rounded-tl-[53.97px] rounded-br-[53.97px] border border-white border-opacity-50 backdrop-blur-[10.79px]" >
              <div className='block'>
                  <h1>hello word</h1>
                  <p>nanan</p>
              </div>
          </div>
        </div>
    </div>
  )
}
export default Homee
