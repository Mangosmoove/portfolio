import JobCard from '@/components/JobCard/JobCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import React from 'react'

const overtureDesc = [
    "Taught AI fundamentals to 6 elementary students (3rd–4th grade) using an org-provided slide curriculum, covering prompt-writing through detail-based instruction, with 100% of students independently writing prompts by lesson's end",
]

const overtureSkills = ['Teaching']

const idnDesc = [
    "Redesigned backend pagination to fix a reported table-loading slowdown, using Elasticsearch's point-in-time search with role-based PII controls, cutting retrieval latency 10s→3s (70% improvement)",
    'Eliminated a redundant image-conversion step causing ID-scanning delays, identified through a nested-loop performance trace, reducing total user time in the app by 26%',
    'Led two production UI redesigns with the CTO and CEO, translating a sketch and a Figma design into shipped features, improving usability and fixing existing broken filters',
    'Built a React-based frontend client-mapping system supporting per-tenant customization of colors, fonts, layouts, and client flows, enabling reusable branding across customer configurations',
    'Extended ARIA accessibility platform-wide from a single major client request, implementing screen-reader alerts and running contrast-checking, achieving compliance across all client-branded flows with zero client-facing accessibility issues',
]

const idnSkills = [
    'React',
    'Next.js',
    'Node.js',
    'Vite',
    'Python',
    'SCSS',
    'HTML',
    'CSS',
    'Bootstrap',
    'TypeScript',
    'RTK Query',
    'Redux',
    'Elasticsearch',
    'Kibana',
]

const rHouseDesc = [
    'Prototyped and coded Crunchy, a robot movie companion for the 2021 HRI Student Competition, earning the Best Student Design Competition Creativity Award',
    'Designed NFC-enabled interactive activities for preschoolers and older adults, using behavior tree logic to trigger dynamic robot responses based on physiological engagement data',
]
const rHouseSkills = [
    'Human-Robot Interaction',
    'Python',
    'AI/ML',
    'Computer Vision',
    'Arduino',
    'C++',
    'MAXQDA',
]

const reltDesc = [
    'Implemented a frontend modal in TypeScript from a provided design to replace a manual job-kill process, delivered in 1 week',
    'Built a C# NuGet package with unit test coverage replacing manual New Relic dashboard querying, providing reusable querying capability org-wide',
]
const reltSkills = [
    'TypeScript',
    'HTML',
    'CSS',
    'C#',
    'NuGet',
    'New Relic Dashboard',
]

const cwitDesc = [
    'Authored an AI resource guide adopted as the team&apos;s foundational reference and published on the organization&apos;s website for broader community access',
    'Led educational events on AI ethics and real-world applications, hosting industry speakers from companies like Meta',
]
const cwitSkills = ['Trello', 'Leadership', 'Public Speaking']
const experiences = [
    {
        role: 'AI Literacy Lead',
        company: 'Overture',
        time: 'Jul. 2026 - present',
        location: 'Chicago, IL',
        jobType: 'Part-time',
        description: overtureDesc,
        skills: overtureSkills,
    },
    {
        role: 'Full Stack Developer',
        company: 'Intellicheck',
        time: 'Aug. 2023 - July 2025',
        location: 'Remote',
        jobType: 'Full-time',
        description: idnDesc,
        skills: idnSkills,
    },
    {
        role: 'Undergraduate Research Assistant',
        company: 'Robot House HRI Lab',
        time: 'Jun. 2020 - July 2023',
        location: 'Bloomington, IN',
        jobType: 'Part-time',
        description: rHouseDesc,
        skills: rHouseSkills,
    },
    {
        role: 'Software Engineer Intern',
        company: 'Relativity',
        time: 'May 2022 - Aug. 2022',
        location: 'Remote',
        jobType: 'Full-time',
        description: reltDesc,
        skills: reltSkills,
    },
    {
        role: 'Ethical AI Intern',
        company: 'Center of Excellence for Women & Technology',
        time: 'Aug. 2021 - May 2022',
        location: 'Bloomington, IN',
        jobType: 'Part-time',
        description: cwitDesc,
        skills: cwitSkills,
    },
]

const ExperiencePage = () => {
    return (
        <div
            className="w-full min-h-screen px-4 py-16 bg-purple-100"
            id="experience"
        >
            <div className="w-5/6 max-w-6xl mx-auto">
                <p className="text-center md:text-start text-3xl md:text-4xl font-semibold header-font pb-10">
                    Experiences
                </p>

                <div className="w-full max-w-6xl mx-auto">
                    <Carousel>
                        <CarouselContent className="flex gap-4">
                            {experiences.map((exp, ind) => (
                                <CarouselItem
                                    className="shrink-0 xs:w-full lg:basis-1/2"
                                    key={ind}
                                >
                                    <JobCard
                                        role={exp.role}
                                        company={exp.company}
                                        time={exp.time}
                                        location={exp.location}
                                        jobType={exp.jobType}
                                        description={exp.description}
                                        skills={exp.skills}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="flex justify-between mt-4">
                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage
