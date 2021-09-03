import { useState } from "react"
import { PixelPainterStore, selectColor } from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  const state = PixelPainterStore.useState()

  //modify this function to highlight correctly
  const computeRingSize = (selectcolor : string) => {
    if(color == selectcolor)
      return "ring-8 ring-green-400"
    else
      return ""
  }

  return (
    <div className={`${computeRingSize(state.selectcolor)} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick = {ev => selectColor(color)}
    >
    </div>
  )
}

export default SelectColorButton