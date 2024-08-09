import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Cart = ({product}:{product:any}) => {
  
  const router = useRouter()
  return (
    <div className='max-w-[500px]  flex flex-col items-center justify-center gap-4 shadow-xl ' 
    onClick={()=>router.push(`/productDetail/${product.id}`)} >
        
     <div>
     <Image className='mix-blend-multiply' src={product.image} height={150} width={150} alt='image'/>
     </div>
     <div className='flex flex-col items-center gap-1 py-3'>
     <h1 className='text-sm font-bold px-2'>{product.title}</h1>
      {/* <p >{product.description}</p> */}
      <p>Price:${product.price}</p>
      <p>Rating:{product.rating}</p>
     </div>
    </div>
  )
}

export default Cart
