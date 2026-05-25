import csharp from "../assets/icons/csharp.png"
import css from "../assets/icons/css.png"
import dotnet from "../assets/icons/dotnet.png"
import figma from "../assets/icons/figma.png"
import gcp from "../assets/icons/gcp.png"
import html from "../assets/icons/html.png"
import java from "../assets/icons/html.png"
import js from "../assets/icons/js.png"
import mongo from "../assets/icons/mongo.png"
import nodejs from "../assets/icons/nodejs.png"
import php from "../assets/icons/php.png"
import prisma from "../assets/icons/prisma.png"
import python from "../assets/icons/python.png"
import react from "../assets/icons/react.png"
import sql from "../assets/icons/sql.png"
import tailwind from "../assets/icons/tailwind.png"


export const TechStack = (props) =>{

    return(
        <section className="text-white pt-6 md:pt-8 pb-2 md:pb-4 px-4">
            <h2 className="text-center text-xl md:text-2xl mb-2 font-bold leading-8">Tech Stack</h2>
            <p className="text-center text-base md:text-lg font-extralight leading-8">We are trusted by the worlds most innovative teams</p>

            <div className="logos group relative overflow-hidden whitespace-nowrap py-6 md:py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={csharp} alt="C#" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={css} alt="CSS" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={dotnet} alt=".NET" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={figma} alt="Figma" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={gcp} alt="GCP" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={html} alt="HTML" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={js} alt="JavaScript" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={mongo} alt="MongoDB" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={java} alt="Java" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={nodejs} alt="Node.js" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={php} alt="PHP" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={prisma} alt="Prisma" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={python} alt="Python" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={react} alt="React" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={sql} alt="SQL" />
                    <img className="mx-2 sm:mx-3 md:mx-4 inline h-10 sm:h-12 md:h-16" src={tailwind} alt="Tailwind" />
                </div>

                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                </div>
            </div>
        </section>
    )
}