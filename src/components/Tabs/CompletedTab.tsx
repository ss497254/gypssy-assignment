import { SolidCaretRight } from "assets/icons";
import { ImageCard } from "components/ImageCard";
import React from "react";

const Dropdown = () => {
    return (
        <div className="bg-white overflow-hidden text-black w-48 text-tiny font-semibold absolute top-9 rounded-md right-0">
            <div className="h-12 px-4 flex items-center justify-between border-t hover:bg-blue-100">
                View trip details <SolidCaretRight className="-rotate-90" />
            </div>
            <div className="h-12 px-4 flex items-center justify-between border-t hover:bg-blue-100">
                Manage trip <SolidCaretRight className="-rotate-90" />
            </div>
            <div className="h-12 px-4 flex items-center justify-between border-t hover:bg-blue-100">
                Add trip highlights <SolidCaretRight className="-rotate-90" />
            </div>
            <div className="h-12 px-4 flex items-center justify-between border-t hover:bg-blue-100">
                Copy this trip <SolidCaretRight className="-rotate-90" />
            </div>
        </div>
    );
};

export const CompletedTab = () => {
    return (
        <div className="flex gap-4">
            <ImageCard
                src="/img-1.jpg"
                place="Azerbaijan"
                dropdown={<Dropdown />}
                description="New Year in Europe"
            />
            <ImageCard
                src="/img-2.jpg"
                place="Hornbill festival"
                dropdown={<Dropdown />}
                description="Azerbaijan"
            />
            <ImageCard
                src="/img-3.jpg"
                place="Turkey"
                dropdown={<Dropdown />}
                description="Grand Adventure"
            />
            <ImageCard
                src="/img-4.jpg"
                place="New Year in Europe"
                dropdown={<Dropdown />}
                description="Azerbaijan"
            />
        </div>
    );
};
