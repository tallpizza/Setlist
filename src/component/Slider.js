import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
//https://www.npmjs.com/package/react-canvas-draw
//https://swiperjs.com/swiper-api#parameters

import { DrawingCanvas } from "./popupDrawing";
import ShowScore from "./ShowScore";

import 'swiper/css'
import 'swiper/css/pagination'
import "./Slider.css"

const Slider = () => {
  
  const [trigger, setTrigger] = useState(false)


  return (
    <div>
      <button onClick={() => {
        setTrigger(true)
      }}>Edit</button>
      <DrawingCanvas img='1.jpg' trigger={trigger} close={setTrigger}/>
      <Swiper
        centeredSlides={true}
        allowTouchMove={true}
        modules={[Pagination, Navigation]}
        style={{ backgroundColor: "white" }}
      >
        <SwiperSlide>
          <ShowScore img='1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <ShowScore img='2.png' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}



export default Slider
