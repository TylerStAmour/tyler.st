import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Future from "../sections/Future";

export default () => (
    <>
        <div className={"px-8 sm:px-24 2xl:px-40 mb-20"}>
            <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 mt-12"}>
                <div className={"flex flex-col justify-center sm:mb-0 mb-10"}>
                    <p className={"text-2xl text-secondary"}>
                        Hi, my name is
                    </p>
                    <p className={"text-4xl sm:text-6xl mb-4 font-semibold font-title"}>
                        Tyler St-Amour,
                    </p>
                    <p className={"text-xl text-gray-600 sm:max-w-xl"}>
                        A software engineer and engineering student. I’m passionate about a wide range of software development, from high-level cloud architecture, to low-level embedded systems. My current interests are in low-level networking and developing on RTOS platforms.
                    </p>
                </div>
                <div className={"flex justify-center"}>
                    <img src={"/img/coding.svg"} className={"sm:max-w-lg"}/>
                </div>
            </div>
            <div className={"mt-24 sm:mt-48"}>
                <img src={"/svg/blob.svg"} className={"absolute left-0 sm:left-[10%] select-none -mt-52 opacity-10"} style={{ zIndex: - 1 }}/>
                <p className={"text-4xl mb-4 font-title"}>About me</p>
                <About/>
            </div>
            <div className={"pb-20 pt-16 sm:pb-32 sm:pt-24"}>
                <img className={"absolute left-0"} src={"/svg/line.svg"}/>
            </div>
            <p className={"text-4xl text-center mb-20"}>Some highlighted projects</p>
            <Projects/>
            <p className={"text-4xl text-center mt-24 mb-4"}>What's next?</p>
            <div className={"flex w-full justify-center"}>
                <Future/>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
)