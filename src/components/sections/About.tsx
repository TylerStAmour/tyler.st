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
    <div className={"flex flex-col gap-4 xl:gap-10"}>
        <div className={"sm:grid sm:grid-cols-5 gap-16 2xl:gap-40 mb-8 sm:mb-0"}>
            <p className={"text-md col-span-3 mb-4 sm:mb-0"}>
                I’m Tyler, I’ve been programming for a few years now, and I’m currently studying electrical engineering
                at McMaster University. After learning for a few years, I started modifying full-stack applications for
                my server hosting company, Aurorahosts. Through my company, I’ve been able to learn a lot about
                networking, Linux, and applications development. I even worked on a network filter that ran directly
                within the Linux kernel, as part of an initiative to prevent denial-of-service attacks (personal
                favorite project).
            </p>
            <div className={"items-center content-center col-span-2"}>
                <a href={"https://aurorahosts.com"} target={"_blank"}>
                    <img src={"/svg/aurora-logo.svg"} alt={"Aurorahosts Logo"}/>
                </a>
            </div>
        </div>
        <div className={"sm:grid sm:grid-cols-5 gap-16 2xl:gap-40 mb-8 sm:mb-0"}>
            <p className={"text-md col-span-3 mb-4 sm:mb-0"}>
                Most recently, I’ve been working at Auper Motorcycles, leading the development of our vehicle dashboard
                for our electric motorcycles. My hope with this project is to create a unique user experience, with tight
                integrations through Bluetooth and remote connectivity to further promote the idea of a software-defined
                vehicle. Through this position, I’ve picked up many new skills surrounding Bluetooth Low Energy, SPI,
                embedded systems, Linux, NFC, GNSS, wireless networking, and more.
            </p>
            <div className={"items-center content-center col-span-2"}>
                <a href={"https://aupermotorcycles.com"} target={"_blank"}>
                    <img src={"/svg/auper-logo.svg"} alt={"Auper Motorcycles Logo"}/>
                </a>
            </div>
        </div>
        <div className={"sm:grid sm:grid-cols-5 gap-16 2xl:gap-40"}>
            <p className={"text-md col-span-3 mb-4 sm:mb-0"}>
                At McMaster, I’m a software team member on our FSAE team, which aims to build a ¼ scale Formula-1 style
                racecar. With this team, I’ve worked on developing a hardware-in-the-loop (HIL) testing framework to
                perform systems-level tests for our electrical systems. Currently, I’m developing firmware on the STM
                platform to control our low-voltage systems. Moreover, I’ve used my skills in system administration
                to support our team’s backend services.
            </p>
            <div className={"flex items-center content-center col-span-2"}>
                <a href={"https://macformulaelectric.com"} target={"_blank"}>
                    <img src={"/img/macfe-logo.png"} alt={"MAC Formula Electric Logo"}/>
                </a>
            </div>
        </div>
    </div>
)