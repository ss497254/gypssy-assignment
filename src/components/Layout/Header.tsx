import { SolidCaretRight, SolidUser } from "assets/icons";
import React from "react";

export const Header = () => {
    return (
        <div className="flex border-b h-16">
            <div className="max-w-6xl flex mx-auto gap-8 items-center w-full">
                <img src="/logo-light.png" className="h-8" />
                <div className="flex-1"></div>
                <div className="hover:cursor-pointer hover:underline text-[14px] font-medium">
                    Create a trip
                </div>
                <div className="hover:cursor-pointer hover:underline text-[14px] font-medium">
                    Switch to travelling
                </div>
                <div className="border rounded-3xl hover:cursor-pointer flex p-1 gap-2 items-center">
                    <img src="/profile.jpg" className="h-7 w-7 rounded-full" />
                    <SolidCaretRight className="mx-1" />
                </div>
            </div>
        </div>
    );
};
