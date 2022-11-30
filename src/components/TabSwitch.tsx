import React from "react";

export const TabSwitch = ({ active, setActive, tabs }: any) => {
    return (
        <ul className="flex flex-wrap text-sm gap-4 border-b-[1.5px] mb-7">
            {tabs.map((tab: any, idx: number) => (
                <li className="mr-2" key={idx}>
                    <button
                        className={`inline-block pb-2 -mb-[1.5px] ${
                            active === idx
                                ? "font-medium text-black border-b-2 border-black"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActive(idx)}
                    >
                        {tab.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};
