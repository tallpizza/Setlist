import React from "react";
import CanvasDraw from "./utils/index";

import "./popupDrawing.css"

const DrawingCanvas = (props) => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  let CanvasReference = React.useRef(null);
  // CanvasReference.drawImage("../db/img/1.jpg");

  let savedDrawingData = "";
  let localImg = require(`../db/img/${props.img}`);


  return (props.trigger) ? (
    <div className="popupDrawingWindow">
      <div className="buttonList">
      <button onClick={() => CanvasReference.clear()}>Clear</button>
      <button onClick={() => CanvasReference.undo()}>Undo</button>
      <button onClick={() => CanvasReference.loadSaveData(savedDrawingData)}>Load Save Data</button>
      <button
        onClick={() => {
          savedDrawingData = CanvasReference.getSaveData()
          console.log(typeof savedDrawingData)
          console.log(savedDrawingData.length * 2)
        }}>
        Get Save Data
      </button>
      <button onClick={() => props.close(false)}>Close</button>
      </div>
      <CanvasDraw
        ref={canvasDraw => (CanvasReference = canvasDraw)}
        erase={false}
        brushRadius={true ? 10 : 1}
        brushColor={"#000"}
        canvasWidth={width}
        canvasHeight={height}
        disabled={false}
        imgSrc={localImg}

      />
    </div>
  ) : "";
}

export { DrawingCanvas }