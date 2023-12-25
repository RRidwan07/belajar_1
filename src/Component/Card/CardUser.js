import { Link, useNavigate } from 'react-router-dom'


const CardUser = ({data}) => {
    const navigate = useNavigate()

    const handleClick = () =>{
      navigate(`/card/${data.id}`)
    }
  return (
    <div onClick={handleClick} className=''>
        {/* <div className='block'>
            <h1>{data.name}</h1>
            <p>{data.describsi}</p>
            <button style={{backgroundColor: '#A2C5C9'}} className='py-2 px-4 text-white font-bold rounded-full mt-5 ml-[55px] shadow-xl' ><Link to={`/card/${data.id}`}>Kunjungi</Link></button>
        </div> */}
        <Link to={`/card/${data.id}`} className='p-4 flex justify-between items-center bg-gray-100 text-slate-900 mt-6 rounded-lg'>
            <img className='h-16 w-16 rounded-full' src={data.image} alt='' />
            <h1>{data.name}</h1>
        </Link>
    </div>
  )
}

export default CardUser