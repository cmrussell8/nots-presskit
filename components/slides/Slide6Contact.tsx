import React from "react";

export default function Slide6Contact() {
    return (
        <section className="w-full h-full bg-slide-bg">
            <div className="w-full h-full flex flex-row p-[4%]">
                {/* Left Column: Heading */}
                <div className="w-[42%] h-full flex flex-col py-[1%] pr-[2%] text-left">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-5 bg-accent-clay/60"></div>
                            <span className="font-modern text-[8px] tracking-[0.35em] uppercase text-accent-clay/70">
                                Press Release
                            </span>
                        </div>

                        <h2 className="font-old-world text-[3.5vw] leading-[1] text-text-primary tracking-[-0.01em] mb-8 text-left">
                            Contact
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="font-old-world text-[1.2vw] leading-[1.55] text-text-body text-left">
                            Opening Details
                        </p>
                        <p className="font-old-world text-[1.05vw] leading-[1.6] text-text-body-tertiary text-left">
                            Night on the Sun is opening in late spring 2026. For press inquiries and additional materials,
                            reach out using the contact details provided.
                        </p>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Details */}
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-5 items-center">
                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Location
                        </span>
                        <span className="font-old-world text-[1.2vw] text-text-body text-right">
                            Cairo, NY
                        </span>

                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Opening
                        </span>
                        <span className="font-old-world text-[1.2vw] text-text-body text-right">
                            Late Spring 2026
                        </span>

                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Concept
                        </span>
                        <span className="font-old-world text-[1.2vw] text-text-body text-right">
                            Garden store, gallery, and retail destination
                        </span>

                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Founded By
                        </span>
                        <span className="font-old-world text-[1.2vw] text-text-body text-right">
                            Todd Carr &amp; Carter Harrington
                        </span>

                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Instagram
                        </span>
                        <a
                            href="https://instagram.com/night.on.the.sun"
                            className="font-old-world text-[1.2vw] text-text-body hover:text-text-primary transition-colors text-right"
                        >
                            @night.on.the.sun
                        </a>

                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Website
                        </span>
                        <a
                            href="https://www.nightonthesun.com"
                            className="font-old-world text-[1.2vw] text-text-body hover:text-text-primary transition-colors text-right"
                        >
                            www.nightonthesun.com
                        </a>

                        <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70">
                            Contact
                        </span>
                        <a
                            href="mailto:info@nightonthesun.com"
                            className="font-old-world text-[1.2vw] text-text-body hover:text-text-primary transition-colors text-right"
                        >
                            info@nightonthesun.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
