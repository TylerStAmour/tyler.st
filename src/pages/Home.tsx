import Navigation from "../components/sections/Navigation";
import Box from "../components/Box";
import {
    faReact,
    faJs,
    faHtml5,
    faCss3Alt,
    faGolang,
    faJava,
    faPython,
    faLinux
} from "@fortawesome/free-brands-svg-icons"
import {
    faDatabase
} from "@fortawesome/free-solid-svg-icons"

export default () => {
    return (
        <div className={"ml-24 mr-24"}>
            <div className={"mt-10 mb-28"}>
            <Navigation/>
            </div>
            <div className={"grid grid-cols-2 gap-4"}>
                <div className={"flex flex-col justify-center"}>
                    <p className={"text-2xl text-secondary"}>
                        Hi, my name is
                    </p>
                    <p className={"text-6xl mb-4 font-semibold font-title"}>
                        Tyler St-Amour,
                    </p>
                    <p className={"text-xl text-gray-600 max-w-xl"}>
                        A hobbyist developer and full-time student. My current interests are in building full stack applications to broaden my skillset and knowledge.
                    </p>
                </div>
                <div className={"flex justify-center"}>
                    <img src={"/illustrations/coding.svg"} className={"max-w-lg"}/>
                </div>
            </div>
            <div className={"mt-48 mb-24"}>
                <p className={"text-3xl mb-4"}>Where I started...</p>
                <div className={"grid grid-cols-2 gap-16"}>
                    <div>
                        <p className={"text-md"}>
                            <span className={"text-secondary font-semibold"}>Hey!</span> I'm Tyler, I started out my
                            computer science journey in 2014. Let's just say I was stuck in tutorial hell for the next
                            6 years, so we'll skip that.
                        </p>
                        <p className={"text-md mt-3"}>Java was my first proper introduction to programming. From there
                            I've branched to web development through the <span className={"text-secondary"}>React framework</span>,
                            to backend development in Golang with the help of the
                            <a href={"https://github.com/gin-gonic/gin"} target={"_blank"} className={"text-secondary"}> Gin </a>
                            framework, and to Linux system administration through one of my projects.
                        </p>
                        <p className={"text-md mt-3"}>
                            See some of the skills I've learned over the years on the right.
                        </p>
                    </div>
                    <div className={"grid grid-cols-3 gap-2 mb-1"}>
                        <Box title={"React"} icon={faReact} cursor />
                        <Box title={"JavaScript"} icon={faJs} cursor />
                        <Box title={"HTML"} icon={faHtml5} cursor />
                        <Box title={"CSS"} icon={faCss3Alt} cursor />
                        <Box title={"Golang"} icon={faGolang} cursor />
                        <Box title={"Java"} icon={faJava} cursor />
                        <Box title={"Python"} icon={faPython} cursor />
                        <Box title={"MySQL"} icon={faDatabase} cursor />
                        <Box title={"Linux"} icon={faLinux} cursor />
                    </div>
                </div>
            </div>
        </div>
    )
}