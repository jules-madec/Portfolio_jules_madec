import { useEffect, useRef } from 'react'
import './Home.scss'

function Home() {
    const ballWhite1Ref = useRef(null)
    const ballWhite2Ref = useRef(null)
    const ballBlue1Ref = useRef(null)
    const ballBlue2Ref = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            if (ballWhite1Ref.current) ballWhite1Ref.current.style.transform = `translateY(${scrolled * 0.3}px)`
            if (ballWhite2Ref.current) ballWhite2Ref.current.style.transform = `translateY(${scrolled * 0.5}px)`
            if (ballBlue1Ref.current) ballBlue1Ref.current.style.transform = `translateY(${scrolled * 0.2}px)`
            if (ballBlue2Ref.current) ballBlue2Ref.current.style.transform = `translateY(${scrolled * 0.4}px)`
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div id="home">
            <div id="home__intro">
                <div id="home__title">
                    <h1>
                        Développeur <span>Full-Stack</span>
                    </h1>
                </div>
                <div id="home__text">
                    <p>
                        Je m'appelle <strong>Jules Madec</strong>, j&rsquo;ai 19 ans et je suis en 3ᵉ année de Bachelor Chef de
                        Projet Développement &amp; IA à LA MANU (Compiègne).
                        <span>
                            Passionné par le développement web et l&rsquo;innovation, je développe des projets modernes et
                            performants tout en cherchant constamment à progresser et relever de nouveaux défis.
                        </span>
                    </p>
                </div>
            </div>
            <div id="home__cards">
                <div id="home__ball--white-1" ref={ballWhite1Ref}></div>
                <div id="home__ball--white-2" ref={ballWhite2Ref}></div>
                <div id="home__ball--blue-1" ref={ballBlue1Ref}></div>
                <div id="home__ball--blue-2" ref={ballBlue2Ref}></div>
                <div id="home__card--white-1"></div>
                <div id="home__card--white-2"></div>
                <div id="home__card--blue">
                    <div id="home__card-photo">
                        <img src={`${import.meta.env.BASE_URL}assets/img/profile-photo.png`} alt="Photo de Jules Madec" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
