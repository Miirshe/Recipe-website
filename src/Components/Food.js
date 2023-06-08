import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sanwich from './images/burger.jpg'
import FoodData from '../FoodData'
const Food = () => {
  const [data , setData] = useState(FoodData);
  console.log(data)
  return (
    <div>
      <div className=' sm:flex sm:justify-around sm:items-center bg-gray-100 shadow-sm p-3 fixed top-0 right-0 left-0 z-20'>
        <div className='flex justify-between items-center'>
          <h3 className=' text-lg capitalize ml-3 font-black font-mono tracking-wide '>karmel fast food</h3>
          <button className='sm:hidden text-lg cursor-pointer'><i className="fa fa-bars"></i></button>
        </div>
        <nav className=''>
          <ul className='my-2 flex flex-col sm:flex sm:flex-row sm:justify-between sm:items-center hidden'>
            <Link to='/' className='p-3 w-20 rounded-md hover:text-gray-600 duration-500  cursor-pointer text-base'>Home</Link>
            <Link to='Food' className='p-3 w-20 rounded-md hover:text-gray-600 duration-500  cursor-pointer text-base' >Food</Link>
            <Link className='p-3 w-20 rounded-md hover:text-gray-600 duration-500  cursor-pointer text-base'  >Contact</Link>
            <Link className='p-3 w-20 rounded-md hover:text-gray-600 duration-500  cursor-pointer text-base' >About</Link>
            <button className='ml-2 py-2 px-5 w-20 rounded-md text-white bg-red-500 hover:bg-red-400 duration-500  cursor-pointer text-base'>Orders</button>
          </ul>
        </nav>
      </div>

      <div className='mt-24 w-full'>

        {/* <div className='p-2 w-[380px] mx-auto'>
          <input className='px-4 py-2 rounded-md w-[340px] ml-2 border-2 border-gray-200 shadow-sm' type='text' placeholder='Search favourite food ' />
        </div> */}

        <div className='flex justify-start items-center xl:w-[80%] xl:ml-32'>

          <div className='p-2 ml-7'>
            <h3 className='text-lg font-semibold '>Food</h3>
          </div>

          <div className='p-2 ml-4'>
            <select className='py-2 px-4 border-2 border-gray-200 rounded-sm'>
              <option >burger</option>
              <option >sanwich</option>
              <option >pizza</option>
            </select>
          </div>

        </div>

        <div className='grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:w-[80%] xl:mx-auto'>
          {
            data.map(val=>{
              return <div className=' w-[320px] sm:w-[260px] md:w-[245px] md:gap-5 lg:w-[255px] xl:w-[250px]  ml-7 bg-gray-200  relative hover:shadow-lg'  key={val.id}>
              <img className='overflow-hidden object-contain ' src={Sanwich} alt="sanwich"/>
              <div>
                <small className='py-2 px-4 text-lg absolute top-0 bg-red-500 text-white'>{val.price}</small>
                <small className='py-1 my-3 ml-3 block capitalize text-base'>{val.name}</small>
                <button className='text-white py-2 px-5 mb-4 bg-red-500 capitalize ml-3'>order now</button>
              </div>
            </div>
            })
          }
        </div>

      </div>

    </div>
  )
}

export default Food