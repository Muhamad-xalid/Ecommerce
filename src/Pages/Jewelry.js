import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { delimiter } from '../Utils/Delimiter';
import MainLayout from "../Layouts/MainLayout"
import { Link } from 'react-router-dom';

export default function Jewelry() {
  
  const [jewelrysdata,setjewelrysdata]=useState([])
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(function (response) {setjewelrysdata(response.data);setloading(false)})
    .catch(function (error) {console.log(error);})
  })

  if(loading){
    return  <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
    <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
</div>
  }
  return (
    <MainLayout>
      <div className='px-7 my-10 grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center' >
        {jewelrysdata.map((jewelrydata)=>{
          return(
          <div key={jewelrydata.id} className='border border-spacing-2 flex flex-col p-2 rounded-xl'>
                    <img className='h-80 object-contain' src={jewelrydata.image}/>
                    <h1 className='mb-1 text-xl'>{delimiter(jewelrydata.title,30)}</h1>
                    <p className='text-gray-500'>{delimiter(jewelrydata.description,53)}</p>
                    <div className='w-full flex justify-between mt-5'>
                      <p className='text-gray-900 font-bold'>{jewelrydata.price} $</p>
                      <Link to='/Product' state={jewelrydata}  className='border border-spacing-3 p-2 rounded-xl bg-gray-900 text-white ease-in duration-200'>See More</Link>
                    </div>
          </div>    
          )
        })}
      </div>
    </MainLayout>
  )
}