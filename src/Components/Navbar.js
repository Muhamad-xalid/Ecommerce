import React from 'react'
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from  "react-icons/ai";
export default function Navbar() {
  return (
    <div className=''>
      
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/#" className="flex items-center">
             <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
        </Link>
        <div className="flex items-center">
            <Link to="/#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Logout</Link>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex justify-between items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to="/Home" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="text-gray-900 dark:text-white hover:underline">About</Link>
                </li>
                <li>
                    <Link to="/Contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                </li>
                {/* <li>
                    <Link to="/#" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                </li> */}
            </ul>
            <button className='text-gray-900 dark:text-white hover:underline'><AiOutlineShoppingCart/></button>
        </div>
    </div>
</nav>

    </div>

  )
}
