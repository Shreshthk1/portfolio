import { Nav } from "./Nav"
import { Footer } from "./Footer"
import { useRef, useState, useEffect } from "react"
import { useIsVisible } from "../hooks/useIsVisible"
import mesitting from "../assets/images/mesitting.png"

export const Profile = () => {
    const [mounted, setMounted] = useState(false)
    const aboutRef = useRef()
    const expRef = useRef()
    const stackRef = useRef()
    const isAboutVisible = useIsVisible(aboutRef)
    const isExpVisible = useIsVisible(expRef)
    const isStackVisible = useIsVisible(stackRef)

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80)
        return () => clearTimeout(t)
    }, [])

    const fadeUp = (delay = 0) => ({
        style: { transitionDelay: `${delay}ms` },
        className: `transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`,
    })

    const experience = [
        {
            role: 'Freelance Developer',
            company: 'Independent',
            period: 'Jan 2025 — Present',
            achievements: [
                'Supporting multiple client projects across development, debugging, and delivery.',
            ],
        },
        {
            role: 'Microsoft Senior Advisor',
            company: 'Best Buy Canada',
            period: 'Oct 2024 — Present',
            achievements: [
                'Highest sales per hour in store.',
                'Top 10 in sales across Southern Alberta.',
                '~$120K in monthly sales across TV, Appliances, and Computers.',
                'Technical support for 15–20 devices weekly with ~85% customer satisfaction.',
            ],
        },
        {
            role: 'Full Stack Developer',
            company: 'Amrit Sagar Foundation',
            period: 'Jan 2023 — Jun 2024',
            achievements: [
                'Led full-stack development of a secure, real-time event management platform with encrypted REST APIs.',
                'Reduced manual workload by 70% through automation.',
                'Built responsive frontend with React and Tailwind under strict budget constraints.',
            ],
        },
        {
            role: 'IT Student',
            company: 'Alberta Health Services',
            period: 'Jan 2022 — Aug 2022',
            achievements: [
                'Built front-end interfaces improving internal process efficiency by 25%.',
                'Managed 100+ monthly IT support tickets via ServiceNow, contributing to a 20% increase in user satisfaction.',
            ],
        },
    ]

    const stack = [
        'React', 'Node.js', 'TypeScript', 'JavaScript',
        'ASP.NET', 'C#', 'Java', 'Python',
        'SQL', 'MongoDB', 'Prisma',
        'GCP', 'Microsoft Azure',
        'Tailwind', 'HTML / CSS', 'Figma',
        'Power BI', 'Selenium',
    ]

    return (
        <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden bg-black">
            <Nav />

            {/* Quote Hero */}
            <section className="hero-dots relative flex items-center justify-center min-h-screen px-6 overflow-hidden">
                <div className="relative z-10 max-w-2xl lg:max-w-3xl text-center">
                    <p
                        style={fadeUp(0).style}
                        className={`font-SFThin text-white/70 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-snug tracking-tight ${fadeUp(0).className}`}
                    >
                        "Programming isn't about what you know; it's about what you can figure out."
                    </p>
                    <div
                        style={fadeUp(380).style}
                        className={`flex items-center justify-center gap-3 sm:gap-5 mt-8 ${fadeUp(380).className}`}
                    >
                        <span className="block w-5 sm:w-10 h-px bg-white/20"></span>
                        <p className="font-SFThin text-white/30 text-[9px] sm:text-[11px] tracking-[0.38em] uppercase">Chris Pine</p>
                        <span className="block w-5 sm:w-10 h-px bg-white/20"></span>
                    </div>
                </div>

                <div
                    style={fadeUp(700).style}
                    className={`absolute bottom-8 left-6 sm:left-10 ${fadeUp(700).className}`}
                >
                    <span className="font-SFThin text-white/15 text-[9px] tracking-[0.3em] uppercase">Mount Royal University</span>
                </div>

                <div
                    style={fadeUp(700).style}
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none ${fadeUp(700).className}`}
                >
                    <span className="font-SFThin text-white/20 text-[9px] tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>

                <div
                    style={fadeUp(700).style}
                    className={`absolute bottom-8 right-6 sm:right-10 ${fadeUp(700).className}`}
                >
                    <span className="font-SFThin text-white/15 text-[9px] tracking-[0.3em] uppercase">BCS · CIS</span>
                </div>
            </section>

            {/* About */}
            <section className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
                <div
                    ref={aboutRef}
                    className={`transition-all duration-700 delay-150 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
                        <span className="font-SFThin text-white/30 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">About</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div className="flex flex-col">
                            <p className="font-SFThin text-white/60 text-base sm:text-lg leading-relaxed">
                                My path into technology started early — not in a classroom, but at home, surrounded by computers. What began as curiosity turned into hands-on problem solving: building PCs, troubleshooting systems, understanding how things work and how to make them better.
                            </p>
                            <p className="font-SFThin text-white/60 text-base sm:text-lg leading-relaxed mt-6">
                                I hold a Bachelor of Computer Information Systems from Mount Royal University, graduating with Dean's Honor Roll three years running. My focus has been full-stack development, databases, and system design — from encrypted REST APIs to responsive frontends built under real constraints.
                            </p>
                            <p className="font-SFThin text-white/60 text-base sm:text-lg leading-relaxed mt-6">
                                Outside the code, I've worked in high-pressure customer-facing roles that sharpened how I communicate, pitch, and deliver. I believe the best engineers understand people as well as they understand systems.
                            </p>

                            <p className="font-SFThin text-white/25 text-sm italic mt-10 leading-relaxed">
                                Technology only matters when it genuinely helps people.
                            </p>

                            {/* Education card */}
                            <div className="mt-12 border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4">
                                <span className="font-SFThin text-white/25 text-[9px] tracking-[0.4em] uppercase">Education</span>

                                <div>
                                    <p className="font-SFLight text-white text-sm sm:text-base">Bachelor of Computer Information Systems</p>
                                    <p className="font-SFThin text-white/40 text-xs sm:text-sm mt-1">Mount Royal University · Sep 2018 — Sep 2023</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-SFThin text-white/35 text-[9px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1 rounded-full">Dean's Honor Roll 2019</span>
                                    <span className="font-SFThin text-white/35 text-[9px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1 rounded-full">Dean's Honor Roll 2020</span>
                                    <span className="font-SFThin text-white/35 text-[9px] tracking-[0.2em] uppercase border border-white/10 px-3 py-1 rounded-full">Dean's Honor Roll 2021</span>
                                </div>
                                <p className="font-SFThin text-white/20 text-[10px] tracking-[0.2em] uppercase">Capstone · Shira Migration Platform</p>

                                <div className="h-px bg-white/[0.06]"></div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-SFLight text-white text-sm">Generative AI</p>
                                            <p className="font-SFThin text-white/40 text-xs mt-0.5">Outskill · May 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-SFLight text-white text-sm">Data Analysis</p>
                                            <p className="font-SFThin text-white/40 text-xs mt-0.5">Cloudy Data · March 2026</p>
                                        </div>
                                        <span className="font-SFThin text-white/25 text-[8px] tracking-[0.25em] uppercase border border-white/10 px-2.5 py-1 rounded-full shrink-0 mt-0.5">In Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-first lg:order-last flex items-start justify-start lg:justify-end lg:sticky lg:top-24">
                            <img
                                src={mesitting}
                                alt="Shreshth Kumar"
                                className="w-64 sm:w-72 md:w-80 rounded-2xl grayscale opacity-60 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20 border-t border-white/5">
                <div
                    ref={expRef}
                    className={`transition-all duration-700 delay-150 ${isExpVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
                        <span className="font-SFThin text-white/30 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">Experience</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <div className="flex flex-col">
                        {experience.map((item, idx) => (
                            <div
                                key={idx}
                                className="py-8 sm:py-10 border-b border-white/5 first:border-t first:border-white/5"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                                    <div>
                                        <h2 className="font-SFLight text-white text-base sm:text-lg">{item.role}</h2>
                                        <p className="font-SFThin text-white/35 text-xs sm:text-sm mt-1">{item.company}</p>
                                    </div>
                                    <span className="font-SFThin text-white/20 text-[10px] tracking-[0.2em] uppercase shrink-0">{item.period}</span>
                                </div>

                                {item.achievements && (
                                    <ul className="mt-5 flex flex-col gap-2.5">
                                        {item.achievements.map((ach, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-[7px] w-1 h-1 rounded-full bg-white/20 shrink-0"></span>
                                                <span className="font-SFThin text-white/35 text-xs sm:text-sm leading-relaxed">{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section className="w-full py-20 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20 border-t border-white/5">
                <div
                    ref={stackRef}
                    className={`transition-all duration-700 delay-150 ${isStackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
                        <span className="font-SFThin text-white/30 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">Stack</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {stack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="font-SFThin text-white/45 text-[10px] sm:text-xs tracking-[0.18em] uppercase border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 sm:mt-12">
                        <a
                            href="/resume.pdf"
                            download="Shreshth_Kumar_Resume.pdf"
                            className="inline-flex items-center gap-3 font-SFThin text-white/50 text-[9px] tracking-[0.3em] uppercase border border-white/15 px-6 py-3 rounded-full hover:border-white/30 hover:text-white/75 transition-all duration-300"
                        >
                            Download Resume
                            <span className="text-white/30">↓</span>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
