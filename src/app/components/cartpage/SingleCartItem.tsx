'use client'
import { useAppDispatch } from '@/lib/superbase/hooks/redux'
import { removeFromCart } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'



const SingleCartItem = ({id,title,price,image}:any) => {
  const dispatch = useAppDispatch()
  function handleRemove(id:any){
    console.log(id)
    dispatch(removeFromCart(id))
  }
  return (
    <div className='w-[80%] mx-auto flex  justify-between my-6 py-2'>
      <div className='flex  gap-4'>
        {/* image */}
        <div>
          <Image src={image} width={200} height={200} alt='cartImage'/>
        </div>
        {/* content */}
        <div className='space-y-2'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <p className='text-sm text-green-700 font-bold'>In Stock</p>
          <p className='text-sm text-red-700 font-bold'
          onClick={()=>handleRemove(id)}
          >Remove</p>
        </div>
      </div>
      <div className='space-y-2'>
        <h1 className='text-xl font-bold'>${price}</h1>
        <button className='py-1 px-2 text-black bg-green-400 hover:bg-green-700 rounded-md'>Buy Now</button>
      </div>
      
    </div>
  )
}

export default SingleCartItem
