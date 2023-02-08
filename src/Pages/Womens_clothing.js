import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { delimiter } from '../Utils/Delimiter';
import MainLayout from "../Layouts/MainLayout"
import { Link } from 'react-router-dom';
export default function Womens_clothing() {
   
   const [womensclothing,setwomensclothing]=useState([])
   const[loading,setisloading]=useState(true)
   useEffect(()=>{
     axios.get('https://fakestoreapi.com/products/category/women\'s clothing')
     .then(function (response) {setwomensclothing(response.data);setisloading(false)})
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
         {womensclothing.map((womenclothing)=>{
           return(
           <div key={womenclothing.id} className='border border-spacing-2 flex flex-col p-2 rounded-xl'>
                     <img className='h-80 object-contain' src={womenclothing.image}/>
                     <h1 className='mb-1 text-xl'>{delimiter(womenclothing.title,30)}</h1>
                     <p className='text-gray-500'>{delimiter(womenclothing.description,53)}</p>
                     <div className='w-full flex justify-between mt-5'>
                       <p className='text-gray-900 font-bold'>{womenclothing.price} $</p>
                       <Link to='/Product' state={womenclothing} className='border border-spacing-3 p-2 rounded-xl bg-gray-900 text-white ease-in duration-200'>See More</Link>
                     </div>
           </div>    
           )
         })}
       </div>
     </MainLayout>
   )
 }
 
 
 