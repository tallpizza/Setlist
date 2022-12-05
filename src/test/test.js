import "./test.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Popup } from "./testPopup"
import React, { useState } from 'react'

const Testscreen = () => {
    const [trigger, setTrigger] = useState(false)


    return <div className="main">
        <SwiperSlide>
            <div className="touch">
                hello
            </div>
            <button onClick={()=> setTrigger(true)}>open popup</button>
            <Popup trigger={trigger} offbtn={setTrigger}>
                <h3>hello</h3>
            </Popup>
        </SwiperSlide>
    </div>
};

export { Testscreen }
