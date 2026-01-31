export const AboutPage = () => {
    const skills = [
        'TypeScript',
        'JavaScript',
        'Python',
        'Java',
        'HTML',
        'CSS',
        'C',
        'C++',
    ]

    const misc = [
        'React',
        'Next.js',
        'Vite',
        'Jest',
        'React Bootstrap',
        'Shadcn/UI',
        'Bootstrap',
        'Tailwind',
        'Redux',
        'RTK Query',
        'ARIA',
        'REST',
        'Redis',
        'Convex',
        'PostgreSQL',
        'Elasticsearch',
        'HighCharts',
        'Figma',
    ]

    return (
        <>
            <div className="md:w-3/5 flex flex-col gap-5" id="about">
                <p className="text-center md:text-start text-3xl md:text-4xl font-semibold header-font pb-6">
                    A Little About Me
                </p>
                <p className="body-font text-sm md:text-base">
                    I am a full-stack engineer who thrives at the intersection
                    of design and code. I specialize in building responsive,
                    accessible, and scalable applications using{' '}
                    <span className="font-bold">
                        React, TypeScript, Next.js, Bootstrap, and ARIA
                    </span>{' '}
                    with professional backend experience in{' '}
                    <span className="font-bold">Python</span>, including data
                    querying with{' '}
                    <span className="font-bold">Elasticsearch</span> and system
                    monitoring via <span className="font-bold">Kibana</span>.
                </p>
                <p className="body-font text-sm md:text-base">
                    I have led development on key client- and user-facing
                    features, collaborated directly with stakeholders (including
                    execs and clients), and delivered high-impact UI/UX
                    improvements on fast turnarounds. Whether it is refactoring
                    a core layout system, optimizing performance, or translating
                    product ideas into interactive components—I enjoy owning the
                    stack from design to deployment.
                </p>
                <p className="body-font text-sm md:text-base">
                    I am driven by curiosity, clean code, and building products
                    that make people say "damn.".
                </p>
                <p className="body-font font-bold text-sm md:text-base">
                    Currently open to frontend or full-stack roles at the junior
                    to mid level, with a focus on impactful, user-centered
                    products and clear opportunities for growth!
                </p>
            </div>

            <div className="md:w-2/5 flex justify-center md:mt-17">
                <div className="mt-4">
                    <p className="font-semibold mb-2 text-sm md:text-base">
                        Languages
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <p className="font-semibold mb-2 text-sm md:text-base">
                        Misc.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {misc.map((m, index) => (
                            <span
                                key={index}
                                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                                {m}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
