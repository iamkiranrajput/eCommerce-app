import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { Star } from '@mui/icons-material'
import StarIcon from '@mui/icons-material/Star';

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

    <Grid className='space-y-5' container>
    {[1,1,1,1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>

<Grid item xs={6}>

  <div className='flex items-center space-x-4'>

    <img className='w-[5rem h-[5rem] object-cover object-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lA_tUhnIo-w5OcZRiLg2dwVc5PCwXCwBwcWY0Rw86dowfqEkNhSVuzfwuFm-n20FMeo&usqp=CAU' />

    <div className='space-y-2 ml-5'>
    <p className='font-semibold'>Men Slim Rise Black Jeans</p>
    <p className='space-x-5 opacity-50 font-semibold'><span>Color : pink</span> <span>Size : M</span></p>
    <p>Seller : Lineria</p>
    <p>$1099</p>

    </div>
  </div>
</Grid>
<Grid>
  <Box sx={{color:deepPurple[500]}}>
      <StarIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
      <span>Rate & Review Product</span>
  </Box>
</Grid>

</Grid>)}
      
    </Grid>

    </div>
  )
}

export default OrderDetails