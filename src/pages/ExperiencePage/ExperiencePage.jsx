import JobCard from '@/components/JobCard/JobCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import React from 'react'

const idnDesc = [
    'Engineered a performance optimization to a key image processing step, reducing user completion time by ~26%',
    'Architected backend-driven pagination in Python using Elasticsearch, replacing frontend pagination and reducing data retrieval time by 70% (10s → 3s), unlocking scalable, high-performance retrieval of large datasets',
    'Partnered with CTO and CEO to design and iterate on mockups and wireframes, translating executive vision into user-focused product decisions',
    'Served as sole frontend engineer for a product with 1,000+ daily users, independently owning end-to-end development of React features with a focus on UI/UX, accessibility, and cross-device performance',
]
const idnSkills = [
    'React',
    'Next.js',
    'Vite',
    'SCSS',
    'HTML',
    'CSS',
    'Bootstrap',
    'TypeScript',
    'RTK Query',
    'Redux',
    'Python',
    'Elasticsearch',
    'Kibana',
    'Docker',
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
    'Owned end-to-end delivery of a new modal feature, including design, implementation, and deployment, using TypeScript, and shipped the feature to production within one week',
    'Engineered an accessible, reusable NuGet package with JUnit tests to streamline query creation from New Relic dashboards',
]
const reltSkills = [
    'TypeScript',
    'HTML',
    'CSS',
    'Python',
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
        role: 'Full Stack Developer',
        company: 'Intellicheck',
        time: 'Aug. 2023 - July 2025',
        location: 'Remote',
        description: idnDesc,
        skills: idnSkills,
    },
    {
        role: 'Undergraduate Research Assistant',
        company: 'Robot House HRI Lab',
        time: 'Jun. 2020 - July 2023',
        location: 'Bloomington, IN',
        description: rHouseDesc,
        skills: rHouseSkills,
    },
    {
        role: 'Software Engineer Intern',
        company: 'Relativity',
        time: 'May 2022 - Aug. 2022',
        location: 'Remote',
        description: reltDesc,
        skills: reltSkills,
    },
    {
        role: 'Ethical AI Intern',
        company: 'Center of Excellence for Women & Technology',
        time: 'Aug. 2021 - May 2022',
        location: 'Bloomington, IN',
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
