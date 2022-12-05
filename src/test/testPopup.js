import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import CanvasDraw from '../component/utils/index';


const Popup = (props) => {
    let saveableCanvas = React.useRef(null);
    let savedDrawingData = ""


    return (props.trigger) ? (
        <div>
            <div >
                <button onClick={() => props.offbtn(false)} >X</button>
                {props.children}
            </div>
            <button onClick={() => saveableCanvas.clear()}>Clear</button>
            <button onClick={() => saveableCanvas.undo()}>Undo</button>
            <button onClick={() => saveableCanvas.loadSaveData(savedDrawingData)}>Load Save Data</button>
            <button
                onClick={() => {
                    savedDrawingData = saveableCanvas.getSaveData()
                    console.log(typeof savedDrawingData)
                    console.log(savedDrawingData.length*2)
                }}>
                Get Save Data
            </button>
            <CanvasDraw
                ref={canvasDraw => (saveableCanvas = canvasDraw)}
                erase={false}
                loadTimeOffset={1.2}
                brushRadius={true ? 10 : 1}
                brushColor={"#000"}
                canvasWidth={"100vw"}
                canvasHeight={"100vh"}
                disabled={false}
                imgSrc={"./img/1.jpg"}
            />
        </div>

    ) : "";
}

export { Popup }