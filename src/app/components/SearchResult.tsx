import React from 'react'
import Cart from './Cart'

const SearchResult = ({filterData} :{filterData:any}) => {
  return (
    <div className='w-[85%] mx-auto mt-10'>
    <div className='flex flex-col gap-6 items-center'>
    <div className='space-y-3'>
        <h1 className='text-xl sm:text-2xl font-bold'>Todays top deals :{filterData.length > 0 && filterData.length}</h1>
        <p>Price may be effected on product size and color</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-16 items-center '>
        {
          filterData.map((product:any)=>(
            <div key={product.id}  >
              <Cart product={product}/>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default SearchResult
