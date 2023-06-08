import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import 'react-slideshow-image/dist/styles.css'
import Sanwich from '../Components/images/home1.jpg'
import Record from "../Records.json"
import Food from './Food'
// import { Fichevronright , Fichevronleft} from 'react-icons/fi'
const Home = () => {
  const Mydata = Record.Records;
  const [data, setdata] = useState(1)
  function nextData(id) {
    if (id === 1) {
      setdata(Mydata.length);
    } else if (id > 1) {
      setdata(data - 1);
    }
    else {
      setdata(Mydata.length - 1)
    }

  }
  function PrevData(id) {
    if (id === Mydata.length) {
      setdata(1);
    } else if (id < Mydata.length) {
      setdata(data + 1);
    }
    else {
      setdata(Mydata.length - 1)
    }

  }
  return (
    <div>
      <div className=' sm:flex sm:justify-around sm:items-center bg-gray-100 shadow-sm p-3 fixed top-0 right-0 left-0 z-20 '>
        <div className='flex justify-between items-center'>
          <h3 className=' text-lg capitalize ml-3 font-black tracking-wide '>karmel fast food</h3>
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

      <div className='w-full h-[45vh] mt-10  bg-no-repeat relative'>
        <input className='py-3 px-4 w-[80%] absolute top-10 left-7 rounded-sm md:w-[60%] md:left-32 md:top-20 xl:top-32 xl:left-48' type='text' placeholder='search favourite food ....' />
        {
          Mydata.map((val, i) => {
            return (
              <div key={val.id} className={data === val.id ? 'w-full h-[40vh]  bg-no-repeat lg:h-[65vh] xl:h-[70vh]' : 'hidden'} style={{ backgroundImage: `url(${Sanwich})`, backgroundSize: '100% 100%' }}>
                <div className={data === val.id ? 'flex justify-around item-center gap-2 absolute top-40 md:left-32 md:top-60 md:gap-4 xl:left-48 xl:gap-5 xl:top-64 ' : 'hidden'}>
                  <button onClick={() => PrevData(val.id)} className='p-2 bg-green-400'>left</button>
                  <div className=''>
                    <h3 className=''>{val.title}</h3>
                    <p className=''>{val.name}</p>
                  </div>
                  <button onClick={() => nextData(val.id)} className='p-2 bg-blue-600'>right</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mt-40'>
        <Food />
      </div>
    </div>
  )
}

export default Home