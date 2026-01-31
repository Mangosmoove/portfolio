import React from 'react'

const SkillsBadge = ({ skills }) => {
    return (
        <div className="mt-4 flex flex-wrap gap-2 body-font text-sm md:text-base">
            {skills.map((skill, ind) => (
                <span
                    key={ind}
                    className="bg-purple-100 text-purple-800 font-medium px-3 py-1 rounded-full text-sm"
                >
                    {skill}
                </span>
            ))}
        </div>
    )
}

export default SkillsBadge
