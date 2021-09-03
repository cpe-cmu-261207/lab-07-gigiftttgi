import { PixelPainterStore,randomColor,clearColor } from "../stores/PixelPainterStore"


const Utility = () => {
  
  const state = PixelPainterStore.useState()

  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick = {ev => clearColor()} >Clear</button>
      <button className="w-36" onClick = {ev => randomColor()} >Random color</button>
    </div>
  )
}

export default Utility