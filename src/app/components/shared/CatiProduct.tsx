import { useAppDispatch } from '@/lib/superbase/hooks/redux'
import {addToCart} from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'

const CatiProduct = ({data}:{data:any}) => {
  const dispatch = useAppDispatch()
  const handleAddtoCart = (item:any)=>{
    dispatch(addToCart(item))
  }
  return (
    <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center  '>
     
      {
        data?.map((item:any)=>{
            return <div key={item._id} className='shadow-md max-w-[250px] p-10 flex flex-col items-center space-y-3 text-center bg-white '>
                <h1 className='text-xl font-bold'>{item.category}</h1>
                <div className="w-52 h-48"> {/* Adjust dimensions as needed */}
          <Image className="mix-blend-multiply w-full h-full" width={208} height={192} src={item.image} alt="image" />
        </div>
                <p className='text-sm font-bold'>${item.price}</p>
                <p className='text-sm font-bold'>rating: <span className='text-center text-xl font-bold text-green-700 '>*****</span></p>
                <button className='bg-[#FFD814] py-1 px-2 text-white rounded-full mx-3' onClick={()=>handleAddtoCart(item)} >Add to cart</button>

            </div>
        })
      }
    </div>
  )
}

export default CatiProduct
