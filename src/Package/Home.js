
import CardUser from '../Component/Card/CardUser'
import data from '../Component/assets/data'


export const Home = () => {
  return (
    <div className='bg-slate-500 grid grid-cols-1 px-5 tablet:hidden' style={{paddingTop: '70px'}}>
        {data.map((data, index) => {
          return(
            <CardUser key={index} data={data}/>
          )
        })}
    </div>
  )
}
