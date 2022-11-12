import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

export default () => {
    const [hover, setHover] = useState(false)
    return (
        <div className={"grid grid-cols-6 bg-gray-200 pt-12 pb-16 pl-8 pr-8 sm:pl-32 sm:pr-32"}>
            <div className={"flex col-span-2 items-center"}>
                <p className={"text-4xl"}>Tyler St-Amour</p>
            </div>
            <div className={"flex flex-row col-span-4 p-4 justify-between text-3xl text-gray-600"}>
                <div className={"hover:text-secondary hover:-translate-y-0.5 duration-300"}>
                    <Link to={"/projects"}>Projects</Link>
                </div>
                <div className={"hover:text-secondary hover:-translate-y-0.5 duration-300"}>
                    <Link to={"/about"}>About Me</Link>
                </div>
                <div className={"hover:text-secondary hover:-translate-y-0.5 duration-300"}>
                    <Link to={"/contact"}>Contact</Link>
                </div>
                <a href={"https://github.com/TylerStAmour"}
                   target={"_blank"}
                   className={"transition hover:-translate-y-0.5 duration-500"}
                   onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <FontAwesomeIcon icon={faGithub} fixedWidth size={"lg"}
                                     color={hover ? "#6600FF" : "black"}
                                     className={"duration-500 transition"}/>
                </a>
            </div>
        </div>
    )
}