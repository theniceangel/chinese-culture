import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import wordCloud from 'wordcloud'

const wordsPool = [
  ['中国', 100],
  [
    '泡面色',
    80,
    {
      path: '/instant-noodles'
    }
  ],
  ['二十四节气', 40],
  ['小吃', 60]
]

const screenWidth = document.documentElement.clientWidth || screen.width
const screenHeight = document.documentElement.clientHeight || screen.height

function WordCloudComponent() {
  const canvasRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    // canvas 高清
    const updateCanvasRatio = (canvas: HTMLCanvasElement) => {
      const dpr = window.devicePixelRatio
      canvas.width = screenWidth * dpr
      canvas.height = screenHeight * dpr
      canvas.style.width = `${screenWidth}px`
      canvas.style.height = `${screenHeight}px`
    }
    updateCanvasRatio(canvasRef.current!)

    wordCloud(canvasRef.current!, {
      list: wordsPool,
      gridSize: 16,
      shape: 'pentagon',
      ellipticity: 1,
      click(item: any) {
        const options = item[2]
        if (options.path) {
          navigate(options.path)
        }
      }
    })
  })
  return <canvas ref={canvasRef} />
}

export default WordCloudComponent
