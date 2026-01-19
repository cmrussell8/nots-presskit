import React from "react";
import SlideFrame from "../SlideFrame";

export default function Slide1Introduction() {
    return (
        <section className="w-full h-full bg-slide-bg relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768839389/Bull_NO_LOGO_mzqovp.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute right-[-16%] bottom-[10%] h-[64%] w-auto opacity-[0.05]"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-row p-[4%]">
                {/* Left Column: Image */}
                <div className="w-[55%] h-full flex flex-col justify-center">
                    <div className="relative shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767472315/MainRoom_IntoFront_mmhmxl.png"
                            alt="Night on the Sun Interior"
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase text-shadow-sm auto-fade-up auto-delay-2">
                            MAIN ROOM, INTO FRONT
                        </div>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Text - Left Aligned */}
                <div className="flex-1 h-full flex flex-col justify-between py-[1%] text-left">
                    {/* Top Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-16">
                            <div className="h-px w-5 bg-accent-clay/60"></div>
                            <span className="font-modern text-[8px] tracking-[0.35em] uppercase text-accent-clay/70">
                                Press Release
                            </span>
                        </div>

                        <div className="mb-12 text-left auto-fade-up auto-delay-1">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768838829/Word.Mark_BLACK_piaq0q.png"
                                alt="Night on the Sun wordmark"
                                className="block w-[46vw] max-w-[640px] min-w-[300px] h-auto"
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </div>

                        {/* Tagline - burgundy accent */}
                        <p className="font-modern text-[11px] tracking-[0.3em] uppercase text-burgundy-light mb-6 text-left auto-fade-up auto-delay-2">
                            A Destination for the Curious
                        </p>

                        {/* Location - clear and readable */}
                        <p className="font-modern text-[9px] tracking-[0.2em] uppercase text-accent-clay/70 pb-5 border-b border-divider text-left auto-fade-up auto-delay-3">
                            Cairo, New York — Est. Spring 2026
                        </p>
                    </div>

                    {/* Middle Section */}
                    <div className="space-y-5 -mt-4">
                        <p className="font-old-world text-[1.3vw] leading-[1.5] text-text-body text-left auto-fade-up auto-delay-4">
                            Night on the Sun is a new retail and experiential gallery
                            destination. Uniting the vitality of a garden store, the
                            intention of a gallery, and the wonder of a museum, it offers a
                            carefully curated collection of objects and botanica for
                            interiors, gardens, and the spaces in between.
                        </p>

                        <p className="font-old-world text-[1.3vw] leading-[1.5] text-text-body text-left auto-fade-up auto-delay-5">
                            Rooted in craft, curiosity, and discovery, it is a place where
                            objects are not simply bought, but found.
                        </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-5 mb-3">
                        <div className="pt-5 border-t border-divider">
                            <p className="font-modern text-[11px] leading-[1.9] tracking-[0.06em] uppercase text-text-body-secondary text-left auto-fade-up auto-delay-6">
                                Founded by the team behind Hort & Pott, Night on the Sun
                                represents a natural evolution—an expansion of a deeply
                                personal studio practice into a broader curatorial world.
                            </p>
                        </div>

                        <div className="text-left">
                            <span className="font-old-world italic text-base text-burgundy auto-fade-up auto-delay-7">
                                Inquiries
                            </span>
                            <a
                                href="mailto:press@nightonthesun.com"
                                className="block font-modern text-[9px] tracking-[0.2em] text-[#6b665e] hover:text-text-body transition-colors uppercase mt-1 auto-fade-up auto-delay-8"
                            >
                                press@nightonthesun.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
