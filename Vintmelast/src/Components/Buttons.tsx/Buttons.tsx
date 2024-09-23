import React from "react";

interface Props {
    className: string;
    textoClassName: string;
    text: string;
}

export const Buttons = ({ className, textoClassName, text = "Log in" }: Props): JSX.Element => {
    return (
        <div className={`inline-flex items-start gap-[21px] relative ${className}`}>
            <div className="flex w-[107px] items-center justify-center gap-3 px-6 py-3 relative bg-morado-vintme rounded-[25px] shadow-shadow-button">
                <div className="text-blanco-95 relative w-fit mt-[-1.00px] font-text2-desktop font-[number:var(--text2-desktop-font-weight)] text-[length:var(--text2-desktop-font-size)] text-center tracking-[var(--text2-desktop-letter-spacing)] leading-[var(--text2-desktop-line-height)] [font-style:var(--text2-desktop-font-style)]">
                    Vint!
                </div>
            </div>
            <div className="flex w-[107px] items-center justify-center gap-3 px-6 py-3 relative bg-blanco-95 rounded-[25px] border border-solid border-morado-vintme shadow-shadow-button">
                <div
                    className={`text-morado-vintme relative w-fit mt-[-1.00px] font-text2-desktop font-[number:var(--text2-desktop-font-weight)] text-[length:var(--text2-desktop-font-size)] text-center tracking-[var(--text2-desktop-letter-spacing)] leading-[var(--text2-desktop-line-height)] [font-style:var(--text2-desktop-font-style)] ${textoClassName}`}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};
