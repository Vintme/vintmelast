import React from "react";
import { MenuItem } from "../MenuItem";

interface Props {
    className: string;
}

export const ConcreteComponentNode = ({ className }: Props): JSX.Element => {
    return (
        <div className={`inline-flex items-start relative ${className}`}>
            <MenuItem className="!flex-[0_0_auto]" desktopBotNTipogrTexto="Winepaper" />
        </div>
    );
};
