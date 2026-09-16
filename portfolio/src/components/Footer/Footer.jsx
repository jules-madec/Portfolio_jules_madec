import './Footer.scss'

function Footer() {
    return (
        <footer id="footer">
            <div className="footer__inner">
                <div className="footer__logo">
                    <a href="#home">
                        <img src="/assets/img/logo.svg" alt="logo Jules Madec" />
                    </a>
                </div>

                <div className="footer__col">
                    <h4>Contact</h4>
                    <a href="mailto:julomadec@gmail.com">julomadec@gmail.com</a>
                    <span>Compiègne, France</span>
                    <a href="/assets/docs/CV_jules_madec_compressed.pdf" target="_blank" rel="noreferrer">
                        Télécharger mon CV
                    </a>
                </div>

                <div className="footer__col">
                    <h4>Réseaux</h4>
                    <a href="https://github.com/jules-madec" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/jules-madec-43079b2b7/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© 2026 Jules Madec — Tous droits réservés</p>
                <div className="footer__links">
                    <a href="/politique.html">Mentions légales</a>
                    <a href="/politique.html">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
