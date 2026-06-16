export const AboutPage = () => {
    const languages = [
        'TypeScript',
        'JavaScript',
        'Python',
        'Java',
        'HTML',
        'CSS',
    ]

    const frontend = [
        'React',
        'Next.js',
        'Vite',
        'Redux',
        'RTKQ',
        'Tailwind',
        'Bootstrap',
        'React Bootstrap',
        'Shadcn/UI',
        'Highcharts',
        'A11Y',
        'React Testing Library',
        'Figma',
    ]

    const backend = [
        'Node.js',
        'Spring Boot',
        'Elasticsearch',
        'PostgreSQL',
        'Redis',
        'RESTful APIs',
        'Convex',
        'pytest',
    ]

    return (
        <>
            <div className="md:w-3/5 flex flex-col gap-5" id="about">
                <p className="text-center md:text-start text-3xl md:text-4xl font-semibold header-font pb-6">
                    A Little About Me
                </p>
                <p className="body-font text-sm md:text-base">
                    I'm a full-stack engineer who believes good software should
                    feel as good as it works.
                </p>
                <p className="body-font text-sm md:text-base">
                    I specialize in building responsive, accessible, and
                    scalable applications using{' '}
                    <span className="font-bold">
                        React, TypeScript, Next.js, Bootstrap
                    </span>
                    , with professional backend experience in{' '}
                    <span className="font-bold">Python, Elasticsearch</span>,
                    and <span className="font-bold">Kibana</span>.
                </p>
                <p className="body-font text-sm md:text-base">
                    I've led development on key client and user-facing features,
                    collaborated directly with stakeholders including executives
                    and clients, and delivered high-impact UI/UX improvements on
                    fast turnarounds. Whether I'm refactoring a core layout
                    system, optimizing performance, or translating a product
                    idea into an interactive component, I enjoy owning the stack
                    from design to deployment.
                </p>
                <p className="body-font text-sm md:text-base">
                    I am driven by curiosity, clean code, and building products
                    that make people say "damn.".
                </p>
                <p className="body-font font-bold text-sm md:text-base">
                    Currently open to full stack, backend, or frontend roles,
                    with a focus on impactful, user-centered products and clear
                    opportunities for growth!
                </p>
            </div>

            <div className="md:w-2/5 flex justify-center md:mt-17">
                <div className="mt-4">
                    <p className="font-semibold mb-2 text-sm md:text-base">
                        Languages
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {languages.map((langauge, index) => (
                            <span
                                key={index}
                                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                                {langauge}
                            </span>
                        ))}
                    </div>

                    <p className="font-semibold mb-2 text-sm md:text-base">
                        Frontend
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {frontend.map((f, index) => (
                            <span
                                key={index}
                                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                                {f}
                            </span>
                        ))}
                    </div>

                    <p className="font-semibold mb-2 text-sm md:text-base">
                        Backend
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {backend.map((b, index) => (
                            <span
                                key={index}
                                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
