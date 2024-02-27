import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { mainCarouselData } from './components/homecarousel/MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel=()=> {


    const items =mainCarouselData.map((item)=> <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt=''/>)

    
  return (
    <AliceCarousel
    
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    
   
/>  )
}

export default MainCarousel;