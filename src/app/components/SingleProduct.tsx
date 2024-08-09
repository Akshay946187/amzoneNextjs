import React from 'react'
import Image from 'next/image'
import AddtoCart from './AddtoCart'

const SingleProduct = ({singleProduct}:{singleProduct:any}) => {
  return (
    <div className='w-[90%] mx-auto mt-10'>
      <div className="container flex items-center justify-between">
        <div className='min-w-[500px] flex items-center justify-center'>
          {
            singleProduct.map((item:any)=>(
              <div key={item.id} className='flex flex-col md:flex-row gap-6'>
              <div  className='flex flex-col sm:flex-row gap-8 sm:gap-10 items-center   w-[70vw] '>
                <div>
                  <Image src={item.image} width={240} height={290} alt='item.title'/>
                </div>
                {/* contant */}
                <div className='max-w-[50%] space-y-3'>
                  <h1 className='text-xl sm:text-2xl font-bold'>{item.title}</h1>
                 <div className=' w-[90vw] mx-auto -ml-7 sm:w-full'>
                 <h1 className='text-xl sm:text-2xl font-bold'>About item</h1>
                  <p>{item.description}</p>
                 </div>
                  <p className='text-xl font-bold'>Price:$ <span className='text-xl text-orange-500'>{item.price}</span></p>
                </div>
              </div>
               <div>
               <AddtoCart singleProduct={item}/>
             </div>
             </div>
            ))
          }
        </div>

      
       
      </div>
    </div>
  )
}

export default SingleProduct
