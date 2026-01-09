import React from "react";

export default function Slide7Why() {
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

                        <h2 className="font-old-world text-[3.5vw] leading-[1] text-text-primary tracking-[-0.01em] mb-8 text-left">
                            Why Night on the Sun
                        </h2>
                    </div>

                    <div className="space-y-6 flex-1">
                        <p className="font-old-world text-[1.2vw] leading-[1.55] text-text-body text-left">
                            In a landscape saturated with mass-produced goods and fleeting trends, Night on the Sun offers
                            an alternative. It is a response to a growing desire for objects with soul—pieces that feel
                            storied, intentional, and quietly powerful.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body-secondary text-left">
                            Night on the Sun exists to help people tell their own stories through the objects they choose to
                            live with. It is a place for the cultivated and the curious, for those drawn to beauty, intrigue,
                            and the thrill of the rare find.
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
                            src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767821847/FacingCabinetry_Sshrine_dqoxqm.png"
                            alt="Facing cabinetry shrine"
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase">
                            Facing Cabinetry Shrine
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
