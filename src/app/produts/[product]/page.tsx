'use client'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import React, { useEffect, useState } from 'react'
import SearchResult from '../../components/SearchResult'

const Product = ({params}:any) => {
  const query = params.product
    const{products,getData,filterData,getFilterData}= useSuperbase()
    
    useEffect(()=>{
      getData(),
      getFilterData(query)

    },[getData,getFilterData,query]) 
  
    // console.log(products)
    console.log(filterData)
   
  return (
    <div>
      <SearchResult filterData={filterData}/>
    </div>
  )
}

export default Product

// 7AOz1pxtiVnSAeAM
