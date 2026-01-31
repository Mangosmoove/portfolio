import ProjectCard from '@/components/ProjectCard/ProjectCard'
import React from 'react'

const projects = [
    {
        title: 'Pokémon Team Analyzer',
        dateRange: 'Jan. 2025 - present',
        description:
            'A web app in the making that helps users analyze and improve their Pokémon team builds. Currently in the design phase using Figma, with plans to implement real-time analysis of team strengths, weaknesses, and suggestions for improvements.',
        isHosted: false,
        skills: ['React', 'Next.js', 'Figma', 'UI/UX Design'],
    },
    {
        title: 'Spott',
        dateRange: 'Jan. 2025 - Jan. 2025',
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
