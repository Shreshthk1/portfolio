import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { useRef, useState, useEffect } from "react"
import { useIsVisible } from "../hooks/useIsVisible"

export const Contact = () => {
    const [mounted, setMounted] = useState(false)
    const [copied, setCopied] = useState(false)
    const contentRef = useRef()
    const isContentVisible = useIsVisible(contentRef)

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80)
        return () => clearTimeout(t)
    }, [])

    const fadeUp = (delay = 0) => ({
        style: { transitionDelay: `${delay}ms` },
        className: `transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`,
    })

    const copyEmail = () => {
        navigator.clipboard.writeText('shreshthkumar1106@gmail.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
            <Nav />

            {/* Hero */}
            <section className="hero-dots relative flex items-center justify-center min-h-screen px-6 overflow-hidden">
                <div className="relative z-10 text-center">
                    <h1
                        style={fadeUp(0).style}
                        className={`text-white font-SFThin tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fadeUp(0).className}`}
                    >
                        Contact
                    </h1>
                    <div
                        style={fadeUp(280).style}
                        className={`flex items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-6 ${fadeUp(280).className}`}
                    >
                        <span className="block w-5 sm:w-10 h-px bg-white/30"></span>
                        <p className="font-SFThin text-white/40 text-[9px] sm:text-[11px] tracking-[0.38em] uppercase">
                            Let's Build Together
                        </p>
                        <span className="block w-5 sm:w-10 h-px bg-white/30"></span>
                    </div>
                </div>

                <div
                    style={fadeUp(700).style}
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none ${fadeUp(700).className}`}
                >
                    <span className="font-SFThin text-white/40 sm:text-white/20 text-[11px] sm:text-[9px] tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
            </section>

            {/* Content */}
            <section className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
                <div
                    ref={contentRef}
                    className={`transition-all duration-700 delay-150 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
                        <span className="font-SFThin text-white/50 sm:text-white/30 text-[11px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">Get in Touch</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Left — copy */}
                        <div className="flex flex-col">
                            <h2 className="font-SFThin text-white leading-tight tracking-tight" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
                                Have something<br />in mind?
                            </h2>
                            <p className="font-SFThin text-white/50 text-base sm:text-lg leading-relaxed mt-6">
                                Whether it's a freelance project, a collaboration, or just a conversation — I'm open to it. Drop me a message and I'll get back to you.
                            </p>
                            <p className="font-SFThin text-white/45 sm:text-white/25 text-sm mt-4 leading-relaxed">
                                Based in Calgary, AB · Available for remote work.
                            </p>

                            {/* Availability indicator */}
                            <div className="flex items-center gap-2.5 mt-10">
                                <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></span>
                                <span className="font-SFThin text-white/55 sm:text-white/35 text-[11px] sm:text-[10px] tracking-[0.3em] uppercase">Available for freelance</span>
                            </div>
                        </div>

                        {/* Right — contact cards */}
                        <div className="flex flex-col gap-3">

                            {/* Email card */}
                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black p-6 sm:p-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase mb-4">Email</p>
                                <p className="font-SFThin text-white text-base sm:text-lg tracking-tight break-all">
                                    shreshthkumar1106@gmail.com
                                </p>
                                <div className="flex gap-3 mt-6">
                                    <a
                                        href="mailto:shreshthkumar1106@gmail.com"
                                        className="font-SFThin text-white/75 sm:text-white/60 text-[11px] sm:text-[9px] tracking-[0.3em] uppercase border border-white/25 sm:border-white/15 px-4 py-2 rounded-full hover:border-white/40 hover:text-white/90 sm:hover:border-white/30 sm:hover:text-white/80 transition-all duration-300"
                                    >
                                        Send Email
                                    </a>
                                    <button
                                        onClick={copyEmail}
                                        className="font-SFThin text-white/75 sm:text-white/60 text-[11px] sm:text-[9px] tracking-[0.3em] uppercase border border-white/25 sm:border-white/15 px-4 py-2 rounded-full hover:border-white/40 hover:text-white/90 sm:hover:border-white/30 sm:hover:text-white/80 transition-all duration-300"
                                    >
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            {/* LinkedIn card */}
                            <a
                                href="https://www.linkedin.com/in/shreshth-kumar-230688187/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black p-6 flex items-center justify-between hover:border-white/15 transition-all duration-300"
                            >
                                <div>
                                    <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase mb-1">LinkedIn</p>
                                    <p className="font-SFThin text-white/70 text-sm group-hover:text-white transition-colors duration-300">Shreshth Kumar</p>
                                </div>
                                <span className="font-SFThin text-white/45 sm:text-white/20 text-[11px] sm:text-[9px] tracking-[0.25em] uppercase group-hover:text-white/60 sm:group-hover:text-white/40 transition-colors duration-300">↗</span>
                            </a>

                            {/* Instagram card */}
                            <a
                                href="https://www.instagram.com/shreshthk1106/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black p-6 flex items-center justify-between hover:border-white/15 transition-all duration-300"
                            >
                                <div>
                                    <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase mb-1">Instagram</p>
                                    <p className="font-SFThin text-white/70 text-sm group-hover:text-white transition-colors duration-300">@shreshthk1106</p>
                                </div>
                                <span className="font-SFThin text-white/45 sm:text-white/20 text-[11px] sm:text-[9px] tracking-[0.25em] uppercase group-hover:text-white/60 sm:group-hover:text-white/40 transition-colors duration-300">↗</span>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
