import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default () => {
    const [hoverGit, setHoverGit] = useState(false)
    const [hoverLinkedin, setHoverLinkedin] = useState(false)
    const [hoverMail, setHoverMail] = useState(false)

    return (
        <div className={"flex flex-col md:flex-row md:justify-between bg-gray-200 pt-12 pb-4 sm:pb-12 pl-8 pr-8 sm:pl-32 sm:pr-32"}>
            <div className={"flex flex-col items-start mb-6 md:mb-0"}>
                <p className={"text-4xl 2xl:text-6xl font-title"}>Tyler St-Amour</p>
                <p className={"text-lg 2xl:text-2xl text-gray-600"}>Based in Hamilton, Ontario</p>
            </div>
            <div className={"flex flex-row p-4 md:gap-16 2xl:gap-20 justify-between text-3xl text-gray-600"}>
                <a href={"mailto:tylerstamour1@gmail.com"}
                   className={"transition hover:-translate-y-0.5 duration-500"}
                   onMouseEnter={() => setHoverMail(true)} onMouseLeave={() => setHoverMail(false)}>
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth size={"lg"}
                                     color={hoverMail ? "#6600FF" : "black"}
                                     className={"duration-500 transition"}/>
                </a>
                <a href={"https://github.com/TylerStAmour"}
                   target={"_blank"}
                   className={"transition hover:-translate-y-0.5 duration-500"}
                   onMouseEnter={() => setHoverGit(true)} onMouseLeave={() => setHoverGit(false)}>
                    <FontAwesomeIcon icon={faGithub} fixedWidth size={"lg"}
                                     color={hoverGit ? "#6600FF" : "black"}
                                     className={"duration-500 transition"}/>
                </a>
                <a href={"https://www.linkedin.com/in/tyler-st-amour-bb6a8025b/"}
                   target={"_blank"}
                   className={"transition hover:-translate-y-0.5 duration-500"}
                   onMouseEnter={() => setHoverLinkedin(true)} onMouseLeave={() => setHoverLinkedin(false)}>
                    <FontAwesomeIcon icon={faLinkedin} fixedWidth size={"lg"}
                                     color={hoverLinkedin ? "#6600FF" : "black"}
                                     className={"duration-500 transition"}/>
                </a>
            </div>
        </div>
    )
}