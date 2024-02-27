import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:"black", color:"white", py:3}}
        > 
     
        <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'  gutterBottom>company</Typography>

                <div>
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>

                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Jobs</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Partner</Button>
                    
                    </div>

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'  gutterBottom>Solution</Typography>

                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>

                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Commerce</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Insight</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Support</Button>
                    
                    </div>

        </Grid> <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'  gutterBottom>Documentation</Typography>

                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>

                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>API Status</Button>
                    
                    </div>
              

        </Grid> <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'  gutterBottom>Legal</Typography>

                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>

                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                    
                    </div>
                    <div>
                <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                    
                    </div>
                

        </Grid>

        <Grid className='pt-20' item xs={12}>
        <Typography variant='body2' component="p" align='center'>Made with Love by Me.</Typography>

                    <Typography variant='body2' component="p" align='center'> &copy; 2024 My Company All rigths reserved.</Typography>
            

                </Grid>
        </Grid>
    

    </div>
  )
}

export default Footer