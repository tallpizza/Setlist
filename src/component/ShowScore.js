import React from 'react'
import CanvasDraw from './utils/index';

const ShowScore = (props) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let CanvasReference = React.useRef(null);

    let savedDrawingData = "";
    let localImg = `./db/img/${props.img}`


    return (
        <>
            <CanvasDraw
                ref={canvasDraw => (CanvasReference = canvasDraw)}
                hideInterface={true}
                canvasWidth={width}
                canvasHeight={height}
                disabled={true}
                imgSrc={localImg}
            />
        </>
    )
}

export default ShowScore