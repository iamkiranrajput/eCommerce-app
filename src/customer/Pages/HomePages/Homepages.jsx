import React from 'react'
import MainCarousel from '../../MainCarousel';
import HomeSectionCarousel from '../../components/homesectioncarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';

function Homepages() {
  return (
    <>
  <div>

<MainCarousel/>
</div>

<div
      className='space-y10 py-20 flex flex-col justify-center px-5 lg:px-10'>


  {/* pass argument mens_kurta */}
      <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
  
      <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoes"}/>
      <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirt"}/>
      <HomeSectionCarousel data={mens_kurta} sectionName={"Women Dress"} />
      <HomeSectionCarousel data={mens_kurta} sectionName={"Women Sarees"}/>


      </div>

    </>
  
  )
}

export default Homepages;