function ProjectHighlight({ title, description, tags, icon, link, linkText = 'En savoir plus' }) {
    return (
        <article className="project-card project-card--highlight">
            <div className="project-card__media project-card__media--icon">
                <span className="project-card__icon">{icon}</span>
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

export default ProjectHighlight
