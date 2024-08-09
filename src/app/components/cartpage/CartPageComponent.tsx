'use client'
import React, { useEffect, useState } from 'react'
import SingleCartItem from './SingleCartItem'
import { useAppSelector } from '@/lib/superbase/hooks/redux'
import { getCart } from '@/store/cartSlice'

const CartComponent = () => {
 
  const product = useAppSelector(getCart)
  console.log(product)
 
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  return (
    <div>
      <div className='w-[80%] mx-auto flex items-center justify-between my-6 py-3 border-b-2'>
        <h1 className='text-2xl font-bold'>ShoppingCart</h1>
        <p className='text-xl font-bold'>price</p>
      </div>
      {
       product.map(({id,title,price,image}:any)=>(
          <div key={id}>
            <SingleCartItem id={id} title={title} price={price} image = {image}/>
          </div>
       ))
      }
      
    </div>
  )
}

export default CartComponent
