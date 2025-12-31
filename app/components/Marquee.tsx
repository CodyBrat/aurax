import React from "react";

interface MarqueeProps {
    items: string[];
    speed?: "slow" | "normal" | "fast";
    separator?: string;
    className?: string;
}

const Marquee = ({
    items,
    speed = "normal",
    separator = "•",
    className = ""
}: MarqueeProps) => {
    const speedClass = {
        slow: "animate-[marquee_45s_linear_infinite]",
        normal: "animate-[marquee_30s_linear_infinite]",
        fast: "animate-[marquee_15s_linear_infinite]",
    };

    // Duplicate items to create seamless loop
    const content = [...items, ...items, ...items, ...items];

    return (
        <div className={`w-full overflow-hidden bg-black border-y border-white/10 ${className}`}>
            <div className="flex whitespace-nowrap py-4">
                <div className={`flex items-center gap-8 ${speedClass[speed]} hover:[animation-play-state:paused]`}>
                    {content.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="text-sm uppercase tracking-ultra text-gray-300 font-medium">
                                {item}
                            </span>
                            <span className="text-gray-600 text-xs">{separator}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
