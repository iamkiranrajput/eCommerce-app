import React from 'react'
import "./ProductCard.css"
function ProductCard() {
  return (
    <div className='Product-Card w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-full w-full object-cover object-left-top'>
            <img src='https://www.ethnicplus.in/media/catalog/product/cache/77b9a44d9276879ccdde931a01149182/e/z/ezgif-3-ac4d20f150.jpg' alt=''/>
       

            <div className='textPart bg-white p-1'>
                <div>
                    <p className='font-bold opacity-60'> Universaloutfit</p>
                    <p>
                    Casual Puff womwn sky blue golden sarees

                    </p>
                </div> 
                <div className=' flex  items-center'>
                    <p className='font-semibold '>199$</p>
                    <p className='line-through opacity-50'>1999$</p>
                    <p className='text-green-600 font-semibold'>70% off</p>
                </div>
            </div>
    </div>
</div>
    )
}

export default ProductCard