import React from 'react'
import { colord } from 'colord'
interface RGBProps {
  hex: string
}

const RGB: React.FC<RGBProps> = ({ hex }) => {
  const { r, g, b } = colord(hex).toRgb()
  const items = [
    {
      type: 'R',
      value: r
    },
    {
      type: 'G',
      value: g
    },
    {
      type: 'B',
      value: b
    }
  ]
  const listItems = items.map(({ type, value }, index) => (
    <span className="mr-6" key={index}>
      <span className="">{type}</span>
      <span className="mx-2 inline-block h-12px w-1px bg-instant-noodles-gold"></span>
      <span>{value}</span>
    </span>
  ))
  return <>{listItems}</>
}

export default RGB
