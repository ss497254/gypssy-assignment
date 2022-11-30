import { LinkIcon, SolidThreeDots } from "assets/icons";
import React, { useState } from "react";
import { MultipleUsers } from "./MultipleUserAvatar";

const users = ["img-5.jpg", "img-7.jpg", "img-9.jpg", "img-11.jpg"];

const slotTypes: Record<string, string> = {
    red: "bg-red-50 border-red-400 text-red-500",
    green: "bg-green-50 border-green-400 text-green-500",
};

export const ImageCard = ({
    src,
    place,
    description,
    slot,
    slotType,
    price,
    oldPrice,
    showLinkBtn,
    dropdown,
}: any) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="">
            <div
                className="rounded-xl h-[275px] w-[275px] relative bg-contain"
                style={{ backgroundImage: `url(${src})` }}
            >
                {showLinkBtn && (
                    <button className="bg-black rounded-full text-white flex justify-center items-center bg-opacity-60 h-8 w-8 absolute top-4 right-14">
                        <LinkIcon />
                    </button>
                )}
                <button
                    className="bg-black rounded-full text-white flex justify-center items-center bg-opacity-60 z-30 h-8 w-8 absolute top-4 right-4"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <SolidThreeDots className="rotate-90" />
                    {showDropdown && dropdown}
                </button>
                <div className="bg-black bg-opacity-70 px-3 py-2 absolute left-0 bottom-4 text-white text-tiny font-light rounded-r-md">
                    8 Days trip 25 Dec’22 - 1 Jan’23
                </div>
            </div>
            <div className="flex mt-5 mb-4 gap-2">
                <div className="flex-1 flex flex-wrap gap-3">
                    <div className="rounded bg-zinc-200 text-tiny py-1 px-2">
                        All Women's trip
                    </div>
                    <div className="rounded bg-zinc-200 text-tiny py-1 px-2">
                        18+
                    </div>
                </div>
                {slot && (
                    <div
                        className={`rounded-full border text-tiny font-semibold py-1 px-2 h-fit ${slotTypes[slotType]}`}
                    >
                        {slot}
                    </div>
                )}
            </div>
            <div className="uppercase text-tiny text-gray-600">
                {description}
            </div>
            <div className="font-bold text-lg mb-2">{place}</div>
            <div className="mb-2 flex items-center gap-2">
                <span className="font-semibold text-sm">{price}</span>
                <span className="text-tiny line-through text-gray-600">
                    {oldPrice}
                </span>
            </div>
            <div className="flex items-center gap-2 mt-3 text-[10px]">
                <MultipleUsers srcArray={users} />
                10 people joined
            </div>
        </div>
    );
};
