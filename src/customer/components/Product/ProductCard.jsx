import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
function ProductCard({product}) {
    const navigate =useNavigate();

  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='Product-Card w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-full w-full object-cover object-left-top'>
            <img src={product.imageUrl} alt=''/>
       
            <div className='textPart bg-white p-1'>
                <div>
                    <p className='font-bold opacity-60'> </p>
                    <p>{product.title}</p>
                </div> 
                <div className=' flex  items-center space-x-2'>
                    <p className='font-semibold '>{product.price}</p>
                    <p className='line-through opacity-50'>{product.discountPrice}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPercent}</p>
                </div>
            </div>
    </div>
</div>
    )
}

export default ProductCard