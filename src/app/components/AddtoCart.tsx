import Image from 'next/image'
import React from 'react'
import prime from '@/../public/prime-logo.png'
import { useAppDispatch } from '@/lib/superbase/hooks/redux'
import { addToCart } from '@/store/cartSlice'

const AddtoCart = ({singleProduct}:{singleProduct:any}) => {
  console.log(singleProduct)
  const dispatch = useAppDispatch()
  return (
    <div className='border border-gray-500 rounded-md h-fit text-sm'>
        <div className="p-4">
            <Image src={prime} height={40} width={40} alt='prime'/>
        </div>
        <div className="p-4 space-y-3">
            <h1 className='text-2xl font-bold'><span className='text-orange-600'>Free Delivery</span> thursday,21 march</h1>
            <h1 className='text-xl font-bold'>Or <span className='text-orange-600'>fastest Delivery</span>tommorow,20 march. order within 15mins.details</h1>
            <p className='font-bold'>Deliver to Jhujhunu <span className='text-blue-600'>333025</span></p>
        </div>
        <div className='py-4 '>
            <button className='bg-[#FFD814] py-1 px-2 text-white rounded-full mx-3' 
            onClick={()=>dispatch(addToCart(singleProduct))}
            >Add to cart</button>
            <button className='bg-[#FFA41C] py-1 px-2 text-white rounded-full'>Buy Now</button>
            
        </div>
      
    </div>
  )
}

export default AddtoCart
