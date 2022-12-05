import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import {Pagination, Navigation} from "swiper"
import CanvasDraw from "react-canvas-draw";
//https://www.npmjs.com/package/react-canvas-draw
//https://swiperjs.com/swiper-api#parameters

//import style
import 'swiper/css'
import 'swiper/css/pagination'
import "./Slider.css"

class Slider extends React.Component{
  constructor(){
    super();
    this.state = {
      erase : false

    }

    this.width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
    this.display = 'display'
    
  }

  seterase(){
    this.setState({
      erase:!this.state.erase
    })
    console.log(this.state.erase)

  }

  render() {
    return (
      <div>
        <Swiper
          centeredSlides={true}
          allowTouchMove={true}
          
          modules={[Pagination,Navigation]}
          style={{backgroundColor:"white"}}
          >
          <SwiperSlide>
          <div className="touchallow" style={{width:this.width, height:this.height ,display:this.display}}>
              </div>
            <CanvasDraw
              canvasWidth={this.width}
              canvasHeight={this.height}
              disabled={false}
              imgSrc="http://182.222.233.17:10380/Public/sample.jpg"
              />
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={()=>this.seterase()}>erase</button>
            <CanvasDraw
              erase={this.state.erase}
              canvasWidth={this.width}
              canvasHeight={this.height}
              disabled={false}
              imgSrc="http://182.222.233.17:10380/Public/sample2.jpg"
              />
          </SwiperSlide>
        </Swiper>
      </div>
  )
}}


export default Slider
