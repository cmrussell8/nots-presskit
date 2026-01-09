import React from "react";
import SlideFrame from "../SlideFrame";

interface SlidePlaceholderProps {
    title: string;
    subtitle?: string;
}

export default function SlidePlaceholder({
    title,
    subtitle = "Coming Soon",
}: SlidePlaceholderProps) {
    return (
        <section className="w-full h-full bg-slide-bg">
            <div className="w-full h-full flex flex-col items-start justify-center p-[8%] text-left">
                <div className="flex flex-col items-start gap-6">
                    <h2 className="font-old-world text-[4vw] leading-[1] text-text-primary tracking-[-0.01em] text-left">
                        {title}
                    </h2>
                    <div className="h-px w-20 bg-accent-clay/60"></div>
                    <p className="font-modern text-[1vw] tracking-[0.2em] uppercase text-text-muted text-left">
                        {subtitle}
                    </p>
                    <p className="font-old-world text-[1.2vw] text-text-body-tertiary max-w-2xl mt-4 text-left">
                        Content for this section is currently in development.
                        <br />
                        Please check back later for updates.
                    </p>
                </div>
            </div>
        </section>
    );
}
