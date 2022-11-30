import { StarIcon } from "assets/icons";
import React from "react";

export const ReviewCard = ({ name, avartarUrl }: any) => {
    return (
        <div>
            <div className="flex gap-3 items-center mb-2">
                <img src={avartarUrl} className="h-10 w-10 rounded-full" />
                <div className="">
                    <div className="uppercase text-gray-500 text-xs">
                        October 2022
                    </div>
                    <h2 className="font-semibold text-sm">{name}</h2>
                </div>
                <div className="flex-1" />
                <div className="rounded bg-zinc-50 border h-fit border-gray-200 px-2 py-[2px] text-sm flex items-center gap-2 hover:cursor-pointer">
                    <StarIcon size={12} />
                    4.2
                </div>
            </div>
            <p className="text-justify text-[13px] text-gray-600 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum congue diam bibendum lorem penatibus. Et in mattis
                quis nisl. Semper suscipit eget lorem at fringilla iaculis. Ante
                facilisi elit risus ut. Donec semper nibh imperdiet fermentum.
                Eleifend quis suspendisse ornare lacus, aliquet neque. Et, a
                molestie ultricies accumsan tristique nisi, amet sed sed.
            </p>
        </div>
    );
};
