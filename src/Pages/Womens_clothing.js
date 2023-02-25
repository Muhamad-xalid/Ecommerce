import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MainLayout from "../Layouts/MainLayout"
import Product from './Product';
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
          <Product key={womenclothing.id} data={womenclothing}/>   
        )
      })}
    </div>
  </MainLayout>
   )
 }
 
 
 