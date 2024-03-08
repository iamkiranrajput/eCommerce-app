import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
    <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
    </div>

    <div className='py-20'>
      <OrderTracker activeStep={3}/>
    </div>
    </div>
  )
}

export default OrderDetails