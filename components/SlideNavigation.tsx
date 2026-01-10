"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePresskitDownload } from "./usePresskitDownload";

interface SlideNavigationProps {
    currentSlide: number;
    totalSlides: number;
    onNext: () => void;
    onPrev: () => void;
}

const toRoman = (num: number): string => {
    const romanNumerals: [string, number][] = [
        ["VII", 7],
        ["VI", 6],
        ["V", 5],
        ["IV", 4],
        ["III", 3],
        ["II", 2],
        ["I", 1],
    ];
    let result = "";
    let n = num;
    for (const [roman, value] of romanNumerals) {
        while (n >= value) {
            result += roman;
            n -= value;
        }
    }
    return result;
};

export default function SlideNavigation({
    currentSlide,
    totalSlides,
    onNext,
    onPrev,
}: SlideNavigationProps) {
    const { isDownloading, handleDownload } = usePresskitDownload();

    return (
        <>
            {/* Top UI: PDF Download */}
            <div
                className="presskit-ui fixed left-1/2 -translate-x-1/2 w-[min(92vw,164vh)] pointer-events-none z-[200] no-print"
                style={{
                    top: "max(16px, calc(50% - min(25.875vw, 46vh) - 80px))",
                }}
            >
                <div className="flex justify-end pointer-events-auto">
                    <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="bg-white/5 hover:bg-transparent border border-divider text-text-primary hover:text-text-muted px-5 py-2 rounded-sm font-modern text-[8px] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                    >
                        {isDownloading ? "Downloading..." : "Download PDF"}
                    </button>
                </div>
            </div>

            {/* Bottom UI: Navigation */}
            <div
                className="presskit-ui fixed left-1/2 -translate-x-1/2 w-[min(92vw,164vh)] pointer-events-none z-[200] no-print"
                style={{
                    bottom: "max(16px, calc(50% - min(25.875vw, 46vh) - 80px))",
                }}
            >
                <div className="flex justify-between items-center pointer-events-auto">
                    {/* Previous Button */}
                    <div className="w-8">
                        {currentSlide > 0 && (
                            <button
                                onClick={onPrev}
                                className="text-accent-clay/70 hover:text-accent-clay transition-colors duration-300 p-2 cursor-pointer"
                            >
                                <ChevronLeft size={40} strokeWidth={1} />
                            </button>
                        )}
                    </div>

                    {/* Page Count */}
                    <span className="font-old-world text-[13px] tracking-[0.2em] text-white/50">
                        {toRoman(currentSlide + 1)} of {toRoman(totalSlides)}
                    </span>

                    {/* Next Button */}
                    <div className="w-8 flex justify-end">
                        {currentSlide < totalSlides - 1 && (
                            <button
                                onClick={onNext}
                                className="text-accent-clay/70 hover:text-accent-clay transition-colors duration-300 p-2 cursor-pointer"
                            >
                                <ChevronRight size={40} strokeWidth={1} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
