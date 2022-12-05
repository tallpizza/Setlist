import React,{ useState } from "react";

import { Swiper, SwiperSlide ,useSwiper} from "swiper/react"
import {Pagination, Navigation} from "swiper"
//https://www.npmjs.com/package/react-canvas-draw
//https://swiperjs.com/swiper-api#parameters

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

const DrawingCanvas = ({width, height, display}) => {
  return (
    <>
      <div className="touchallow" style={{width:{width}, height:{height},display:{display}?'block':'none'}}>
      </div>
      <button onClick={() => this.setColorWhite()}>White</button>
      <button onClick={() => this.setColorBlack()}>black</button>
      <button onClick={()=>this.seterase()}>erase</button>
      <CanvasDraw
        erase={false}
        brushRadius={true ? 10 : 1}
        brushColor={"#fff"}
        canvasWidth={width}
        canvasHeight={height}
        disabled={false}
        imgSrc="http://182.222.233.17:10380/Public/sample.jpg"
      />
    </>
  )
}

export default Slider
