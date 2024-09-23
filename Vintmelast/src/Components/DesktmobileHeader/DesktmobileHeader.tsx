
import React from "react";
import { LogoDesktopHorizontal } from "../../icons/LogoDesktopHorizontal";
import { LogoMobileHorizontal } from "../../icons/LogoMobileHorizontal";
import { Buttons } from "../Buttons.tsx";
import { Logo } from "../Logo";
import { MenuItems } from "../MenuItems";

interface Props {
    size: "l" | "m" | "s";
    state: "default";
    logoIcon: JSX.Element;
}

export const DesktmobileHeader = ({
    size,
    state,
    logoIcon = (
        <LogoDesktopHorizontal
            className="!relative !flex-[0_0_auto]"
            color="url(#paint0_linear_795_385)"
            color1="url(#paint2_linear_795_385)"
            color2="url(#paint3_linear_795_385)"
            color3="url(#paint4_linear_795_385)"
            color4="url(#paint5_linear_795_385)"
            color5="url(#paint6_linear_795_385)"
            color6="url(#paint7_linear_795_385)"
            fill="url(#paint1_linear_795_385)"
        />
    ),
}: Props): JSX.Element => {
    return (
        <div
            className={`flex items-center justify-between bg-negro-primario relative ${size === "m" ? "w-[768px]" : size === "s" ? "w-[360px]" : "w-[1440px]"
                } ${size === "m" ? "px-8 py-[5px]" : size === "s" ? "px-4 py-2.5" : "px-[120px] py-3.5"}`}
        >
            {size === "l" && (
                <>
                    <Logo className="!flex-[0_0_auto]" icon={logoIcon} />
                    <MenuItems
                        menuItem1MenuItemClassName="!absolute !left-[488px] !top-0"
                        menuItem1MenuItemDesktopBotNTipogrTexto="About"
                    />
                </>
            )}

            {size === "m" && (
                <Logo
                    className="!flex-[0_0_auto]"
                    icon={
                        <LogoDesktopHorizontal
                            className="!relative !flex-[0_0_auto]"
                            color="url(#paint0_linear_795_253)"
                            color1="url(#paint2_linear_795_253)"
                            color2="url(#paint3_linear_795_253)"
                            color3="url(#paint4_linear_795_253)"
                            color4="url(#paint5_linear_795_253)"
                            color5="url(#paint6_linear_795_253)"
                            color6="url(#paint7_linear_795_253)"
                            fill="url(#paint1_linear_795_253)"
                        />
                    }
                />
            )}

            {["l", "m"].includes(size) && (
                <Buttons className="!flex-[0_0_auto]" text="Conectar" textoClassName="!mr-[-10.00px] !ml-[-10.00px]" />
            )}

            {size === "s" && (
                <>
                    <div className="relative w-8 h-8 bg-[#9b74eb] rounded-2xl">
                        <div className="relative w-[26px] h-[26px] top-[3px] left-[3px]">
                            <img
                                className="absolute w-5 h-[13px] top-1.5 left-[3px]"
                                alt="Color"
                                src="https://c.animaapp.com/lLD7vZ3G/img/--color.svg"
                            />
                        </div>
                    </div>
                    <LogoMobileHorizontal className="!relative !w-[135.66px] !h-7" />
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 relative flex-[0_0_auto] bg-morado-vintme rounded-[25px] shadow-shadow-button">
                        <div className="relative w-fit mt-[-1.00px] font-text1-mobile font-[number:var(--text1-mobile-font-weight)] text-blanco-95 text-[length:var(--text1-mobile-font-size)] text-center tracking-[var(--text1-mobile-letter-spacing)] leading-[var(--text1-mobile-line-height)] [font-style:var(--text1-mobile-font-style)]">
                            Vint!
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
