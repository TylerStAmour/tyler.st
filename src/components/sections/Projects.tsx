import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

export default () => (
    <div>
        <div className={"flex flex-col sm:grid sm:grid-cols-2 mt-20 gap-16 mb-12"}>
            <div className={"flex flex-col grow justify-between"}>
                <div className={"flex flex-col mb-4"}>
                    <p className={"text-4xl mb-4"}>AuroraHosts Ltd</p>
                    <p>
                        Myself along with 4 other partners founded
                        <a className={"text-secondary"} href={"https://aurorahosts.com/"} target={"_blank"}> AuroraHosts </a>
                        in February 2021. As a small game server and hosting provider, we saw quick success within
                        the first month. It was by running this company that I learned a lot about Linux, SSH and
                        networking. At our peak there were over 20 high-end machines that we had to maintain,
                        though this did give me some powerful hardware to play around with, so I'm not complaining!
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
            <img className={"rounded-md"} src={"/illustrations/aurora.png"}/>
        </div>
        <div className={"flex flex-col-reverse sm:grid sm:grid-cols-2 mt-20 gap-16 mb-12"}>
            <img className={"rounded-md"} src={"/illustrations/panel.png"}/>
            <div className={"flex flex-col grow justify-between"}>
                <div className={"flex flex-col mb-4"}>
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
    </div>
)