import React, { useEffect, useState } from 'react'
import Rating from 'react-rating'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Modal from 'react-modal';
import { delimiter } from '../Utils/Delimiter';
export default function Product(props) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [data,setdata] = useState()
    useEffect(()=>{
      setdata(props.data)
    },[props.data])

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

return (
        <div className='p-5'>
                    <Modal   isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={closeModal} contentLabel="Example Modal" >
                        <button className='text-2xl mb-5 hover:text-red-500' onClick={closeModal}><AiOutlineCloseCircle/></button>
                            <div>  
                                  <div>
                                      <img className='h-72 object-contain mb-3' src={data.image} alt='img'/>
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
                                      <p className='text-xl ml-10 text-gray-900 font-bold'>{data.price} $</p>
                                      </div>
                                      <p className='my-2 text-gray-500'>{data.description}</p>                                  
                                  </div>
                            </div>
                    </Modal>
                    <div key={data.id} className='border border-spacing-2 flex flex-col p-2 rounded-xl'>
                              <img className='h-80 object-contain' src={data.image} alt='electronic img'/>
                              <h1 className='mb-1 text-xl'>{delimiter(data.title,30)}</h1>
                              <p className='text-gray-500'>{delimiter(data.description,53)}</p>
                                <div className='w-full flex justify-between mt-5'>
                                    <p className='text-gray-900 font-bold'>{data.price} $</p>
                                    <button  onClick={openModal} state={data}
                                    className='border border-spacing-3 p-2 rounded-xl bg-gray-900 text-white ease-in duration-200'>See More</button>
                                </div>
                    </div> 
        </div>
   )
 }
 