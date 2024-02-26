import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomesectionCard from '../homesectioncard/HomesectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta';


// add parameter as data
const HomeSectionCarousel = ({data, sectionName}) => {


  const [activeIndex,setActiveIndex]=useState(0)

const responsive={
  0:{items:1},
  550:{item:2},
  720:{items:3},
  1024:{items:5},
};

const slidePrev=()=>setActiveIndex(activeIndex-1);
const slideNext=()=>setActiveIndex(activeIndex+1);
const syncActiveIndex=({item})=>setActiveIndex(item);

const items= data.slice(0,10).map((item)=><HomesectionCard product={item} />);


// const items = [1,1,1,1,1,1,1,1].map((item)=> <HomesectionCard /> );
// const items = Array.from({ length: 5 }, (_, index) => (
//   <HomesectionCard key={index} />
// ));


  return (
    <div className=' px-4 lg:px-8 border mt-2'>
      <h2 className='text-2x1 font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel items={items}
         disableButtonsControls
          disableDotsControls
           responsive={responsive}
            onSlideChanged={syncActiveIndex}
             activeIndex={activeIndex}
      /> 
      
     {activeIndex !== items.length-5 &&
     <Button className='z-50 bg-blue-400' variant="contained" sx={{ position:"absolute", top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}} arial-label="next" onClick={slideNext} >

      <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}} onClick={slideNext} />
     </Button>
     }

{activeIndex!==0 &&
     <Button onClick={slidePrev} className='z-50 bg-blue-400' variant="contained" sx={{position:'absolute', top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(90deg)",bgcolor:"white"}} arial-label="next" >

<KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)", color:"black"}}  onClick={slidePrev}  />
</Button>}
      </div>
    </div>
    
  );
};

export default HomeSectionCarousel