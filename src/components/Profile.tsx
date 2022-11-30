import {
    LinkIcon,
    SolidEdit,
    SolidInstagram,
    StarIcon,
    YoutubeIcon,
} from "assets/icons";
import React from "react";

export const Profile = () => {
    return (
        <div className="max-w-6xl mt-10 mx-auto">
            <div className="flex items-center">
                <img src="/user-2.jpg" className="h-36 w-36 rounded-full" />
                <div className="mx-6">
                    <h2 className="uppercase text-gray-700 text-xs">
                        Host Profile
                    </h2>
                    <h2 className="text-2xl font-bold mb-3">Wade Warren</h2>
                    <div className="flex gap-3">
                        <div className="rounded-md bg-zinc-50 border border-gray-200 px-2 py-1 text-sm flex items-center gap-2 hover:cursor-pointer">
                            <SolidInstagram size={14} />
                            10.4k
                        </div>
                        <div className="rounded-md bg-zinc-50 border border-gray-200 px-2 py-1 text-sm flex items-center gap-2 hover:cursor-pointer">
                            <YoutubeIcon size={18} />
                            10.4k
                        </div>
                        <div className="rounded-md bg-zinc-50 border border-gray-200 px-2 py-1 text-sm flex items-center gap-1 hover:cursor-pointer">
                            <div className="font-bold text-s">10</div>
                            trips
                        </div>
                        <div className="rounded-md bg-zinc-50 border border-gray-200 px-2 py-1 text-sm flex items-center gap-2 hover:cursor-pointer">
                            <StarIcon size={14} />
                            4.2
                        </div>
                    </div>
                </div>
                <div className="flex-1"></div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center hover:cursor-pointer h-11 w-11 bg-zinc-50 border rounded-full">
                        <LinkIcon size={25} className="-mr-[2px]" />
                    </div>
                    <div className="flex items-center justify-center hover:cursor-pointer h-11 w-11 bg-zinc-50 border rounded-full">
                        <SolidEdit size={25} />
                    </div>
                </div>
            </div>
            <h2 className="font-semibold mt-6 mb-4">About the host</h2>
            <div className="text-sm text-stone-700 text-justify my-2 drop-shadow-sm">
                The capital of Azerbaijan, this oil-rich city is truly a hidden
                European gem. It is dynamic, world-class, extremely rich in
                culture and very, very suave. Get ready for charming winters,
                historic architecture, vibrant nightlife, and Mud Volcanoes.
                This isn’t your conventional Euro trip. Planned on a long
                weekend, you just need to take few days off work and it’s cheap
                on the pocket too! Trust us, it can’t better than this
            </div>
        </div>
    );
};
