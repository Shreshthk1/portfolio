import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { ProjectOverview } from "./ProjectOverview"
import { useRef, useState, useEffect } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

export const Home = () => {
    const sectionRef = useRef();
    const isVisible = useIsVisible(sectionRef)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80)
        return () => clearTimeout(t)
    }, [])

    const fadeUp = (delay = 0) => ({
        style: { transitionDelay: `${delay}ms` },
        className: `transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`,
    })

    return (
        <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
            <Nav />

            <ParallaxProvider>
                {/* Hero */}
                <section className="hero-dots relative flex items-center justify-center min-h-screen px-6 overflow-hidden">

                    {/* Center content */}
                    <div className="relative z-10 text-center">

                        {/* Name */}
                        <h1
                            style={fadeUp(0).style}
                            className={`text-white font-SFThin tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fadeUp(0).className}`}
                        >
                            Shreshth Kumar
                        </h1>

                        {/* Title row */}
                        <div
                            style={fadeUp(280).style}
                            className={`flex items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-6 ${fadeUp(280).className}`}
                        >
                            <span className="block w-5 sm:w-10 h-px bg-white/30"></span>
                            <p className="font-SFThin text-white/60 text-[9px] sm:text-[11px] tracking-[0.38em] uppercase">
                                Full Stack Developer
                            </p>
                            <span className="block w-5 sm:w-10 h-px bg-white/30"></span>
                        </div>

                        {/* Tagline */}
                        <p
                            style={fadeUp(520).style}
                            className={`font-SFThin text-white/40 sm:text-white/40 text-xs sm:text-sm mt-6 sm:mt-8 tracking-wide ${fadeUp(520).className}`}
                        >
                            Building things that work for people.
                        </p>

                        {/* CTA */}
                        <div
                            style={fadeUp(750).style}
                            className={`flex items-center justify-center gap-3 mt-8 sm:mt-10 ${fadeUp(750).className}`}
                        >
                            <a href="/showcase" className="font-SFThin text-white/65 sm:text-white/50 text-[11px] sm:text-[9px] tracking-[0.3em] uppercase border border-white/25 sm:border-white/15 px-5 py-2.5 rounded-full hover:border-white/40 hover:text-white/85 sm:hover:border-white/30 sm:hover:text-white/75 transition-all duration-300">View Work</a>
                            <a href="/contact" className="font-SFThin text-white/65 sm:text-white/50 text-[11px] sm:text-[9px] tracking-[0.3em] uppercase border border-white/25 sm:border-white/15 px-5 py-2.5 rounded-full hover:border-white/40 hover:text-white/85 sm:hover:border-white/30 sm:hover:text-white/75 transition-all duration-300">Get in Touch</a>
                        </div>
                    </div>

                    {/* Bottom-left: location */}
                    <div
                        style={fadeUp(800).style}
                        className={`absolute bottom-8 left-6 sm:left-10 ${fadeUp(800).className}`}
                    >
                        <span className="font-SFThin text-white/35 text-[10px] tracking-[0.3em] uppercase">
                            Calgary, AB
                        </span>
                    </div>

                    {/* Bottom-center: scroll indicator */}
                    <div
                        style={fadeUp(800).style}
                        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none ${fadeUp(800).className}`}
                    >
                        <span className="font-SFThin text-white/35 text-[10px] tracking-widest uppercase">Scroll</span>
                        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"></div>
                    </div>

                    {/* Bottom-right: year */}
                    <div
                        style={fadeUp(800).style}
                        className={`absolute bottom-8 right-6 sm:right-10 ${fadeUp(800).className}`}
                    >
                        <span className="font-SFThin text-white/35 text-[10px] tracking-[0.3em] uppercase">
                            2026
                        </span>
                    </div>
                </section>

                {/* Projects */}
                <Parallax className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
                    <div
                        ref={sectionRef}
                        className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
                            <span className="font-SFThin text-white/45 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">
                                Selected Work
                            </span>
                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>
                        <ProjectOverview />
                    </div>
                </Parallax>
            </ParallaxProvider>
            <Footer />
        </div>
    )
}
