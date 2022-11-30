import React from "react";

export interface AvatarProps {
    srcArray: string[];
    className?: string;
    size?: number;
}

export const MultipleUsers: React.FC<AvatarProps> = ({
    srcArray,
    className = "",
    size = 22,
}) => {
    return (
        <div className={`flex ${className}`}>
            {srcArray.map((s, i) => (
                <span
                    key={s + i}
                    className="rounded-full border border-white shadow-outlineSm"
                    style={{
                        zIndex: srcArray.length - i,
                        marginLeft: i > 0 ? -8 : 0,
                        height: size,
                        width: size,
                        overflow: "hidden",
                    }}
                >
                    <img src={s} className="rounded-full" />
                </span>
            ))}
        </div>
    );
};
