import React from 'react'
import Navbar from '../Components/Navbar'

export default function MainLayout(props) {
  return (
    <>
    <Navbar/>
    {props.children}
    </>
  )
}
