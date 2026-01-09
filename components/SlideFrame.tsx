import React from "react";

const NoiseOverlay = () => (
    <div className="absolute inset-0 opacity-[0.012] pointer-events-none z-[100] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%270_0_200_200%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27noise%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.85%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23noise)%27/%3E%3C/svg%3E')] bg-repeat" />
);

const CornerFrame = ({
    position,
}: {
    position: "tl" | "tr" | "bl" | "br";
}) => {
    const baseClasses =
        "absolute w-5 h-5 pointer-events-none z-50 text-corner-frame";
    const positions = {
        tl: "top-5 left-5",
        tr: "top-5 right-5",
        bl: "bottom-5 left-5",
        br: "bottom-5 right-5",
    };

    return (
        <div className={`${baseClasses} ${positions[position]}`}>
            {/* Horizontal line */}
            <div
                className={`absolute h-px bg-current ${position.includes("l") ? "left-0" : "right-0"
                    } ${position.includes("t") ? "top-0" : "bottom-0"}`}
                style={{ width: "20px" }}
            />
            {/* Vertical line */}
            <div
                className={`absolute w-px bg-current ${position.includes("l") ? "left-0" : "right-0"
                    } ${position.includes("t") ? "top-0" : "bottom-0"}`}
                style={{ height: "20px" }}
            />
        </div>
    );
};

interface SlideFrameProps {
    children: React.ReactNode;
}

export default function SlideFrame({ children }: SlideFrameProps) {
    return (
        <div className="relative w-full h-full bg-slide-bg overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.4)] rounded-[2px]">
            <NoiseOverlay />

            {/* Corner Decorations */}
            <CornerFrame position="tl" />
            <CornerFrame position="tr" />
            <CornerFrame position="bl" />
            <CornerFrame position="br" />

            {/* Content Area */}
            <div className="w-full h-full relative z-10">
                {children}
            </div>
        </div>
    );
}
