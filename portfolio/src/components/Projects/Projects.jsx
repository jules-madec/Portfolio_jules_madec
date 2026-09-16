import './Projects.scss'
import ProjectCard from './ProjectCard'
import ProjectHighlight from './ProjectHighlight'

const mediaProjects = [
    {
        id: 'dealgames',
        title: 'Dealgames',
        description:
            "Plateforme de revente de jeux vidéo d'occasion entre particuliers : dépôt d'annonces et négociation du prix en direct. Conçue et développée entièrement par moi, du design à l'intégration front-end.",
        tags: ['Symfony', 'CSS', 'JavaScript'],
        images: [
            { src: `${import.meta.env.BASE_URL}assets/img/project-dealgames-1.png`, alt: 'Page d’accueil de Dealgames' },
            { src: `${import.meta.env.BASE_URL}assets/img/project-dealgames-2.png`, alt: 'Fiche d’un jeu sur Dealgames' },
            { src: `${import.meta.env.BASE_URL}assets/img/project-dealgames-3.png`, alt: 'Espace de négociation sur Dealgames' },
        ],
        link: 'https://github.com/jules-madec/deal_games',
        linkText: 'Voir le code',
    },
    {
        id: 'colimbrick',
        title: 'Colimbrick',
        description:
            "Site vitrine WordPress pour une entreprise naissante, réalisé avec le centre de recherche de l'UTC et Iterra : personnalisation CSS sur-mesure, formulaire de contact et mise en page Gutenberg.",
        tags: ['WordPress', 'PHP', 'CSS'],
        images: [
            { src: `${import.meta.env.BASE_URL}assets/img/project-colimbrick-1.png`, alt: 'Page d’accueil de Colimbrick' },
            { src: `${import.meta.env.BASE_URL}assets/img/project-colimbrick-2.png`, alt: 'Création d’un devis sur Colimbrick' },
            { src: `${import.meta.env.BASE_URL}assets/img/project-colimbrick-3.png`, alt: 'Formulaire rempli sur Colimbrick' },
        ],
        link: 'https://colimbrick.com',
        linkText: 'Voir le site',
    },
]

const highlightProjects = [
    {
        id: 'tricount',
        title: 'Tricount',
        description:
            "Application de partage de frais dédiée à des projets écologiques, pour suivre et répartir facilement les dépenses d'un groupe.",
        tags: ['React', 'JavaScript', 'Bootstrap'],
        link: 'https://github.com/Boursier-Enzo/Projet-Tricount',
        linkText: 'Voir sur GitHub',
    },
    {
        id: 'shopify-woocommerce',
        title: 'Shopify → WooCommerce',
        description:
            "Scraper en Python qui récupère les produits d'une boutique Shopify et génère un fichier CSV prêt à importer dans WooCommerce.",
        tags: ['Python',],
        link: 'https://github.com/jules-madec/B2P2_Python_TE02_Madec_Jules',
        linkText: 'Voir sur GitHub',
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        description:
            'Mon portfolio personnel, développé avec React et Vite, pour présenter mes projets et mes compétences.',
        tags: ['React', 'Vite', 'JavaScript', 'Sass'],
        link: 'https://github.com/jules-madec/Portfolio_jules_madec',
        linkText: 'Voir sur GitHub',
    },
    {
        id: 'algami-preco',
        title: 'Page de précommande Algami',
        description:
            "Page WordPress réalisée pour Algami afin de présenter un nouveau produit et de recueillir les précommandes grâce à un formulaire dédié.",
        tags: ['WordPress', 'PHP', 'CSS'],
        link: null,
        linkText: 'Bientôt disponible',
    },
    {
        id: 'tv-la-manu',
        title: 'Affichage TV La Manu',
        description:
            "Application d'affichage pour la télé de La Manu : elle présente les actualités de Compiègne et les emplois du temps accessibles à tous.",
        tags: ['Symfony', 'PHP', 'Twig'],
        link: 'https://github.com/jules-madec/symfony_td_tele',
        linkText: 'Voir sur GitHub',
    },
    {
        id: 'vinted-sneakers',
        title: 'Bot Discord Vinted Sneakers',
        description:
            "Bot Discord qui surveille les nouvelles annonces Vinted pour repérer les sneakers au meilleur prix et envoie une alerte dès qu'une bonne affaire apparaît.",
        tags: ['Python', 'discord.py'],
        link: null,
        linkText: 'En cours de développement',
    },
]

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects__intro">
                <span className="projects__eyebrow">Portfolio</span>
                <h2 className="projects__heading">Mes projets</h2>
                <p className="projects__lead">Quelques réalisations récentes, de la conception à la mise en ligne.</p>
            </div>

            <div className="projects__grid">
                {mediaProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
                {highlightProjects.map((project) => (
                    <ProjectHighlight key={project.id} {...project} />
                ))}

                <a className="project-card project-card--more" href="https://github.com/jules-madec" target="_blank" rel="noreferrer">
                    <span className="project-card__more-icon">＋</span>
                    <span className="project-card__more-title">Et bien d&rsquo;autres...</span>
                    <span className="project-card__more-text">Retrouve tous mes projets sur GitHub</span>
                </a>
            </div>
        </section>
    )
}

export default Projects
