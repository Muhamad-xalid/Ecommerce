import React from 'react'
import MainLayout from "../Layouts/MainLayout"
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <MainLayout>
     <div className='bg-gray-900 text-white'>
        <div className='container mx-auto flex flex-col items-center py-9 sm:flex-row'>
            <div className='m-5 sm:m-0'>
              <img className='animate-[wave_5s_ease-in-out_infinite] ' width={700} src='https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
            <div className='mt-7 mx-5 sm:mt-0'>
                <h3 className='text-xl'>Shop is fun</h3>
                <h1 className='text-3xl my-1'>BROWSE OUR PREMIUM PRODUCT</h1>
                <p className='text-gray-500 mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link to='/Home' className='bg-white p-2 rounded-lg text-gray-900 font-bold  hover:bg-slate-300 transition-all'>Browse Now</Link>
            </div>
          </div>
     </div>
    </MainLayout>
  )
}
