import { useNavigate } from "react-router-dom"

export const Footer = () => {
    const navigate = useNavigate()

    const links = [
        { label: 'Home', path: '/' },
        { label: 'Profile', path: '/profile' },
        { label: 'Showcase', path: '/showcase' },
        { label: 'Interests', path: '/interests' },
        { label: 'Contact', path: '/contact' },
    ]

    return (
        <footer className="w-full border-t border-white/5 py-10 sm:py-12 px-6 sm:px-10 md:px-16 lg:px-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
                <p className="font-SFThin text-white/15 text-[9px] tracking-[0.3em] uppercase">
                    © 2026 Shreshth Kumar
                </p>
                <div className="flex flex-wrap gap-5 sm:gap-8">
                    {links.map(l => (
                        <button
                            key={l.label}
                            onClick={() => navigate(l.path)}
                            className="font-SFThin text-white/20 text-[9px] tracking-[0.3em] uppercase hover:text-white/45 transition-colors duration-300"
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
                <div className="flex gap-5 sm:gap-8">
                    <a href="https://www.linkedin.com/in/shreshth-kumar-230688187/" target="_blank" rel="noopener noreferrer" className="font-SFThin text-white/20 text-[9px] tracking-[0.3em] uppercase hover:text-white/45 transition-colors duration-300">LinkedIn</a>
                    <a href="https://www.instagram.com/shreshthk1106/" target="_blank" rel="noopener noreferrer" className="font-SFThin text-white/20 text-[9px] tracking-[0.3em] uppercase hover:text-white/45 transition-colors duration-300">Instagram</a>
                </div>
            </div>
        </footer>
    )
}
