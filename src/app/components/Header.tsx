"use client"
import React, { useState } from 'react'
import logo from '../../../public/amazon-logo-2.webp'
import Image from 'next/image'
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/superbase/hooks/redux';
import { getCart } from '@/store/cartSlice';

const Header = () => {
  const[query , setQuery] = useState<String>('')
  const router = useRouter()
  const handleSearch = ()=>{
    router.push(`/produts/${query}`)
  }

  const cart = useAppSelector(getCart)
 
  
  const itemList = [
    "All",
   " Today's Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell"
  ]
  return (
    <>
    <div className='bg-[#131921] text-white'>
      <div className="container w-[92%] mx-auto py-3 flex items-center justify-between gap-3">
        <div className='flex items-center gap-4'>
           <div>
           <Image src={logo} alt='logo' width={150} height={150}/>
           </div>
           <div className='flex items-center gap-1'>
            <div>
            <FaMapMarkerAlt size={15} className='mt-2'/>
            </div>
           <div className='leading-3 hidden sm:block'>
           <p className='text-sm'>Deliver to</p>
            <p>India</p>
           </div>
           </div>
        </div>
        <div className='w-[60%] flex items-center'>
            <input type="text"
            value={query.toString()}
            onChange={(e)=>setQuery(e.target.value)}
             placeholder='Search Amazone.in'
             className='w-full py-2 px-2 rounded-l-md outline-none text-black ' />
            <div className='bg-[#febd69] rounded-r-md py-2 px-2'>
            <IoIosSearch  size={24} className='text-black cursor-pointer' onClick={handleSearch}/>
            </div>
        </div>
        {/* right side text  */}
        <div className='flex items-center gap-3'>
            <div className='leading-4 '>
                <p className='text-[12px] leading-[14px] '>Hello,sign in</p>
                <p className='hidden sm:block'>Account & Lists</p>
            </div>
            <div className='leading-4 hidden sm:block'>
                <p className='text-[12px] leading-[14px] '>Returns</p>
                <p>& Orders</p>
            </div>
            <div className='relative' onClick={()=>router.push('/cart')}>
                <p className='absolute left-[9px] bottom-4'>{cart.length >= 0 && cart.length}</p>
            <BsCart2  size={25}/>
            </div>
        </div>
      </div>
    </div>
    <div className='bg-[#232F3E] text-white  w-full p-2 flex items-center justify-between'>
      <div className='hidden sm:block'>      {
        itemList.map((item,index)=>(
          <Link key={index} href={`/`}  className='mx-2 p-2 border border-white border-opacity-0 hover:border-opacity-100'>{item}</Link>
        ))
      }
      </div>
     <div className='mr-4'>
      <h1 className='text-[#febd69] font-bold hover:underline cursor-pointer'>Sign out</h1>
     </div>
    </div>
    </>
  )
}

export default Header
