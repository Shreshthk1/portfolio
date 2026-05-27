import eventSphereImg from "../assets/images/EventSphere.png"
import pearlImg from "../assets/images/Pearl_Printers.png"
import riteSliceImg from "../assets/images/RiteSlice.png"

export const ProjectOverview = () => {
    const ProjectCard = ({ title, description, image, gradient, href }) => {
        const inner = (
            <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <div
                        className="absolute inset-0 bg-zinc-900 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={image ? { backgroundImage: `url(${image})` } : gradient ? { background: gradient } : {}}
                    ></div>
                </div>
                <div className="pt-4 pb-2 px-1">
                    <h2 className="text-white font-SFLight text-base sm:text-lg md:text-xl">{title}</h2>
                    <p className="text-white/40 font-SFThin text-xs sm:text-sm mt-1 leading-relaxed">{description}</p>
                </div>
            </div>
        )
        return href
            ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
            : inner
    }

    const projects = [
        {
            title: 'Event Sphere',
            description: 'Event discovery and management platform built to connect communities.',
            image: eventSphereImg,
        },
        {
            title: 'Pearl Printers',
            description: 'Digital presence for a local printing and photography studio.',
            image: pearlImg,
        },
        {
            title: 'RiteSlice',
            description: 'Streamlined food ordering experience with real-time kitchen tracking.',
            image: riteSliceImg,
            href: 'https://riteslice.netlify.app/',
        },
        {
            title: 'Act It Out',
            description: 'A social game that brings people together through creative expression.',
            image: null,
            gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1154 40%, #1e0a3c 70%, #0d0618 100%)',
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </div>
    )
}
