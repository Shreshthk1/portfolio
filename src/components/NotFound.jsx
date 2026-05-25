import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-black overflow-hidden">
            {/* Dot grid */}
            <div className="hero-dots absolute inset-0 pointer-events-none"></div>

            {/* 404 watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="font-SFThin text-white/[0.03] leading-none" style={{ fontSize: 'clamp(10rem, 45vw, 32rem)' }}>404</span>
            </div>

            <div className="relative z-10 text-center px-6">
                <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8">
                    <span className="block w-5 sm:w-10 h-px bg-white/20"></span>
                    <p className="font-SFThin text-white/25 text-[9px] sm:text-[11px] tracking-[0.38em] uppercase">Page Not Found</p>
                    <span className="block w-5 sm:w-10 h-px bg-white/20"></span>
                </div>
                <h1 className="font-SFThin text-white tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl">
                    Nothing here.
                </h1>
                <button
                    onClick={() => navigate('/')}
                    className="mt-12 font-SFThin text-white/50 text-[9px] tracking-[0.3em] uppercase border border-white/15 px-6 py-3 rounded-full hover:border-white/30 hover:text-white/80 transition-all duration-300"
                >
                    Back to Home
                </button>
            </div>
        </div>
    )
}
