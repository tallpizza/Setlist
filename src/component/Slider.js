import React, { useState, useCallback, useEffect } from "react";
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

  const [trigger, setTrigger] = useState(false);
  const [slideCount, setSlideCount] = useState([]);

  useEffect(() => {
    const data = new FormData();
    data.append('func', 'getNumberofSlides');
    data.append('session', '2022.11.07');
    data.append('dirID', '../setlist/public/db/img/');

    fetch('http://182.222.233.17:10380/Public/setlistDB/upload.php', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(data => { setSlideCount(data['data']) })
  },[])


  const onUploadImage = useCallback((e) => {
    if (!e.target.files) return;
    console.log(e.target.files[0])

    const formData = new FormData();
    formData.append('func', 'upload');
    formData.append('image', e.target.files[0]);
    formData.append('session', '2022.11.07');
    formData.append('dirID', '../setlist/public/db/img/');

    fetch('http://182.222.233.17:10380/Public/setlistDB/upload.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          //refresh page
          window.location.reload();
        }})
      .catch(error => console.log(error));

  });
  console.log(typeof slideCount)

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
        {slideCount.map((value, index) => (
          <SwiperSlide key={index}>
            <ShowScore img={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}



export default Slider
