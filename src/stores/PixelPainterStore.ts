import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  selectcolor: string 
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectcolor : ""
})

export const selectColor = (color : string) => {
  PixelPainterStore.update(
    s => {s.selectcolor = color}
  )}

export const changeColor = (y:number, x:number) => {
  PixelPainterStore.update(
    s => {s.canvas[y][x] = s.selectcolor}
  )}

export const clearColor = () => {
  PixelPainterStore.update(
        s => { s.canvas = createEmptyCanvas()}
  )
}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}

const createRandomCanvas = () => {
  const allcolor = ['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01','#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E']
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      let a = getRandomInt(10)
      output[i].push(allcolor[a])
    }
  }
  return output
}

export const randomColor = () => {
  PixelPainterStore.update(
        s => { s.canvas = createRandomCanvas()}
  )
}
