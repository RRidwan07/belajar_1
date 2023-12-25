import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import React,{useState} from 'react'
import "animate.css"


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
        <div className=" container max-w-full h-16 backdrop-blur-md fixed z-50 shadow-md ">
                <div className="flex justify-between items-center pt-3 p-3">
                    <div className=" flex items-center">
                        <h1 className="text-4xl font-bold tablet:font-black">TKJ 3</h1>
                        <div className="flex items-center absolute right-6">
                        <ul className="hidden tablet:flex gap-3 tablet:font-bold">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contack</li>
                        </ul>
                        </div>
                    </div>
                    <div className="tablet:hidden" onClick={handleClick}>
                    {!nav ? <AiOutlineMenu className="w-10 text-3xl"/> : <AiOutlineClose className="w-10 text-3xl"/>}
                    </div>
                </div>
                    <ul className={!nav ? "absolute left-[-200vh] bg-slate-50 w-full px-10 leading-10 tablet:hidden" : "absolute left-0 bg-slate-50 w-full px-10 leading-10 tablet:hidden animate__fadeInDown shadow-md"}>
                    <li className="border-b-2 border-zinc-300 min-w-full">Home</li>
                    <li className="border-b-2 border-zinc-300 min-w-full">About</li>
                    <li className="border-b-2 border-zinc-300 min-w-full">Contack</li>
                    </ul>
        </div>
  )
}
