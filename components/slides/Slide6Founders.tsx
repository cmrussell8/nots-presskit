import React from "react";

export default function Slide6Founders() {
    return (
        <section className="w-full h-full bg-slide-bg relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768844956/FF_islfnk.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute left-[12%] bottom-[8%] h-[50%] w-auto opacity-[0.06]"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-row p-[4%]">
                {/* Left Column: Text */}
                <div className="w-[42%] h-full flex flex-col py-[1%] pr-[2%] text-left">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-5 bg-accent-clay/60"></div>
                            <span className="font-modern text-[8px] tracking-[0.35em] uppercase text-accent-clay/70">
                                Press Release
                            </span>
                        </div>

                        <h2 className="font-old-world text-[3.5vw] leading-[1] text-text-primary tracking-[-0.01em] mb-8 text-left auto-fade-up auto-delay-1">
                            Founders
                        </h2>
                    </div>

                    <div className="space-y-6 flex-1">
                        <p className="font-old-world text-[1.3vw] leading-[1.55] text-text-body text-left italic auto-fade-up auto-delay-2">
                            Night on the Sun was founded by Carter Harrington (CEO) and Todd Carr (Creative Director),
                            the duo behind Hort &amp; Pott.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-3">
                            Together, they have built a practice rooted in craft, material curiosity, and a deep respect
                            for process.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-4">
                            Where Hort &amp; Pott remains a deeply personal studio expression, Night on the Sun allows the
                            founders' vision to expand beyond a single voice, becoming a collaborative platform for
                            discovery, dialogue, and growth.
                        </p>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Details */}
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="space-y-8">
                        <div className="relative shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767822341/T_C_tkrk5f.jpg"
                                alt="Todd Carr and Carter Harrington"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col">
                                <span className="font-old-world text-[1.2vw] text-text-body auto-fade-up auto-delay-5">
                                    Carter Harrington
                                </span>
                                <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70 auto-fade-up auto-delay-5">
                                    CEO
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="font-old-world text-[1.2vw] text-text-body auto-fade-up auto-delay-6">
                                    Todd Carr
                                </span>
                                <span className="font-modern text-[9px] tracking-[0.25em] uppercase text-accent-clay/70 auto-fade-up auto-delay-6">
                                    Creative Director
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
