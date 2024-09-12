import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

export default () => (
    <div>
        <div className={"flex flex-col sm:grid sm:grid-cols-2 mt-20 gap-16 2xl:gap-48 mb-12"}>
            <div className={"flex flex-col grow justify-between"}>
                <div className={"flex flex-col mb-4"}>
                    <p className={"text-4xl mb-4"}>AuroraHosts Ltd</p>
                    <p>
                        Myself along with a few friends founded
                        <a className={"text-secondary"} href={"https://aurorahosts.com/"} target={"_blank"}> AuroraHosts </a>
                        in late January 2021. As a small game server and hosting provider, we saw quick success within
                        the first 3 months. It was by running this company that I learned a lot about Linux, low-level
                        networking, system administration, and customer relations. Since then, we've served over 1600
                        clients and managed dozens of machines.
                    </p>
                </div>
                <div className={"grid grid-cols-2 gap-2 sm:flex sm:justify-around sm:flex-row p-1 pl-4 pr-4 rounded-lg bg-gray-200"}>
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
            <img className={"rounded-md"} src={"/img/aurora.png"}/>
        </div>
        <img src={"/svg/blob-2.svg"} className={"absolute left-0 sm:left-1/3 -mt-28 sm:-mt-52 opacity-20 select-none"} style={{ zIndex: - 1 }}/>
        <div className={"flex flex-col-reverse sm:grid sm:grid-cols-2 mt-20 gap-16 2xl:gap-48 mb-12"}>
            <img className={"rounded-md"} src={"/img/panel.png"}/>
            <div className={"flex flex-col grow justify-between"}>
                <div className={"flex flex-col mb-4"}>
                    <p className={"text-4xl mb-4"}>AuroraHosts Control Panel</p>
                    <p>
                        Our main control panel for clients at AuroraHosts is based off
                        <a className={"text-secondary"} href={"https://github.com/pterodactyl/panel"} target={"_blank"}> Pterodactyl</a>,
                        an open source project built with Golang, React, TypeScript, PHP, and Laravel. To give our clients
                        a unique experience, I've had to build additional features and functionality into our panel.
                        This led me to add network monitoring, file searching, simple package management, and more.
                    </p>
                </div>
                <div className={"grid grid-cols-2 gap-2 sm:flex sm:justify-around sm:flex-row p-1 pl-4 pr-4 rounded-lg bg-gray-200"}>
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
        <div className={"flex flex-col sm:grid sm:grid-cols-2 mt-20 gap-16 2xl:gap-48 mb-12"}>
            <div className={"flex flex-col grow justify-between"}>
                <div className={"flex flex-col mb-4"}>
                    <p className={"text-4xl mb-4"}>Hardware-in-the-Loop (HIL)</p>
                    <p>
                        With McMaster's Formula Electric team, I've been working on a hardware-in-the-loop testing
                        framework. Our goal is to be able to create systems-level tests for our electrical subsystems.
                        We're also able to combine it with simulated components (via Matlab or C++) to test our firmware
                        without needing a complete electrical setup.
                    </p>
                </div>
                <div className={"grid grid-cols-2 gap-2 sm:flex sm:justify-around sm:flex-row p-1 pl-4 pr-4 rounded-lg bg-gray-200"}>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>Golang</p>
                    </div>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>Linux</p>
                    </div>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>CAN</p>
                    </div>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>Software Systems</p>
                    </div>
                </div>
            </div>
            <img className={"rounded-md border-2 border-slate-100"} src={"/img/hil.png"} alt={"Our web panel for running HIL tests"}/>
        </div>
        <div className={"flex flex-col-reverse sm:grid sm:grid-cols-2 mt-20 gap-16 2xl:gap-48 mb-12"}>
            <img className={"rounded-md"} src={"/img/dashboard.png"}/>
            <div className={"flex flex-col grow justify-between"}>
                <div className={"flex flex-col mb-4"}>
                    <p className={"text-4xl mb-4"}>Auper's Vehicle Dashboard</p>
                    <p>
                        At Auper, I led the development of our vehicle dashboard in C++, backed by the Qt framework.
                        With the goal of creating a software-defined vehicle, I integrated this application with a
                        GPS module, Mapbox navigation, an LTE module for sending metrics back to our cloud, and Bluetooth
                        Low Energy for tight integration with our mobile app. This is still very much in the works, so
                        check back later to hear about new features!
                    </p>
                </div>
                <div className={"grid grid-cols-2 gap-2 sm:flex sm:justify-around sm:flex-row p-1 pl-4 pr-4 rounded-lg bg-gray-200"}>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>C/C++</p>
                    </div>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>Qt</p>
                    </div>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>Bluetooth</p>
                    </div>
                    <div className={"flex items-center flex-row"}>
                        <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                        <p className={"ml-2"}>MQTT</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)