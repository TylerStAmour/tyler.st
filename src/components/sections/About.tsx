import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGolang,
    faHtml5,
    faJava,
    faJs,
    faLinux,
    faPython,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";

export default () => (
    <div className={"flex flex-col sm:grid sm:grid-cols-2 gap-16 2xl:gap-40"}>
        <div>
            <p className={"text-md"}>
                <span className={"text-secondary font-semibold"}>Hey!</span> I'm Tyler, I first attempted learning to code in 2014,
                but didn't get very far. For a few years I kept trying and failing, then returning to it a few months later,
                only to give up again.
            </p>
            <p className={"text-md mt-3"}>In 2020 however, I came across an online open Java course by the University of Helsinki.
                This gave me a new and proper introduction to programming and got me started with Java. From there
                I've branched to web development through the <span className={"text-secondary"}>React framework</span>,
                to backend development in Golang with the help of the
                <a href={"https://github.com/gin-gonic/gin"} target={"_blank"} className={"text-secondary"}> Gin </a>
                framework, to Linux system administration through one of my projects, and so much more.
            </p>
            <p className={"text-md mt-3"}>
                See some of the skills I've learned over the years on the right.
            </p>
        </div>
        <div className={"grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-2 mb-1"}>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faReact} fixedWidth/>
                <p className={"text-lg pl-2"}>React</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faJs} fixedWidth/>
                <p className={"text-lg pl-2"}>JavaScript</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faHtml5} fixedWidth/>
                <p className={"text-lg pl-2"}>HTML</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faCss3Alt} fixedWidth/>
                <p className={"text-lg pl-2"}>CSS</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faGolang} fixedWidth/>
                <p className={"text-lg pl-2"}>Golang</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faJava} fixedWidth/>
                <p className={"text-lg pl-2"}>Java</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faPython} fixedWidth/>
                <p className={"text-lg pl-2"}>Python</p>
            </div>
            <div className={"flex flex-row items-center"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faDatabase} fixedWidth/>
                <p className={"text-lg pl-2"}>MySQL</p>
            </div>
            <div className={"flex flex-row items-center justify-center sm:justify-start mt-2 sm:mt-0 col-span-2 sm:col-span-1"}>
                <FontAwesomeIcon className={"pr-2 border-r border-secondary"} size={"2xl"} color={"#6600FF"}
                                 icon={faLinux} fixedWidth/>
                <p className={"text-lg pl-2"}>Linux</p>
            </div>
        </div>
    </div>
)