// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom'

// export default function Cart() {

//   const location = useLocation()
//   const Ourdata = location.state
  
//   const [data,setdata] = useState([Ourdata])

//   let length = data.length;
//   return (
//     <div>
//       {
//         length <=0 && data ? <div>The cart is empty</div> :<div>{data && data.map((data)=>{
//          return <p key={data.id}>{data.title}</p>
//         })}</div>
//       }
//       </div>
//   )
// }

/////////////////////////////////////////////////////



import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
export default function Cart() {

    const location = useLocation()
    const data = location.state

    const [cartdata,setcartdata] = useState(data)
    const [quantity,setquantity]=useState(1)
    const [totalprice,settotalprice]=useState(data.price)

    
    const plus = ()=>{
      setquantity(quantity+1)
      

      
    }
    const minus = ()=>{
      setquantity(quantity-1)
      if(quantity <= 1)
      {
        setquantity(1)
      }
    }

  return (
    
    <div className="md:px-32 py-8 w-full">
  <div className="shadow overflow-hidden rounded border-b border-gray-200">
    <table className="min-w-full bg-white">

        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Product</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Total</th>
          </tr>
        </thead>


        <tbody className="text-gray-700">
          <tr>
            <td className="w-1/3 text-left py-3 px-4">
              <img src={data.image} className='w-32'/>
              <p>{data.title}</p>
            </td>
            <td className="w-1/3 text-left py-3 px-4">{data.price} $</td>
            <td className=" py-3 px-4 h-32 flex justify-evenly items-end  ">
              <button onClick={plus}><AiOutlinePlusCircle/></button>
              <p>{quantity}</p>
              <button onClick={minus}><AiOutlineMinusCircle/></button>
            </td>
            <td className="text-left py-3 px-4">{totalprice} $</td>
          </tr>  
        </tbody>

    </table>
  </div>
</div>
  )
}