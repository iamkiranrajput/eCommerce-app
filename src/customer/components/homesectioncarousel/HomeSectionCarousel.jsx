import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomesectionCard from '../homesectioncard/HomesectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';const HomeSectionCarousel = () => {

const responsive={
  0:{items:1},
  720:{items:3},
  1024:{items:5.5},
};

const items = [1,1,1,1,1,1].map((item)=> <HomesectionCard/> );
  return (
    <div className='relative px-4 lg:px-8'>

      <div className='relative p-5'>
        <AliceCarousel
      items={items}
      disableButtonsControls/> 

      <button className='z-50' variant="contained" sx={{position:'absolute', top:"8rem", right:"0rem",transform:"" }} arial-label="next">

      <KeyboardArrowLeftIcon/>
      </button>
      </div>
    </div>
    
  )
}

export default HomeSectionCarousel