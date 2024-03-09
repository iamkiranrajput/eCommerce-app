import { Grid } from '@mui/material'
import React from 'react'

const AddressCard=()=>{
  return (
    <div>
        <div className='space-y-2' >
            <p className='font-semibold'>Raam Kapoor</p>
            <p>Mumbai gokul dham market ,40001</p>
        </div>
        <div className='space-y-1'>
        <p className='font-semibold'> Phone Number</p>
        <p>9876543212</p>
        </div>
    </div>
  )
}

export default AddressCard