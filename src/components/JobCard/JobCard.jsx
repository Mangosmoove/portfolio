import React from 'react'
import SkillsBadge from '../SkillsBadge/SkillsBadge'

const JobCard = ({ role, company, location, time, description, skills }) => {
    return (
        <div className="border border-pink-500 bg-pink-100 rounded-xl min-h-150 p-6">
            <h3 className="text-center md:text-start text-md md:text-2xl font-semibold mb-2 header-font">
                {role}
            </h3>
            <p className="text-center md:text-start text-gray-500 text-sm md:text-base mb-4 header-font">
                {company} • {time} • {location}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-600 body-font">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <SkillsBadge skills={skills} />
        </div>
    )
}

export default JobCard
