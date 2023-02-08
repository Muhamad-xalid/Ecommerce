import { Link } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
export default function Home() {

  return (
    <MainLayout >
     <div className='flex flex-col items-center'>
     <h1 className='my-5 text-2xl text-gray-900 font-serif'>Our Products</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <Link to='/electronics' className="bg-gray-900 text-white px-5 py-5 m-3 text-center rounded-lg">
          <h1 className="mb-2 ">electronics</h1>
          <img className="w-full" src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Link>
        <Link to='/jewelery' className="bg-gray-900 text-white px-5 py-5 m-3 text-center rounded-lg">
          <h1 className="mb-2 ">jewelery</h1>
          <img className="w-full" src="https://images.pexels.com/photos/2697616/pexels-photo-2697616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>  
        </Link>
        <Link to='/mensclothing' className="bg-gray-900 text-white px-5 py-5 m-3 text-center rounded-lg">
          <h1 className="mb-2 ">men's clothing</h1>
          <img className="w-full" src="https://images.pexels.com/photos/5264909/pexels-photo-5264909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>  
        </Link>
        <Link to='/womensclothing' className="bg-gray-900 text-white px-5 py-5 m-3 text-center rounded-lg">
          <h1 className="mb-2 ">women's clothing</h1>
          <img className="w-full" src="https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </Link>
      </ul>
     </div>
    </MainLayout>
  )
}
