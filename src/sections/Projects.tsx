import {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

interface SubsectionProps {
    title: string;
    text: ReactElement<HTMLParagraphElement>;
    imageSource: string;
    imageAlt: string;
    bullets: string[];
    // Controls which side the image will be displayed on
    flipped?: boolean;
    // Mainly so I can add an outline to already white images
    imageClass?: string;
}

const Subsection = (props: SubsectionProps) => (
    <div className={`flex ${props.flipped ? "flex-row-reverse" : "flex-row"} sm:grid sm:grid-cols-2 gap-16 2xl:gap-52`}>
        <div className={"flex flex-col grow justify-between"}>
            <div className={"flex flex-col gap-4"}>
                <p className={"text-4xl"}>{props.title}</p>
                <div className={"grid grid-cols-2 gap-2 sm:flex sm:justify-around sm:flex-row p-1 pl-4 pr-4 rounded-lg bg-gray-200"}>
                    {props.bullets.map((bullet, index) => (
                        <div className={"flex items-center flex-row"} key={index}>
                            <FontAwesomeIcon size={"xs"} color={"#6600FF"} icon={faCircle}/>
                            <p className={"ml-2"}>{bullet}</p>
                        </div>
                    ))}
                </div>
                {props.text}
            </div>
        </div>
        <img className={`rounded-md ${props.flipped && "order-first"} ${props.imageClass}`}
             src={props.imageSource}
             alt={props.imageAlt}
        />
    </div>
)

export default () => (
    <div className={"grid gap-24"}>
        <Subsection
            title={"AuroraHosts Ltd"}
            imageSource={"/img/aurora.png"}
            imageAlt={"Aurorahosts website front page"}
            bullets={["Linux", "Networking", "Web Servers", "XDP"]}
            text={
                <p>
                    Myself along with a few friends founded
                    <a className={"text-secondary"} href={"https://aurorahosts.com/"} target={"_blank"}> AuroraHosts </a>
                    in late January 2021. As a small game server and hosting provider, we saw quick success within
                    the first 3 months. It was by running this company that I learned a lot about Linux, low-level
                    networking, system administration, and customer relations. Since then, we've served over 1600
                    clients and managed dozens of machines.
                </p>
            }
        />
        <div>
            <img src={"/svg/blob-2.svg"} className={"absolute left-0 sm:left-1/3 -mt-28 sm:-mt-52 opacity-20 select-none"} style={{ zIndex: - 1 }}/>
        </div>
        <Subsection
            title={"Aurorahosts Control Panel"}
            imageSource={"/img/panel.png"}
            imageAlt={"Aurorahosts control panel preview"}
            bullets={["Golang", "TypeScript", "React", "PHP"]}
            flipped
            text={
                <p>
                    Our main control panel for clients at AuroraHosts is based off
                    <a className={"text-secondary"} href={"https://github.com/pterodactyl/panel"} target={"_blank"}> Pterodactyl</a>,
                    an open source project built with Golang, React, TypeScript, PHP, and Laravel. To give our clients
                    a unique experience, I've had to build additional features and functionality into our panel.
                    This led me to add network monitoring, file searching, simple package management, and more.
                </p>
            }
        />
        <Subsection
            title={"Hardware-in-the-Loop (HIL)"}
            imageSource={"/img/hil.png"}
            imageAlt={"HIL web control panel preview"}
            bullets={["Golang", "Linux", "CAN", "Software Systems"]}
            text={
                <p>
                    With McMaster's Formula Electric team, I've been working on a hardware-in-the-loop testing
                    framework. Our goal is to be able to create systems-level tests for our electrical subsystems.
                    We're also able to combine it with simulated components (via Matlab or C++) to test our firmware
                    without needing a complete electrical setup.
                </p>
            }
            imageClass={"border-2 border-slate-300"}
        />
        <Subsection
            title={"Auper's Vehicle Dashboard"}
            imageSource={"/img/dashboard.png"}
            imageAlt={"A preview of Auper's vehicle dashboard"}
            bullets={["C/C++", "Qt", "Bluetooth", "MQTT"]}
            flipped
            text={
                <p>
                    At Auper, I led the development of our vehicle dashboard in C++, backed by the Qt framework.
                    With the goal of creating a software-defined vehicle, I integrated this application with a
                    GPS module, Mapbox navigation, an LTE module for sending metrics back to our cloud, and Bluetooth
                    Low Energy for tight integration with our mobile app. This is still very much in the works, so
                    check back later to hear about new features!
                </p>
            }
        />
    </div>
)