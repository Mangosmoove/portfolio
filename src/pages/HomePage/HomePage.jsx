import React from 'react'
import Flower from '../../components/Flower/Flower'
import landingImg from '../../assets/landingImg.png'

const HomePage = () => {
    return (
        <>
            <div className="w-2/5 flex flex-col gap-5 justify-center items-center md:items-start">
                <div className="flex flex-col justify-center items-center md:items-start gap-12">
                    <span className="bg-purple-100 text-purple-800 font-medium px-4 py-3 rounded-md body-font">
                        Hello, world! 👋
                    </span>

                    <div className="text-center md:text-left text-3xl md:text-5xl font-semibold header-font">
                        <p>
                            I'm Arinah Karim, A Full Stack Developer and
                            Aspiring UI/UX Designer
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 body-font w-full">
                        <button
                            className="relative group px-6 py-4 md:px-8 md:py-6 bg-pink-500 text-white text-md md:text-xl font-semibold rounded-xl hover:bg-pink-600 transition"
                            onClick={() => {
                                const el = document.getElementById('experience')
                                if (el)
                                    el.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            View My Experience
                            <span className="absolute -top-10 -right-11 opacity-0 group-hover:opacity-100 transition text-2xl">
                                <Flower className="w-24 h-24" />
                            </span>
                        </button>

                        <a
                            href="https://www.linkedin.com/in/arinah-karim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group px-6 py-4 md:px-8 md:py-6 border border-pink-500 text-pink-500 text-md md:text-xl text-center font-semibold rounded-xl hover:bg-pink-200 transition"
                        >
                            Connect with Me
                            <span className="absolute -top-7 -right-8 md:-top-8 md:-right-9 opacity-0 group-hover:opacity-100 transition-all">
                                <Flower className="w-16 h-16 md:w-20 md:h-20" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-3/5 hidden md:flex justify-center">
                <div>
                    <img
                        src={landingImg}
                        alt="arinah & her cat Pixie"
                        className="max-h-145 w-auto object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default HomePage
