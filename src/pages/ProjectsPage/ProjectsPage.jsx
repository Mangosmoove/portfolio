import ProjectCard from '@/components/ProjectCard/ProjectCard'
import React from 'react'

const projects = [
    {
        title: 'Fish Tank Sim',
        dateRange: 'Apr. 2026 - present',
        description:
            'Fish Tank Sim lets users draw their own fish and release them into a shared, living tank. Built with a canvas-based frontend and a Spring Boot + AWS backend, it is designed from the ground up to support real-time multiplayer — so every fish in the water belongs to a real person.',
        skills: [
            'JavaScript',
            'HTML',
            'Java',
            'Spring Boot',
            'Maven',
            'AWS',
            'Docker',
        ],
    },
    {
        title: 'Spott',
        dateRange: 'Jan. 2026',
        description:
            'An event management web app made with Next.js, Convex, and Clerk to explore real-time databases and authentication flows. Users can search, create, and manage events and tickets, with subscriptions unlocking additional features. Built to practice integrating user accounts with a live database and managing real-time data, this project helped me learn best practices for connecting user information to Convex and handling event creation and subscriptions in a live app.',
        link: 'https://spott-jade.vercel.app/',
        isHosted: true,
        skills: [
            'Convex',
            'Clerk',
            'Next.js',
            'React',
            'Zod',
            'Tailwind',
            'shadcn/ui',
            'Lucide',
        ],
    },
    {
        title: 'Pokémon NPC Classifier',
        dateRange: ' Mar. 2023 - May 2023',
        description:
            'A machine learning project analyzing ~4,000 NPC trainer teams across Pokémon Generations 1-4. The project explores patterns between NPC trainer classes and their Pokémon team compositions, predicting the trainer type based on team stats.',
        link: 'https://github.com/Mangosmoove/Pokemon-NPC-Classifier/tree/main',
        isHosted: false,
        skills: ['Python', 'scikit-learn', 'TensorFlow', 'Machine Learning'],
    },
]

const ProjectsPage = () => {
    return (
        <div className="w-full min-h-screen px-4 py-16" id="projects">
            <div className="w-5/6 max-w-6xl mx-auto">
                <p className="text-center md:text-start text-3xl md:text-4xl font-semibold header-font pb-10">
                    Projects
                </p>
                <div className="flex flex-col gap-6">
                    {projects.map((project, ind) => (
                        <ProjectCard
                            title={project.title}
                            dateRange={project.dateRange}
                            description={project.description}
                            link={project.link}
                            isHosted={project.isHosted}
                            skills={project.skills}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
