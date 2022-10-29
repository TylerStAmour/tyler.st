import {Link} from "react-router-dom";
import {useState} from "react";

export default () => {
    const [barClass, setBarClass] = useState("bg-gray-400");
    const [visible, setVisible] = useState(false);
    const width = window.innerWidth;

    return (
        <div className={"flex flex-row justify-end gap-16 text-2xl text-gray-400 transition"}>
            {width < 640 ?
                <div>
                    <div className={"space-y-2 cursor-pointer"}
                         style={{ display: visible ? "none" : "inherit" }}
                         onClick={() => setVisible(true)}
                         onMouseEnter={() => setBarClass("bg-gray-600")}
                         onMouseLeave={() => setBarClass("bg-gray-400")}>
                        <div className={`block h-0.5 w-8 transition duration-200 ${barClass}`}/>
                        <div className={`block h-0.5 w-8 transition duration-200 ${barClass}`}/>
                        <div className={`block h-0.5 w-8 transition duration-200 ${barClass}`}/>
                    </div>
                    <div className={"fixed h-screen bg-gray-100 opacity-95 w-2/5 top-0 right-0 text-gray-500 items-center flex-col gap-6"}
                         style={{display: visible ? "flex" : "none"}}>
                        <div
                            className="absolute top-0 mt-8 mr-8 right-0 cursor-pointer"
                            onClick={() => setVisible(false)}>
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </div>
                        <div className={"hover:text-secondary duration-300 mt-24"}>
                            <Link to={"/projects"}>Projects</Link>
                        </div>
                        <div className={"hover:text-secondary duration-300"}>
                            <Link to={"/about"}>About Me</Link>
                        </div>
                        <div className={"hover:text-secondary duration-300"}>
                            <Link to={"/contact"}>Contact</Link>
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className={"hover:text-secondary duration-300"}>
                        <Link to={"/projects"}>Projects</Link>
                    </div>
                        <div className={"hover:text-secondary duration-300"}>
                    <Link to={"/about"}>About Me</Link>
                        </div>
                    <div className={"hover:text-secondary duration-300"}>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                </>
            }
        </div>
    )
}