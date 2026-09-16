import { useState } from 'react'
import './Header.scss'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const closeNav = () => setIsNavOpen(false)

    return (
        <header>
            <nav id="header">
                <div id="header__logo">
                    <a href="#home">
                        <img src={`${import.meta.env.BASE_URL}assets/img/logo.svg`} alt="julesDev" />
                    </a>
                </div>

                <div
                    id="header__burger"
                    className={isNavOpen ? 'header__burger--active' : ''}
                    onClick={() => setIsNavOpen((open) => !open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="header__nav" className={isNavOpen ? 'header__nav--active' : ''}>
                    <a href="#home" onClick={closeNav}>
                        <h3>Accueil</h3>
                    </a>

                    <a href="#projects" onClick={closeNav}>
                        <h3>Projets</h3>
                    </a>

                    <a href="#contact" onClick={closeNav}>
                        <h3>Contact</h3>
                    </a>

                    <a id="header__cta" href={`${import.meta.env.BASE_URL}assets/docs/CV_jules_madec_compressed.pdf`} target="_blank" rel="noreferrer" onClick={closeNav}>
                        <h3>Mon CV</h3>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
