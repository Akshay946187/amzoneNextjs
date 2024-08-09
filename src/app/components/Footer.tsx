import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#232f3e] p-3 mt-5'>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-4 items-center justify-between text-white min-h-[20vh] py-8">
        <div className='flex items-center justify-center flex-col gap-3'>
          <h1 className='text-xl font-bold sm:text-2xl mb-2'>Get to Know Us</h1>
          <ul className='space-y-3'>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
        </div>
        <div className='flex items-center justify-center flex-col gap-3'>
        <h1 className='text-xl font-bold sm:text-2xl mb-2'>Make Money with Us</h1>
          <ul className='space-y-3'>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
          </ul>
        </div>
        <div className='flex items-center justify-center flex-col gap-3'>
        <h1 className='text-xl font-bold sm:text-2xl mb-2'>Amazon Payment Products</h1>
          <ul className='space-y-3'>
            <li>Amazon Payment Products</li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className='flex items-center justify-center flex-col gap-3'>
        <h1 className='text-xl font-bold sm:text-2xl mb-2'>Let Us Help You</h1>
          <ul className='space-y-3'>
            <li> Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
