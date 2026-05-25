import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { useRef, useState, useEffect } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import eventSphere from "../assets/images/EventSphere.png"
import pearl from "../assets/images/Pearl_Printers.png"
import riteSlice from "../assets/images/RiteSlice.png"

export const Showcase = () => {
    const [mounted, setMounted] = useState(false)
    const gridRef = useRef()
    const isGridVisible = useIsVisible(gridRef)

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

            {/* Hero */}
            <section className="hero-dots relative flex items-center justify-center min-h-screen px-6 overflow-hidden">
                <div className="relative z-10 text-center">
                    <h1
                        style={fadeUp(0).style}
                        className={`text-white font-SFThin tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${fadeUp(0).className}`}
                    >
                        Showcase
                    </h1>
                    <div
                        style={fadeUp(280).style}
                        className={`flex items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-6 ${fadeUp(280).className}`}
                    >
                        <span className="block w-5 sm:w-10 h-px bg-white/30"></span>
                        <p className="font-SFThin text-white/40 text-[9px] sm:text-[11px] tracking-[0.38em] uppercase">
                            Selected Work
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

            {/* Projects Grid */}
            <section className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
                <div
                    ref={gridRef}
                    className={`transition-all duration-700 delay-150 ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-14">
                        <span className="font-SFThin text-white/50 sm:text-white/30 text-[11px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">Projects</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[260px] sm:auto-rows-[270px] lg:auto-rows-[260px]">

                        {/* Event Sphere — 2×2 featured */}
                        <div className="group relative sm:col-span-2 lg:col-span-2 sm:row-span-2 lg:row-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6 sm:p-8">
                            <div className="absolute inset-0">
                                <img src={eventSphere} alt="" className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700 ease-out" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10 pointer-events-none"></div>

                            {/* Number watermark */}
                            <div className="absolute top-2 right-4 pointer-events-none select-none overflow-hidden">
                                <span className="font-SFThin text-white/[0.05] leading-none" style={{ fontSize: 'clamp(5rem, 14vw, 9rem)' }}>01</span>
                            </div>

                            <div className="relative z-10 flex items-center justify-between">
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Web App</p>
                                <span className="font-SFThin text-white/45 sm:text-white/20 text-[9px] sm:text-[8px] tracking-[0.3em] uppercase border border-white/20 sm:border-white/10 px-2.5 py-1 rounded-full">Featured</span>
                            </div>

                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white leading-none tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Event Sphere</h2>
                                <p className="font-SFThin text-white/60 sm:text-white/40 text-xs sm:text-sm mt-3 leading-relaxed max-w-xs">
                                    Full-stack registration platform for an Annual Sports Festival. Participants are auto-assigned to color-coded competition tables by age group and gender. Admin dashboard — secured via Auth0 — handles attendance, analytics, and real-time table management.
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {['React', 'Vite', 'Express.js', 'MongoDB', 'Auth0', 'WebSockets', 'Chart.js', 'Nodemailer', 'Tailwind'].map(t => (
                                        <span key={t} className="font-SFThin text-white/60 sm:text-white/40 text-[9px] sm:text-[8px] tracking-[0.12em] uppercase border border-white/25 sm:border-white/15 px-2.5 py-1 rounded-full">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pearl Printers — 2×1 */}
                        <div className="group relative sm:col-span-2 lg:col-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            <div className="absolute inset-0">
                                <img src={pearl} alt="" className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20 pointer-events-none"></div>

                            <div className="relative z-10 flex items-center justify-between">
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Business Site</p>
                                <span className="font-SFThin text-white/[0.05] text-5xl leading-none font-bold select-none">02</span>
                            </div>

                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white text-2xl sm:text-3xl leading-none tracking-tight">Pearl Printers</h2>
                                <p className="font-SFThin text-white/55 sm:text-white/35 text-xs mt-2 leading-relaxed">Commercial website for a local printing business — services, gallery, and contact.</p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {['React', 'Tailwind', 'Node.js', 'Figma'].map(t => (
                                        <span key={t} className="font-SFThin text-white/60 sm:text-white/40 text-[9px] sm:text-[8px] tracking-[0.12em] uppercase border border-white/25 sm:border-white/15 px-2.5 py-1 rounded-full">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RiteSlice — 2×1 */}
                        <div className="group relative sm:col-span-2 lg:col-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            <div className="absolute inset-0">
                                <img src={riteSlice} alt="" className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20 pointer-events-none"></div>

                            <div className="relative z-10 flex items-center justify-between">
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Web App</p>
                                <span className="font-SFThin text-white/[0.05] text-5xl leading-none font-bold select-none">03</span>
                            </div>

                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white text-2xl sm:text-3xl leading-none tracking-tight">RiteSlice</h2>
                                <p className="font-SFThin text-white/55 sm:text-white/35 text-xs mt-2 leading-relaxed">Concept site for a pizza shop — menu, ordering flow, and brand identity built from scratch.</p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {['React', 'Node.js', 'SQL', 'Tailwind'].map(t => (
                                        <span key={t} className="font-SFThin text-white/60 sm:text-white/40 text-[9px] sm:text-[8px] tracking-[0.12em] uppercase border border-white/25 sm:border-white/15 px-2.5 py-1 rounded-full">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Act It Out — full width */}
                        <div className="group relative sm:col-span-2 lg:col-span-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col sm:flex-row items-start sm:items-end justify-between p-6 sm:p-8 gap-6 sm:gap-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-violet-950/10 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-violet-800/15 blur-3xl pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-indigo-900/10 blur-2xl pointer-events-none"></div>

                            {/* Number watermark */}
                            <div className="absolute inset-0 flex items-center justify-end pr-6 sm:pr-10 pointer-events-none select-none overflow-hidden">
                                <span className="font-SFThin text-violet-900/20 leading-none" style={{ fontSize: 'clamp(6rem, 18vw, 14rem)' }}>04</span>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Social Game</p>
                                    <span className="flex items-center gap-1.5 font-SFThin text-white/55 sm:text-white/30 text-[9px] sm:text-[8px] tracking-[0.25em] uppercase border border-white/20 sm:border-white/10 px-2.5 py-1 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-pulse"></span>
                                        In Progress
                                    </span>
                                </div>
                                <h2 className="font-SFThin text-white text-3xl sm:text-4xl lg:text-5xl leading-none tracking-tight">Act It Out</h2>
                                <p className="font-SFThin text-white/55 sm:text-white/35 text-xs sm:text-sm mt-3 leading-relaxed max-w-sm">
                                    A social party game that brings people together through creative expression and collaborative play.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-1.5 sm:pb-1">
                                {['React', 'JavaScript', 'Node.js'].map(t => (
                                    <span key={t} className="font-SFThin text-white/60 sm:text-white/40 text-[9px] tracking-[0.12em] uppercase border border-white/25 sm:border-white/15 px-2.5 py-1 rounded-full">{t}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
