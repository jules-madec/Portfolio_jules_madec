import { useEffect, useRef } from 'react'
import './CursorCircle.scss'

function CursorCircle() {
  const circleRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!circleRef.current) return
      circleRef.current.style.left = `${e.clientX}px`
      circleRef.current.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div className="cursor__circle" ref={circleRef}></div>
}

export default CursorCircle
