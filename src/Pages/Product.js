import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Rating from 'react-rating'
import MainLayout from "../Layouts/MainLayout"
import Modal from 'react-modal';
import {BsCartPlus} from 'react-icons/bs'
export default function Product() {
    const location = useLocation()
    const data = location.state

    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    console.log(data);
return (
     <MainLayout>
        <div className='p-5'>
            <button onClick={openModal}>open modal</button>
                    <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    contentLabel="Example Modal">
                        <p>hiiiiii</p><button onClick={closeModal}>open modal</button>
                </Modal>
        <div>
            <img className='h-80 object-contain mb-3' src={data.image} alt='img'/>
        </div>
        <div>
            <h1 className='text-xl'>{data.title}</h1>
            <div className='flex mb-3 mt-1 text-yellow-500'>
           
                <Rating className=''  initialRating={data.rating.rate} readonly={true}
                 fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
               </svg>}
               
               emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
             </svg>}/>
             <p className='ml-3'>{data.rating.count}</p>
            </div>
            <p className='my-2 text-gray-500'>{data.description}</p>
            <div className='flex mt-10'>
                <p className='text-xl mr-10 text-gray-900 font-bold'>{data.price}$</p>
                <Link to='/cart' state={data}  className='px-3 py-1 bg-gray-900 text-white rounded-lg flex items-center justify-between w-36'>Add to cart <BsCartPlus/></Link>
            </div>
        </div>
        </div>
     </MainLayout>
   )
 }
 