import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56, height:56, bgcolor:"#9155fd"}}>R</Avatar>
                </Box>

            </Grid>
            <Grid item xs={10}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Karn</p>
                        <p className='opacity-70'>April 5,2023</p>
                    </div>

                </div>

                <Rating value={4.5} name="half rating" readOnly precision={.5} />
                <p>
                      Nice Product, I Love this shirt
                </p>
            </Grid>


        </Grid>

    )
}

export default ProductReviewCard