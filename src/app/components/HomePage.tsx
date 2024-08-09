'use client'
import React, { useEffect } from 'react'
import {useRouter} from 'next/navigation'
import { useSuperbase} from '@/lib/superbase/hooks/useSuperbase'
import CatiProduct from './shared/CatiProduct'
import home from '@/../public/home2.jpg'
import Image from 'next/image'
import Footer from './Footer'

const HomePage = () => {
  const navigate = useRouter()
    const {getMenProduct,menProduct,getWomenProduct,womenProduct,jewelry,getJewlry} = useSuperbase()
    useEffect(()=>{
        getMenProduct()
        getWomenProduct(`women's clothing`)
        getJewlry()
       
    },[getJewlry,getMenProduct,getWomenProduct])
   
  return (
    <>
<div className="relative w-full h-[80vh]">
  <Image src={home} alt="home" className="object-cover w-full h-full" />
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
</div>

      <div className='relative -top-10 flex flex-col items-center justify-between  p-2 bg-gray-300 w-[90vw] mx-auto '>
        <div className='mt-2 py-6 space-y-3'>
        <h1 className='text-xl sm:text-2xl font-bold text-center'>Men`s Clothing</h1>
      <CatiProduct data={menProduct}/>
        </div>
      
     <div className='mt-2 py-6 space-y-3'>
     <h1 className='text-xl sm:text-2xl font-bold text-center'>Women`s Clothing</h1>
     <CatiProduct data={womenProduct}/>
     </div>

     <div className='mt-2 py-6 space-y-3'>
     <h1 className='text-xl sm:text-2xl font-bold text-center'>Jewelry</h1>
     <CatiProduct data={jewelry}/>
     </div>
      
      </div>
      <div className='flex flex-col gap-0 bg-[#232f3e]' onClick={()=>navigate.push('/')}>
      <button className='w-full bg-[#37475a] py-4 text-center'>Move TO Top</button>
        <Footer/>
      </div>
      </>
   
  )
}

export default HomePage
