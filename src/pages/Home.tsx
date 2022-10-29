import Navigation from "../components/sections/Navigation";
import Box from "../components/Box";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faReact,
    faJs,
    faHtml5,
    faCss3Alt,
    faGolang,
    faJava,
    faPython,
    faLinux,
} from "@fortawesome/free-brands-svg-icons"
import {
    faDatabase,
    faCircle
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
            <div className={"mt-48"}>
                <p className={"text-4xl mb-4 font-title"}>Where I started...</p>
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
                        <Box title={"React"} icon={faReact} />
                        <Box title={"JavaScript"} icon={faJs} />
                        <Box title={"HTML"} icon={faHtml5} />
                        <Box title={"CSS"} icon={faCss3Alt} />
                        <Box title={"Golang"} icon={faGolang} />
                        <Box title={"Java"} icon={faJava} />
                        <Box title={"Python"} icon={faPython} />
                        <Box title={"MySQL"} icon={faDatabase} />
                        <Box title={"Linux"} icon={faLinux} />
                    </div>
                </div>
            </div>
            <div className={"pb-32 pt-24"}>
                <img className={"absolute left-0"} src={"/svg/line.svg"}/>
            </div>
            <div>
                <p className={"text-4xl text-center"}>Some highlighted projects</p>
                <div className={"grid grid-cols-2 gap-4 mt-20 gap-16 mb-12"}>
                    <div className={"flex flex-col grow justify-between"}>
                        <div className={"flex flex-col"}>
                            <p className={"text-4xl mb-4"}>AuroraHosts Ltd</p>
                            <p>
                                Myself along with 4 other partners founded
                                <a className={"text-secondary"} href={"https://aurorahosts.com/"} target={"_blank"}> AuroraHosts </a>
                                in February 2021. As a small game server and hosting provider, we saw quick success within
                                the first month. It was by running this company that I learned a lot about Linux, SSH and
                                networking. At our peak there were over 20 high-end servers that we had to maintain,
                                although this did give me some powerful hardware to play around with, so I'm not complaining!
                            </p>
                        </div>
                        <div className={"p-1 pl-4 pr-4 rounded-lg bg-neutral-200 flex justify-around flex-row"}>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>Linux</p>
                            </div>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>Networking</p>
                            </div>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>Web Servers</p>
                            </div>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>XDP</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={"/illustrations/1920x1080placeholder.png"}/>
                    </div>
                </div>
                <div className={"grid grid-cols-2 gap-4 mt-20 gap-16 mb-12"}>
                    <div>
                        <img src={"/illustrations/1920x1080placeholder.png"}/>
                    </div>
                    <div className={"flex flex-col grow justify-between"}>
                        <div className={"flex flex-col"}>
                            <p className={"text-4xl mb-4"}>AuroraHosts Control Panel</p>
                            <p>
                                Our main control panel for clients at AuroraHosts is based off
                                <a className={"text-secondary"} href={"https://github.com/pterodactyl/panel"} target={"_blank"}> Pterodactyl</a>,
                                an open source project built with Golang, Laravel, React and TypeScript. To give our clients
                                a unique experience, I had to build additional features and functionality into our panel.
                                This led me to learning Go and becoming familiar with PHP and full stack development, as
                                well as expanding my knowledge with React.
                            </p>
                        </div>
                        <div className={"p-1 pl-4 pr-4 rounded-lg bg-neutral-200 flex justify-around flex-row"}>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>Golang</p>
                            </div>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>TypeScript</p>
                            </div>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>React</p>
                            </div>
                            <div className={"flex items-center flex-row"}>
                                <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                                <p className={"ml-2"}>PHP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}