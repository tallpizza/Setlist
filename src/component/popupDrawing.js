import CanvasDraw from "./utils/index";


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

  export { DrawingCanvas }