import React,{ useState } from "react";

import { Swiper, SwiperSlide ,useSwiper} from "swiper/react"
import {Pagination, Navigation} from "swiper"
//https://www.npmjs.com/package/react-canvas-draw
//https://swiperjs.com/swiper-api#parameters

import { DrawingCanvas } from "./popupDrawing";
import CanvasDraw from "./utils/index";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG
} from "react-component-export-image";

import { useIsMobileOrTablet } from "./utils/isMobileOrTablet";

//import style
import 'swiper/css'
import 'swiper/css/pagination'
import "./Slider.css"

const Slider =() =>{
  const [erase, setErase]=useState(false)
  const [color, setColor]=useState("#000")
  const [display, setDisplay]=useState(true)

  
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;


  // const setEditing= ()=>{
  //   const swiper = useSwiper()
  //   setDisplay(!display)
  //   swiper.disable()
  //   console.log(display)
  // }

  const seterase=()=>{
    setErase(!erase)
    console.log(erase)
  }


  const setColorWhite=()=>{
    setColor("#fff")
    console.log(color)
  }
  
  const setColorBlack=()=>{
    setColor("#000")
    console.log(color)
  }

  return (
      <div>
      <button onClick={() => this.setEditing()}>Edit</button>
        <Swiper
          centeredSlides={true}
          allowTouchMove={true}
          modules={[Pagination,Navigation]}
          style={{backgroundColor:"white"}}
          >
          <SwiperSlide>
            <DrawingCanvas/>
          </SwiperSlide>
          <SwiperSlide>
            <DrawingCanvas width={width} height={height} display={display}/>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}



export default Slider
