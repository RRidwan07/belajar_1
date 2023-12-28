import hr from '../img/hr.jpg'
import TKJ from '../img/logo/LOGO-C-TKJ.png'
import { useNavigate } from 'react-router-dom'

export function Landing() {
    const navigate = useNavigate()
    return(
    <div className='relative m-0 p-0 box-border z-50 w-auto h-screen'>
        <div style={{height: '100vh', backgroundColor: '#f1e0e'}} className="container max-w-full  absolute flex justify-center items-center">
            <h1 className='tablet:text-xl tablet:font-bold tablet:flex tablet:justify-center tablet:items-center hidden'>pleace open to gadged</h1>
                    <img src={TKJ} alt='logo' className='tablet:hidden h-44 w-44 z-40 absolute inset-y-0 top-40'/>
                    <img src={hr} alt='smk' className='w-full bg-cover h-64 -inset-y-0  tablet:hidden tablet:h-[380px] tablet:w-[50vh] absolute tablet:right-0 tablet:top-48 tablet:shadow-2xl' />
                    <div className='absolute bottom-[50%] top-2/4 tablet:hidden z-40'>
                        <h1 className='text-3xl font-bold'>Welcome TKJ 3</h1>
                        <button onClick={()=> navigate('/home')} style={{backgroundColor: '#A2C5C9'}} className='py-2 px-4 text-white font-bold rounded-full mt-5 ml-[55px] shadow-xl'>Get Started</button>
                    </div>
        </div>

        <div className='absolute w-full bottom-14 tablet:hidden '>
            <div className='flex justify-center items-center'>
                <div className="w-[240px] h-[144px] bg-purple-300 bg-opacity-30 rounded-[30px] blur-sm relative" >
                </div>
                <div 
                    className="w-[200px] h-[130px] text-center text-slate-900 text-sm font-normal font-['Poppins'] absolute top-[20%] bottom-[20%]">
                    <b>
                        Jangan sia-siakan progresmu lanjutkan walau menurut mereka itu sia-sia
                    </b>
                    <p className='mt-2 ml-28'>By rizz</p>
                </div>
            </div>
        </div>
    </div>
    )
}