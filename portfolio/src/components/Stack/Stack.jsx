import { useEffect, useRef } from 'react'
import './Stack.scss'

const iconGroups = [
    ['adobe-illustrator-svgrepo-com.svg', 'CSS.svg', 'figma-logo-svgrepo-com.svg'],
    ['html5-balck-icon.svg', 'java-svgrepo-com.svg'],
    ['javascript-logo-svgrepo-com.svg', 'logo-python-svgrepo-com.svg', 'logo-react-svgrepo-com.svg'],
    ['nodejs-logo-svgrepo-com.svg', 'php-svgrepo-com.svg'],
    ['symfony-svgrepo-com.svg', 'wordpress-logo-svgrepo-com.svg', 'adobe-photoshop-logo-svgrepo-com.svg'],
]

function Stack() {
    const trackRef = useRef(null)

    // Reprend le défilement infini du script.js d'origine : translation continue
    // du track, puis on renvoie le premier groupe à la fin une fois qu'il est sorti.
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const gap = 60
        const speed = 0.5
        let position = 0
        let frameId

        const animate = () => {
            position += speed
            track.style.transform = `translateX(-${position}px)`

            const first = track.children[0]
            if (first) {
                const firstWidth = first.offsetWidth + gap
                if (position >= firstWidth) {
                    track.appendChild(first)
                    position -= firstWidth
                }
            }

            frameId = requestAnimationFrame(animate)
        }

        frameId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frameId)
    }, [])

    return (
        <div id="stack">
            <div id="stack__title">
                <h3>Stack technique</h3>
            </div>
            <div className="stack__track" ref={trackRef}>
                {iconGroups.map((icons, groupIndex) => (
                    <div key={groupIndex}>
                        {icons.map((icon) => (
                            <img key={icon} src={`/assets/img/${icon}`} alt="" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stack
