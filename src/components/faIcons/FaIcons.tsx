import { IconLookup, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
    name: IconName | IconLookup;
    style: string;
}

const FaIcons = (props: Props) => {
    const { name } = props;
    return (
        <div className="bg-white w-2 h-2">
            <FontAwesomeIcon icon={name} />
        </div>
    );
};

export default FaIcons;
