import { useCarousel } from './useCarousel'

function ProjectCard({ title, description, tags, images, link, linkText = 'Voir le projet' }) {
    const { activeIndex, goToSlide, next, prev, onMouseEnter, onMouseLeave } = useCarousel(images.length)

    return (
        <article className="project-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="project-card__media">
                {images.map((img, i) => (
                    <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className={`project-card__slide${i === activeIndex ? ' project-card__slide--active' : ''}`}
                    />
                ))}

                <button
                    type="button"
                    className="project-card__arrow project-card__arrow--left"
                    aria-label="Image précédente"
                    onClick={prev}
                >
                    ‹
                </button>
                <button
                    type="button"
                    className="project-card__arrow project-card__arrow--right"
                    aria-label="Image suivante"
                    onClick={next}
                >
                    ›
                </button>

                <div className="project-card__dots">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Voir l'image ${i + 1}`}
                            className={`project-card__dot${i === activeIndex ? ' project-card__dot--active' : ''}`}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
            </div>

            <div className="project-card__body">
                <div className="project-card__tags">
                    {tags.map((tag) => (
                        <span key={tag} className="project-card__tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>
                <a className="project-card__cta" href={link} target="_blank" rel="noreferrer">
                    {linkText}
                </a>
            </div>
        </article>
    )
}

export default ProjectCard
