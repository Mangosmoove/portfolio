import React from 'react'
import Flower from '../Flower/Flower'
import SkillsBadge from '../SkillsBadge/SkillsBadge'

const ProjectCard = ({
    title,
    dateRange,
    description,
    link,
    isHosted,
    skills,
}) => {
    return (
        <div className="border border-pink-500 bg-pink-100 rounded-xl p-4 md:p-6 w-full flex flex-col justify-between min-h-10">
            <div className="text-center md:text-start">
                <h3 className="text-md md:text-2xl font-semibold mb-2 header-font">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm md:text-base mb-4 header-font">
                    {dateRange}
                </p>
            </div>

            <p className="text-gray-700 text-sm md:text-base mb-4 body-font">
                {description}
            </p>

            <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center md:justify-start">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block group text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600 transition text-sm md:text-base w-max body-font"
                    >
                        {isHosted ? 'View Project' : 'View Github'}

                        <span className="absolute -top-7 -right-8 md:-top-8 md:-right-9 opacity-0 group-hover:opacity-100 transition-all">
                            <Flower className="w-16 h-16 md:w-20 md:h-20" />
                        </span>
                    </a>
                )}

                <SkillsBadge skills={skills} />
            </div>
        </div>
    )
}

export default ProjectCard
