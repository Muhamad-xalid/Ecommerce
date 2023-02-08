import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [login,setlogin]=useState(false)
  const [users,setusers]=useState([])

  const navigate = useNavigate()
  const toHome = (e) => { navigate('/Home'); };
  const incorrect = (e) => {navigate('/#');};

  axios.get('https://fakestoreapi.com/users')
  .then(function (response) {setusers(response.data);})
  .catch(function (error) {console.log(error);})
  
  const formik = useFormik({
      initialValues: {username: '',password: '',},
      validationSchema: Yup.object({
      username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    }),
    
  onSubmit: values => {
      const canlogin = users.some(user => values.username === user.username && values.password === user.password);
      console.log(canlogin); // true
      if(canlogin){
        setlogin(true)
      }
      else{
        alert('username or password incorrect')
      }        
    },
});

return (
    <div className='bg-gray-900 w-full h-screen flex items-center justify-center'>
         <form onSubmit={formik.handleSubmit} className='w-80 sm:w-96 flex flex-col p-5 bg-white h-64 rounded-xl'>
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='Username' type="text" {...formik.getFieldProps('username')}/>
            {formik.touched.username && formik.errors.username ? (<div className='text-red-400'>{formik.errors.username}</div>) : null}
      
            <input className='mb-3 px-2 py-1 border-4 border-gray-300 rounded-lg' placeholder='Password' type="text" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (<div className='text-red-400'>{formik.errors.password}</div>) : null}
      
            {/* <Link type='submit' to={`${login ? '/Home' : '/#'}`}>Login</Link> */}
            <button onClick={login ? toHome : incorrect}  className='text-center mb-3 px-2 py-1 border-4 rounded-lg bg-gray-900 text-white hover:bg-gray-800' type='submit'>Login</button>
            {/* <a className='underline'>Register</a> */}
        </form>
    </div>
  )
}