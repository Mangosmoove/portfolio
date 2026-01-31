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
    'Designed and iterated on mockups and wireframes with the CTO and CEO, aligning features with business goals and user needs.',
    'Led frontend development in React, focusing on UI/UX, accessibility, and performance optimization.',
    'Improved web app performance by 27% through optimized image processing.',
    'Implemented backend-driven pagination in Python with Elasticsearch, improving scalability and retrieval of large datasets.',
    'Spearheaded responsive UI design with Bootstrap and React Bootstrap across all screen sizes.',
    'Maintained clear documentation for internal and external users, collaborating with the documentation team.',
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
    'Researched facial cues and physiological arousal during human-robot interaction to better influence behavior tree decisions',
    "Crafted and implemented original human-robot activities that incorporate Honda Research Institute's tabletop robot for older adults with dementia and preschoolers",
    'Prototyped and coded Crunchy, the robot movie companion, for HRI Student Competition in 2021 and was awarded the Best Student Design Competition CREATIVITY Award',
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
    'Engineered an accessible, reusable NuGet package with JUnit tests to streamline query creation and improve reliability of data collection from New Relic dashboards',
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
    'Assisted in creating foundation for brand new team through marketing and networking with other college organizations',
    'Constructed well-versed resource guide to assist community in becoming familiarized with artificial intelligence and its uses',
    'Orchestrated and led various educational events relating to artificial intelligence and ethics in technology to promote awareness and understanding of existing technologies and benefits and issues',
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
