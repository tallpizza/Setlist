import React,{ useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"
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


const SetEditing= ({displayStat,swiperStat})=>{
  const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

  const [erase, setErase] = useState(false)
  const [color, setColor] = useState("#000")
  // const [displayStat, setDisplay] = useState(true)
  // const [swiperStat, setSwiper] = useState (false)
  //
  // setDisplay(!displayStat)
  // setSwiper(!swiperStat)

return (
    <Swiper
      centeredSlides={true}
      allowTouchMove={swiperStat}
      
      modules={[Pagination,Navigation]}
      style={{backgroundColor:"white"}}
      >
      <SwiperSlide>
      <div className="touchallow" style={{width:width, height:height ,display:displayStat?"block":"none"}}>
      </div>
        <CanvasDraw
          canvasWidth={width}
          canvasHeight={height}
          disabled={false}
          imgSrc="http://182.222.233.17:10380/Public/sample.jpg"
          />
      </SwiperSlide>
      <SwiperSlide>
      <div className="touchallow" style={{width:width, height:height ,display:displayStat?"block":"none"}}>
      </div>
        <button onClick={()=>setColor("#fff")}>White</button>
        <button onClick={() => setColor("#000")}>black</button>
        <button onClick={()=>setErase(!erase)}>erase</button>
        <CanvasDraw
          erase={erase}
          brushRadius={erase ? 10 : 1}
          brushColor={color}
          canvasWidth={width}
          canvasHeight={height}
          disabled={false}
          imgSrc="http://182.222.233.17:10380/Public/sample2.jpg"
          />
      </SwiperSlide>
    </Swiper>
    )
}

function Slider (){

    return (
      <div>
      <button onClick={()=>SetEditing(true,true)}>Edit</button>
      <SetEditing></SetEditing>
      </div>
  )
}


export {Slider}
