import type React from 'react'

interface VerticalTextProps {
  text: string
}

const VerticalText: React.FC<VerticalTextProps> = ({ text }) => {
  return <div className="write-vertical-right">{text}</div>
}

export default VerticalText
