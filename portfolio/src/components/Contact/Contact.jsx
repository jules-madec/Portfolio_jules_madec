import './Contact.scss'

function Contact() {
    return (
        <div id="contact">
            <div id="contact__box">
                <div id="contact__title">
                    <h3>Contact</h3>
                </div>
                <div id="contact__body">
                    <div id="contact__qr">
                        <img src={`${import.meta.env.BASE_URL}assets/img/qr-code.svg`} alt="QR code de contact" />
                    </div>
                    <div id="contact__divider"></div>
                    <div id="contact__links">
                        <a href="https://github.com/jules-madec" target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}assets/img/github-icon.png`} alt="" />
                            <h3>Github</h3>
                        </a>
                        <a href="https://www.linkedin.com/in/jules-madec-43079b2b7/" target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}assets/img/linkedin-icon.webp`} alt="" />
                            <h3>Linkedin</h3>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=julesmadec@email.com," target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}assets/img/gmail.svg`} alt="" />
                            <h3>Gmail</h3>
                        </a>
                        <a href="mailto:julomadec@gmail.com" target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}assets/img/email-icon.png`} alt="" />
                            <h3>Email</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
