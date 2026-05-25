import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { useRef, useState, useEffect } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import key2 from "../assets/images/key2.jpg"
import pasta from "../assets/images/food.jpg"
import setup from "../assets/images/setup.jpg"
import lego from "../assets/images/lego2.jpg"
import gaudreau from "../assets/images/Gaudreau.png"
import bcci from "../assets/images/bcci.png"

export const Interests = () => {
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

    const games = ['Apex Legends', 'Valorant', 'Rocket League', 'COD', 'God of War', 'Spider-Man', 'NHL 26']
    const collections = ['Funko Pop', 'Lego', 'Hockey Cards', 'Watches', 'Apple Boxes']

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
                        Interests
                    </h1>
                    <div
                        style={fadeUp(280).style}
                        className={`flex items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-6 ${fadeUp(280).className}`}
                    >
                        <span className="block w-5 sm:w-10 h-px bg-white/30"></span>
                        <p className="font-SFThin text-white/40 text-[9px] sm:text-[11px] tracking-[0.38em] uppercase">
                            Beyond the Code
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

            {/* Bento Grid */}
            <section className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
                <div
                    ref={gridRef}
                    className={`transition-all duration-700 delay-150 ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 sm:gap-5 mb-10 sm:mb-14">
                        <span className="font-SFThin text-white/50 sm:text-white/30 text-[11px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">What I Love</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px] sm:auto-rows-[230px] lg:auto-rows-[250px]">

                        {/* Calgary Flames — 2×2 Gaudreau tribute */}
                        <div className="group relative sm:col-span-2 lg:col-span-2 sm:row-span-2 lg:row-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6 sm:p-8">
                            {/* Gaudreau jersey photo */}
                            <div className="absolute inset-0">
                                <img src={gaudreau} alt="" className="w-full h-full object-contain object-center opacity-30 group-hover:opacity-40 transition-all duration-700 ease-out" aria-hidden="true" />
                            </div>
                            {/* Atmospheric layers */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-red-950/40 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-red-900/20 blur-3xl pointer-events-none"></div>

                            {/* Top row */}
                            <div className="relative z-10 flex items-center justify-between">
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Hockey</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-pulse"></span>
                                    <span className="font-SFThin text-white/45 sm:text-white/20 text-[9px] sm:text-[8px] tracking-[0.3em] uppercase">NHL</span>
                                </div>
                            </div>

                            {/* Bottom content */}
                            <div className="relative z-10">
                                <p className="font-SFThin text-red-400/50 text-[9px] sm:text-[10px] tracking-[0.35em] uppercase mb-3">
                                    Johnny Gaudreau · #13
                                </p>
                                <h2 className="font-SFThin text-white leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
                                    Calgary<br />Flames
                                </h2>
                                <p className="font-SFThin text-white/45 sm:text-white/20 text-[11px] sm:text-[10px] mt-4 tracking-[0.25em] uppercase">Western · Pacific Division</p>
                            </div>
                        </div>

                        {/* Video Games — 2×1 */}
                        <div className="group relative sm:col-span-2 lg:col-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            <div className="absolute inset-0">
                                <img src={setup} alt="" className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 ease-out" style={{ objectPosition: '15% 65%' }} aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 pointer-events-none"></div>

                            <p className="relative z-10 font-SFThin text-white/50 text-[9px] tracking-[0.4em] uppercase">Gaming</p>
                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white text-3xl sm:text-4xl leading-none tracking-tight">Video Games</h2>
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {games.map(g => (
                                        <span key={g} className="font-SFThin text-white/50 text-[8px] sm:text-[9px] tracking-[0.12em] uppercase border border-white/20 px-2.5 py-1 rounded-full">
                                            {g}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Indian Cricket — 1×1 */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            {/* Jersey photo */}
                            <div className="absolute inset-0">
                                <img src={bcci} alt="" className="w-full h-full object-contain object-center opacity-25 group-hover:opacity-40 transition-all duration-700 ease-out" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent pointer-events-none"></div>

                            <p className="relative z-10 font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Cricket</p>
                            <div className="relative z-10">
                                <p className="font-SFThin text-orange-400/60 text-[9px] tracking-[0.35em] uppercase mb-2">Kumar · #11</p>
                                <h2 className="font-SFThin text-white text-2xl sm:text-3xl leading-none tracking-tight">Indian<br />Cricket</h2>
                                <p className="font-SFThin text-white/45 sm:text-white/20 text-[10px] sm:text-[9px] mt-3 tracking-[0.2em] uppercase">Team India · ICC</p>
                            </div>
                        </div>

                        {/* Woodworking — 1×1 */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            {/* Warm wood-toned ambient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-amber-950/10 to-transparent pointer-events-none"></div>
                            {/* Horizontal wood grain lines */}
                            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(255,200,100,0.6) 11px, rgba(255,200,100,0.6) 12px)'
                            }}></div>

                            <p className="relative z-10 font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase">Craft</p>
                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white text-2xl sm:text-3xl leading-none tracking-tight">Wood-<br />working</h2>
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] mt-3 tracking-[0.2em] uppercase">Built by hand.</p>
                            </div>
                        </div>

                        {/* Cooking — 2×1 */}
                        <div className="group relative sm:col-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            <div className="absolute inset-0">
                                <img src={pasta} alt="" className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none"></div>

                            <p className="relative z-10 font-SFThin text-white/50 text-[9px] tracking-[0.4em] uppercase">Food</p>
                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white text-3xl sm:text-4xl leading-none tracking-tight">Cooking</h2>
                                <div className="flex gap-2 mt-4">
                                    <span className="font-SFThin text-white/50 text-[9px] tracking-[0.12em] uppercase border border-white/20 px-2.5 py-1 rounded-full">Indian</span>
                                    <span className="font-SFThin text-white/50 text-[9px] tracking-[0.12em] uppercase border border-white/20 px-2.5 py-1 rounded-full">Italian</span>
                                </div>
                            </div>
                        </div>

                        {/* Collecting — 2×1 */}
                        <div className="group relative sm:col-span-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col justify-between p-6">
                            <div className="absolute inset-0">
                                <img src={lego} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out" style={{ objectPosition: '40% 60%' }} aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none"></div>

                            <p className="relative z-10 font-SFThin text-white/50 text-[9px] tracking-[0.4em] uppercase">Collections</p>
                            <div className="relative z-10">
                                <h2 className="font-SFThin text-white text-3xl sm:text-4xl leading-none tracking-tight">Collecting</h2>
                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {collections.map(c => (
                                        <span key={c} className="font-SFThin text-white/50 text-[8px] sm:text-[9px] tracking-[0.12em] uppercase border border-white/20 px-2.5 py-1 rounded-full">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Coding — full width with macbook photo */}
                        <div className="group relative sm:col-span-2 lg:col-span-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-black flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 gap-6 sm:gap-0">
                            {/* Macbook background image */}
                            <div className="absolute inset-0">
                                <img src={key2} alt="" className="w-full h-full object-cover object-center opacity-30" aria-hidden="true" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none"></div>

                            <div className="relative z-10">
                                <p className="font-SFThin text-white/50 sm:text-white/25 text-[10px] sm:text-[9px] tracking-[0.4em] uppercase mb-3">Obviously</p>
                                <h2 className="font-SFThin text-white text-3xl sm:text-4xl lg:text-5xl leading-none tracking-tight">Coding</h2>
                            </div>
                            <div className="relative z-10 font-mono text-[11px] sm:text-sm leading-relaxed text-left sm:text-right">
                                <p><span className="text-violet-400">const</span> <span className="text-white">shreshth</span> <span className="text-white/50">=</span> <span className="text-white/50">{'{'}</span></p>
                                <p><span className="text-sky-400">&nbsp;&nbsp;building</span><span className="text-white/50">:</span> <span className="text-emerald-400">'things that work'</span><span className="text-white/50">,</span></p>
                                <p><span className="text-sky-400">&nbsp;&nbsp;for</span><span className="text-white/50">:</span> <span className="text-emerald-400">'people'</span><span className="text-white/50">,</span></p>
                                <p><span className="text-sky-400">&nbsp;&nbsp;since</span><span className="text-white/50">:</span> <span className="text-emerald-400">'always'</span><span className="text-white/50">,</span></p>
                                <p><span className="text-white/50">{'}'}</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
