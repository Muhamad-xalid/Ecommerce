import React from 'react'
import MainLayout from "../Layouts/MainLayout"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
export default function Contact() {

  const formik = useFormik({
    initialValues: {firstname: '',lastname: '',email:'',phone:'',city:'' , message:''},
    validationSchema: Yup.object({
    firstname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastname: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: Yup.string().max(25, 'Must be 15 characters or less').required('Required'),
    phone: Yup.string().max(10, 'Must be 11 characters').required('Required').min(10,'Must be 11 characters'),
    city: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    message: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
  }),
  
onSubmit: values => {
  alert(JSON.stringify(values, null, 2));     
  },
});


return (
    <MainLayout>
      <div className='flex flex-col px-5 mt-5 justify-evenly  items-center  sm:flex-row'>
        <div className=''>
          <h1 className='text-2xl font-bold mb-3'>Contact Us </h1>
          <p className='flex items-center'><BsFillTelephoneFill className='mr-2'/>  07501111111</p>
          <p className='flex items-center'><ImLocation2 className='mr-2 my-3 text-xl'/>Iraq / Kurdistan / Sulaymaniyah</p>
          <p className='mb-3 mt-10  text-2xl'>Fill out your details to be contacted.</p>
        </div>
        <form onSubmit={formik.handleSubmit} className='w-80 sm:w-96 flex flex-col p-5 bg-white h-64 rounded-xl'>
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='First Name' type="text" {...formik.getFieldProps('firstname')}/>
            {formik.touched.firstname && formik.errors.firstname ? (<div className='text-red-400'>{formik.errors.firstname}</div>) : null}
      
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='Last Name' type="text" {...formik.getFieldProps('lastname')} />
            {formik.touched.lastname && formik.errors.lastname ? (<div className='text-red-400'>{formik.errors.lastname}</div>) : null}
      
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='Email' type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (<div className='text-red-400'>{formik.errors.email}</div>) : null}
      
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='Phone' type="number" {...formik.getFieldProps('phone')} />
            {formik.touched.phone && formik.errors.phone ? (<div className='text-red-400'>{formik.errors.phone}</div>) : null}
      
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='City' type="text" {...formik.getFieldProps('city')} />
            {formik.touched.city && formik.errors.city ? (<div className='text-red-400'>{formik.errors.city}</div>) : null}
            
            <textarea rows="4" className="border-4 pb-9 border-gray-300 rounded-lg" placeholder="Write your message here..."  {...formik.getFieldProps('message')} />
            {formik.touched.message && formik.errors.message ? (<div className='text-red-400'>{formik.errors.message}</div>) : null}

            <button className='w-full bg-gray-900 text-white p-2 mt-5 rounded-lg'>Send</button>
        </form>
        
      </div>
    </MainLayout>
  )
}
