'use client'
import SingleProduct from '@/app/components/SingleProduct'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const ProductDetail = ({params}:{params:any}) => {
  const id = params.id
    const{getSingleProduct,singleProduct} = useSuperbase()
    useEffect(()=>{
      getSingleProduct(Number(id))
    },[id,getSingleProduct])
    console.log(singleProduct)
  return (
    <div>
      <SingleProduct singleProduct={singleProduct}/>
      
    </div>
  )
}

export default ProductDetail
