import { useEffect, useRef } from 'react'
function List() {
  const scrollRef = useRef(null)
  useEffect(() => {})
  return <div className="inset-0" ref={scrollRef}></div>
}

export default List
