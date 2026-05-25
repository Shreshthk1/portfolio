import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.png"
import facebookIcon from "../assets/icons/facebook.png"
import instagramIcon from "../assets/icons/instagram.png"
import linkedinIcon from "../assets/icons/linkedin.png"

export const Nav = (props) => {

    const [hamburgerOpen, toggleHamburger] = useState(false)
    const navigate = useNavigate()

    const pages = {
        "Home": "/",
        "Profile": "/profile",
        "Showcase": "/showcase",
        "Interests": "/interests",
        "Contact": "/contact"
    }
    const socialRedirect = {
        "Facebook": "https://www.facebook.com/shreshthk1/",
        "Instagram": "https://www.instagram.com/shreshthk1106/",
        "LinkedIn": "https://www.linkedin.com/in/shreshth-kumar-230688187/"
    }

    const redirectSocialLinks = (e) => {
        const name = e.target.id
        const url = socialRedirect[name]
        window.open(url, '_blank').focus()
    }

    const changeWindowLocation = (e) => {
        const name = e.target.nodeName === "SPAN" ? e.target.innerHTML : "Home"
        const path = pages[name]
        navigate(path)
        toggleHamburger(false)
    }

    return(
    <>
        <nav className="fixed left-0 z-40 flex w-full px-3 sm:px-4 md:px-8 py-2 bg-transparent md:justify-between top-2">
            {/* Hamburger */}
            <div className="flex flex-col justify-between w-6 h-6 lg:hidden cursor-pointer" onClick={() => {toggleHamburger(!hamburgerOpen)}}>
                <div className={`w-full h-1 bg-white rounded-lg transition-all duration-300 ${hamburgerOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                <div className={`w-full h-1 bg-white rounded-lg transition-all duration-300 ${hamburgerOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-1 bg-white rounded-lg transition-all duration-300 ${hamburgerOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
            </div>

            {/* Desktop Navigation */}
            <span className="hidden text-white text-sm sm:text-base md:text-lg lg:w-1/3 xl:text-xl justify-evenly font-SFThin lg:flex">
                <span onClick={changeWindowLocation} className="cursor-pointer hover:opacity-70 transition">Home</span>
                <span onClick={changeWindowLocation} className="cursor-pointer hover:opacity-70 transition">Profile</span>
                <span onClick={changeWindowLocation} className="cursor-pointer hover:opacity-70 transition">Showcase</span>
                <span onClick={changeWindowLocation} className="cursor-pointer hover:opacity-70 transition">Interests</span>
                <span onClick={changeWindowLocation} className="cursor-pointer hover:opacity-70 transition">Contact</span>
            </span>

            {/* Logo */}
            <a className="flex justify-center flex-1 lg:flex-none">
                <img src={logo} onClick={changeWindowLocation} className="w-8 sm:w-10 md:w-12 duration-200 hover:scale-110 hover:transform cursor-pointer" />
            </a>

            {/* Desktop Social Links */}
            <span className="hidden px-4 sm:px-8 md:px-12 lg:w-1/3 justify-evenly lg:flex">
                <img id="Facebook" src={facebookIcon} onClick={redirectSocialLinks} className="w-6 sm:w-7 md:w-8 pt-2 duration-200 hover:scale-110 hover:transform cursor-pointer" />
                <img id="Instagram" src={instagramIcon} onClick={redirectSocialLinks} className="w-6 sm:w-7 md:w-8 pt-2 duration-200 hover:scale-110 hover:transform cursor-pointer" />
                <img id="LinkedIn" src={linkedinIcon} onClick={redirectSocialLinks} className="w-6 sm:w-7 md:w-8 pt-2 duration-200 hover:scale-110 hover:transform cursor-pointer" />
            </span>
        </nav>

        {/* Mobile Menu */}
        {hamburgerOpen &&
            <div className="fixed top-0 left-0 min-h-screen w-screen bg-black bg-opacity-95 z-30 flex flex-col items-center justify-center gap-8 lg:hidden pt-20">
                <div className="flex flex-col gap-6 text-center text-white text-2xl font-SFThin">
                    <span onClick={changeWindowLocation} className="cursor-pointer hover:text-gray-300 transition">Home</span>
                    <span onClick={changeWindowLocation} className="cursor-pointer hover:text-gray-300 transition">Profile</span>
                    <span onClick={changeWindowLocation} className="cursor-pointer hover:text-gray-300 transition">Showcase</span>
                    <span onClick={changeWindowLocation} className="cursor-pointer hover:text-gray-300 transition">Interests</span>
                    <span onClick={changeWindowLocation} className="cursor-pointer hover:text-gray-300 transition">Contact</span>
                </div>
                <div className="flex gap-8 mt-8">
                    <img id="Facebook" src={facebookIcon} onClick={redirectSocialLinks} className="w-8 duration-200 hover:scale-110 hover:transform cursor-pointer" />
                    <img id="Instagram" src={instagramIcon} onClick={redirectSocialLinks} className="w-8 duration-200 hover:scale-110 hover:transform cursor-pointer" />
                    <img id="LinkedIn" src={linkedinIcon} onClick={redirectSocialLinks} className="w-8 duration-200 hover:scale-110 hover:transform cursor-pointer" />
                </div>
            </div>
        }
    </>
    )
}
