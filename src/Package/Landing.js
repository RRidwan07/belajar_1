import hr from '../img/hr.jpg'
import TKJ from '../img/logo/LOGO-C-TKJ.png'
import { useNavigate } from 'react-router-dom'

export function Landing() {
    const navigate = useNavigate()
    return(
        <>
        <div style={{height: '100vh', backgroundColor: '#f1e0e'}} className="container max-w-full  absolute flex justify-center items-center">
        <h1 className='tablet:text-xl tablet:font-bold tablet:flex tablet:justify-center tablet:items-center hidden'>pleace open to gadged</h1>
                <img src={TKJ} alt='logo' className='tablet:hidden h-44 w-44 z-40 absolute inset-y-0 top-40'/>
                <img src={hr} alt='smk' className='w-full bg-cover h-64 -inset-y-0  tablet:hidden tablet:h-[380px] tablet:w-[50vh] absolute tablet:right-0 tablet:top-48 tablet:shadow-2xl' />
                <div className='absolute bottom-[35%] tablet:hidden z-40'>
                    <h1 className='text-3xl font-bold'>Welcome TKJ 3</h1>
                    <button onClick={()=> navigate('/home')} style={{backgroundColor: '#A2C5C9'}} className='py-2 px-4 text-white font-bold rounded-full mt-5 ml-[55px] shadow-xl'>Get Started</button>
                </div>
                    <div style={{height: '200px', width: '200px',borderTopLeftRadius: '400px', backgroundColor: '#e36255', }} className=' tablet:hidden flex justify-center items-center'></div>
                    {/* <div style={{position: 'absolute',bottom: '20px', left: '0',height: '200px', width: '200px',borderTopRightRadius: '400px', backgroundColor: '#e36255', }} className=' tablet:hidden'></div>
                    <div style={{position: 'absolute',bottom: '0',height: '90px', backgroundColor: '#e36255', }} className='w-screen tablet:hidden'></div> */}
        </div>
        </>
    )
}