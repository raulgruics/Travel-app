import React from 'react'
import './ImgCarouselStyle.css'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BoraBora from "../../assets/01.jpg";
import BoraBora2 from "../../assets/02.jpg";
import Maldives from "../../assets/03.jpg";


function ImgCarousel() {
  return (
      <div name="carousel" className='container-carousel'>
    <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={BoraBora} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={BoraBora2}/>
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={Maldives}/>
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
      </div>
  );
}

export default ImgCarousel