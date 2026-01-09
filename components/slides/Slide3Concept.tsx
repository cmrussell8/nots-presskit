import React from "react";
import SlideFrame from "../SlideFrame";

export default function Slide3Concept() {
    return (
        <section className="w-full h-full bg-slide-bg">
            <div className="w-full h-full flex flex-row p-[4%]">
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
                            The Concept
                        </h2>
                    </div>

                    <div className="space-y-6 flex-1">
                        <p className="font-old-world text-[1.3vw] leading-[1.55] text-text-body text-left italic auto-fade-up auto-delay-2">
                            Night on the Sun is a hybrid space: part garden store, part gallery, part retail destination.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-3">
                            The assortment spans furnishings, sculpture, botanicals, and rare objects chosen not for trend or
                            spectacle, but for their ability to endure—pieces shaped by hand, time, and imagination.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-4">
                            The experience is designed to feel discovered rather than transactional. Displays evoke excavation
                            sites and hidden chambers, where objects appear unearthed and quietly revealed. Short texts and
                            subtle narratives offer context without explanation, allowing visitors to form their own
                            connections.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body text-left auto-fade-up auto-delay-5">
                            The result is a space that bridges the everyday and the extraordinary—distinctive, yet approachable;
                            considered, yet alive.
                        </p>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Image */}
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="relative shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767819409/Front_Lookinginto_Main_gnci6x.png"
                            alt="Front looking into main room"
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase text-shadow-sm auto-fade-up auto-delay-5">
                            Front, Looking into Main
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
