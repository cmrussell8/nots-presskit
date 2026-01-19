import React from "react";
import SlideFrame from "../SlideFrame";

export default function Slide2Story() {
    return (
        <section className="w-full h-full bg-slide-bg">
            <div className="w-full h-full flex flex-row p-[4%]">
                {/* Left Column: Text - Left Aligned */}
                <div className="w-[42%] h-full flex flex-col py-[1%] pr-[2%] text-left">
                    {/* Top Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-5 bg-accent-clay/60"></div>
                            <span className="font-modern text-[8px] tracking-[0.35em] uppercase text-accent-clay/70">
                                Press Release
                            </span>
                        </div>

                        <h2 className="font-old-world text-[3.5vw] leading-[1] text-text-primary tracking-[-0.01em] mb-8 text-left auto-fade-up auto-delay-1">
                            The Story
                        </h2>
                    </div>

                    {/* Body Copy */}
                    <div className="space-y-6 flex-1">
                        <p className="font-old-world text-[1.3vw] leading-[1.55] text-text-body text-left italic auto-fade-up auto-delay-2">
                            Night on the Sun was born from a long-held desire to create a
                            physical space devoted to discovery.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-3">
                            After years of working through Hort & Pott—building a studio
                            practice grounded in seasonality, material exploration, and
                            handmade process—founders Todd Carr and Carter Harrington found
                            themselves drawn toward something larger: a place that could
                            hold not only their own work, but a wider constellation of
                            objects, makers, and ideas.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-4">
                            As the vision expanded to include larger-scale works,
                            collaborative pieces, and a more immersive retail experience, it
                            became clear that this next chapter required its own identity.
                            Night on the Sun was created to hold that expansion—adjacent in
                            spirit to Hort & Pott, yet distinct in purpose.
                        </p>
                    </div>

                    {/* Bottom - Pull quote */}
                    <div className="pt-6 border-t border-divider mt-auto mb-6">
                        <p className="font-modern text-[11px] leading-[1.9] tracking-[0.06em] uppercase text-burgundy text-left auto-fade-up auto-delay-5">
                            More than a storefront, Night on the Sun is an invitation to
                            slow down, look closer, and engage with objects that carry
                            presence, history, and intention.
                        </p>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Image Placeholders */}
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="overflow-hidden border border-divider" style={{ aspectRatio: "4 / 3" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768846823/H_P_ptpgkr.jpg"
                                alt="Studio image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden border border-divider" style={{ aspectRatio: "4 / 3" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768841554/Screenshot_2026-01-19_at_11.52.00_AM_kvgw7c.png"
                                alt="Studio image detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden border border-divider" style={{ aspectRatio: "4 / 3" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768841554/Screenshot_2026-01-19_at_11.52.07_AM_loptfr.png"
                                alt="Construction image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden border border-divider" style={{ aspectRatio: "4 / 3" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768841554/Screenshot_2026-01-19_at_11.52.15_AM_knk1ml.png"
                                alt="Remodeled space image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
