import {IconDefinition} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    className?: string;
    icon: IconDefinition;
    title: string;
    cursor?: boolean;
}

export default ({className, icon, title, cursor}: Props) => (
    <div className={`flex flex-row items-center bg-neutral-200 p-2 rounded-md hover:-translate-y-0.5 transition duration-200 ${className} ${cursor && "cursor-pointer"}`}>
        <FontAwesomeIcon
            icon={icon}
            size={"2xl"}
            color={"#6600FF"}
            className={"pr-2 border-r border-secondary"}
            fixedWidth
        />
        <p className={"text-lg pl-2"}>{title}</p>
    </div>
)