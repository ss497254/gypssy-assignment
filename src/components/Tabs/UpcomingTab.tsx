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
                Copy this trip <SolidCaretRight className="-rotate-90" />
            </div>
        </div>
    );
};

export const UpcomingTab = () => {
    return (
        <div className="flex gap-4">
            <ImageCard
                src="/img-1.jpg"
                place="Azerbaijan"
                description="New Year in Europe"
                price="₹ 1,46,000"
                oldPrice="₹ 1,60,000"
                slot="2 slots left"
                slotType="green"
                showLinkBtn
                dropdown={<Dropdown />}
            />
            <ImageCard
                src="/img-2.jpg"
                place="Hornbill festival"
                description="Azerbaijan"
                price="₹ 1,46,000"
                oldPrice="₹ 1,60,000"
                slot="slot full"
                slotType="red"
                showLinkBtn
                dropdown={<Dropdown />}
            />
            <ImageCard
                src="/img-3.jpg"
                place="Turkey"
                description="Grand Adventure"
                price="₹ 1,46,000"
                oldPrice="₹ 1,60,000"
                slot="12 slots left"
                slotType="green"
                showLinkBtn
                dropdown={<Dropdown />}
            />
            <ImageCard
                src="/img-4.jpg"
                place="New Year in Europe"
                description="Azerbaijan"
                price="₹ 1,46,000"
                oldPrice="₹ 1,60,000"
                slot="9 slots left"
                slotType="green"
                showLinkBtn
                dropdown={<Dropdown />}
            />
        </div>
    );
};
