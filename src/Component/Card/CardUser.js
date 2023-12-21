import { Link, useNavigate } from 'react-router-dom'


const CardUser = ({data}) => {
    const navigate = useNavigate()

    const handleClick = () =>{
      navigate(`/card/${data.id}`)
    }
  return (
    <div onClick={handleClick} className='flex justify-center items-center bg-gray-100 text-slate-900 mt-20'>
        <div className='block'>
            <h1>{data.name}</h1>
            <p>{data.describsi}</p>
            <button><Link to={`/card/${data.id}`}>Kunjungi</Link></button>
        </div>
    </div>
  )
}

export default CardUser