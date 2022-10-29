import Navigation from "../components/sections/Navigation";
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
import Footer from "../components/sections/Footer";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";

export default () => (
    <div className={"ml-8 mr-8 sm:ml-24 sm:mr-24"}>
        <div className={"mt-10 mb-14 sm:mb-28"}>
            <Navigation/>
        </div>
        <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-4"}>
            <div className={"flex flex-col justify-center sm:mb-0 mb-10"}>
                <p className={"text-2xl text-secondary"}>
                    Hi, my name is
                </p>
                <p className={"text-4xl sm:text-6xl mb-4 font-semibold font-title"}>
                    Tyler St-Amour,
                </p>
                <p className={"text-xl text-gray-600 sm:max-w-xl"}>
                    A hobbyist developer and full-time student. My current interests are in building full stack applications to broaden my skillset and knowledge.
                </p>
            </div>
            <div className={"flex justify-center"}>
                <img src={"/illustrations/coding.svg"} className={"sm:max-w-lg"}/>
            </div>
        </div>
        <div className={"mt-24 sm:mt-48"}>
            <p className={"text-4xl mb-4 font-title"}>Where I started...</p>
            <About/>
        </div>
        <div className={"pb-20 pt-16 sm:pb-32 sm:pt-24"}>
            <img className={"absolute left-0"} src={"/svg/line.svg"}/>
        </div>
        <p className={"text-4xl text-center"}>Some highlighted projects</p>
        <Projects/>
        <Footer/>
    </div>
)