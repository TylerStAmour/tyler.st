import React, {ReactElement} from "react";

interface SubsectionProps {
    // Rather do this than have quotes for paragraphs of text
    text: ReactElement<HTMLParagraphElement>;
    imageSource: string;
    imageAlt: string;
    imageHref: string;
}

const Subsection = (props: SubsectionProps) => (
    <div className={"flex flex-row gap-16 2xl:gap-52 mb-8 sm:mb-0"}>
        <div className={"lg:w-1/2 text-md mb-4 sm:mb-0"}>
            {props.text}
        </div>
        <div className={"lg:w-1/2"}>
            <a href={props.imageHref} className={"flex h-full items-center justify-center"} target={"_blank"}>
                <img src={props.imageSource} className={"max-h-24"} alt={props.imageAlt}/>
            </a>
        </div>
    </div>
)

export default () => (
    <div className={"flex flex-col gap-4 xl:gap-10"}>
        <Subsection
            imageSource={"/svg/aurora-logo.svg"}
            imageAlt={"Aurorahosts logo"}
            imageHref={"https://aurorahosts.com"}
            text={
                <p>
                    I’m Tyler, I’ve been programming for a few years now, and I’m currently studying electrical engineering
                    at McMaster University. After learning for a few years, I started modifying full-stack applications for
                    my server hosting company, Aurorahosts. Through my company, I’ve been able to learn a lot about
                    networking, Linux, and applications development. I even worked on a network filter that ran directly
                    within the Linux kernel, as part of an initiative to prevent denial-of-service attacks (personal
                    favorite project).
                </p>
            }
        />
        <Subsection
            imageSource={"/svg/auper-logo.svg"}
            imageAlt={"Auper Motorcycles Logo"}
            imageHref={"https://aupermotorcycles.com"}
            text={
                <p>
                    Most recently, I’ve been working at Auper Motorcycles, leading the development of our vehicle dashboard
                    for our electric motorcycles. My hope with this project is to create a unique user experience, with tight
                    integrations through Bluetooth and remote connectivity to further promote the idea of a software-defined
                    vehicle. Through this position, I’ve picked up many new skills surrounding Bluetooth Low Energy, SPI,
                    embedded systems, Linux, NFC, GNSS, wireless networking, and more.
                </p>
            }
        />
        <Subsection
            imageSource={"/img/macfe-logo.png"}
            imageAlt={"MAC Formula Electric Logo"}
            imageHref={"https://macformularacing.com"}
            text={
                <p>
                    At McMaster, I’m a software team member on our FSAE team, which aims to build a ¼ scale Formula-1 style
                    racecar. With this team, I’ve worked on developing a hardware-in-the-loop (HIL) testing framework to
                    perform systems-level tests for our electrical systems. Currently, I’m developing firmware on the STM
                    platform to control our low-voltage systems. Moreover, I’ve used my skills in system administration
                    to support our team’s backend services.
                </p>
            }
        />
    </div>
)