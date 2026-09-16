import { useCallback, useEffect, useRef, useState } from 'react'

// Reproduit le carrousel auto-play (3s) + flèches + dots de l'ancien script.js,
// sans manipulation directe du DOM (React gère le rendu des slides).
export function useCarousel(slideCount, delay = 3000) {
    const [activeIndex, setActiveIndex] = useState(0)
    const timerRef = useRef(null)

    const stopAuto = useCallback(() => {
        clearInterval(timerRef.current)
    }, [])

    const startAuto = useCallback(() => {
        stopAuto()
        timerRef.current = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slideCount)
        }, delay)
    }, [slideCount, delay, stopAuto])

    useEffect(() => {
        startAuto()
        return stopAuto
    }, [startAuto, stopAuto])

    const goToSlide = (index) => {
        setActiveIndex(((index % slideCount) + slideCount) % slideCount)
        startAuto()
    }

    const next = () => goToSlide(activeIndex + 1)
    const prev = () => goToSlide(activeIndex - 1)

    return { activeIndex, goToSlide, next, prev, onMouseEnter: stopAuto, onMouseLeave: startAuto }
}
