import React, { useState, useCallback } from "react";

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

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) return;
    console.log(e.target.files[0])

    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    formData.append('dirID', '../setlist/public/db/img/');

    fetch('http://182.222.233.17:10380/Public/setlistDB/upload.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));

  });

  return (
    <div>
      <button onClick={() => {
        setTrigger(true)
      }}>Edit</button>
      <input type="file" accept="image/*" onChange={onUploadImage}>
      </input>
      <DrawingCanvas img='1.jpg' trigger={trigger} close={setTrigger} />
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
