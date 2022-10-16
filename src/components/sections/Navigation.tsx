import {Link} from "react-router-dom";

export default () => (
    <div className={"flex flex-row justify-end gap-16 text-2xl text-gray-400 transition"}>
        <div className={"hover:text-secondary duration-300"}>
            <Link to={"/projects"}>Projects</Link>
        </div>
        <div className={"hover:text-secondary duration-300"}>
            <Link to={"/about"}>About Me</Link>
        </div>
        <div className={"hover:text-secondary duration-300"}>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </div>
)