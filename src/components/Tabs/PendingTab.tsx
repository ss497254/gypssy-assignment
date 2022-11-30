import { SolidEdit, SolidTrash } from "assets/icons";
import { ImageCard } from "components/ImageCard";
import React from "react";

const Dropdown = () => {
    return (
        <div className="bg-white overflow-hidden py-2 text-black w-48 text-tiny font-semibold absolute top-9 rounded-md right-0">
            <div className="h-11 px-4 flex items-center gap-3 hover:bg-gray-100">
                <div className="w-6 flex justify-center">
                    <SolidEdit size={20} />
                </div>
                Edit
            </div>
            <div className="h-11 px-4 text-red-500 flex items-center gap-3 border-t hover:bg-gray-100">
                <div className="w-6 flex justify-center">
                    <SolidTrash size={14} />
                </div>
                Delete
            </div>
        </div>
    );
};

export const PendingTab = () => {
    return (
        <div className="flex gap-4">
            <ImageCard
                src="/img-1.jpg"
                place="Azerbaijan"
                description="New Year in Europe"
                price="₹ 1,46,000"
                dropdown={<Dropdown />}
            />
            <ImageCard
                src="/img-2.jpg"
                place="Hornbill festival"
                description="Azerbaijan"
                price="₹ 1,46,000"
                dropdown={<Dropdown />}
            />
            <ImageCard
                src="/img-3.jpg"
                place="Turkey"
                description="Grand Adventure"
                price="₹ 1,46,000"
                dropdown={<Dropdown />}
            />
            <ImageCard
                src="/img-4.jpg"
                place="New Year in Europe"
                description="Azerbaijan"
                price="₹ 1,46,000"
                dropdown={<Dropdown />}
            />
        </div>
    );
};
