import React from "react";

export default function Slide4Space() {
    return (
        <section className="w-full h-full bg-slide-bg">
            <div className="w-full h-full flex flex-row p-[4%]">
                {/* Left Column: Image Grid */}
                <div className="flex-1 h-full flex flex-col justify-center py-[1%]">
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className="relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
                            style={{ aspectRatio: "4 / 3" }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767820786/Checkout_Counter_x6zvgp.png"
                                alt="Checkout counter"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase">
                                Checkout Counter
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
                            style={{ aspectRatio: "4 / 3" }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767821209/Front_Room_Gallery_aagsi1.png"
                                alt="Front room gallery"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase">
                                Front Room Gallery
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
                            style={{ aspectRatio: "4 / 3" }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767819409/Front_Lookinginto_Main_gnci6x.png"
                                alt="Front looking into main room"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase">
                                Front, Looking into Main
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
                            style={{ aspectRatio: "4 / 3" }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1767821847/FacingCabinetry_Sshrine_dqoxqm.png"
                                alt="Facing cabinetry shrine"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/40 uppercase">
                                Facing Cabinetry Shrine
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Text */}
                <div className="w-[42%] h-full flex flex-col py-[1%] pl-[2%] text-left">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-5 bg-accent-clay/60"></div>
                            <span className="font-modern text-[8px] tracking-[0.35em] uppercase text-accent-clay/70">
                                Press Release
                            </span>
                        </div>

                        <h2 className="font-old-world text-[3.5vw] leading-[1] text-text-primary tracking-[-0.01em] mb-8 text-left">
                            The Space
                        </h2>
                    </div>

                    <div className="space-y-6 flex-1">
                        <p className="font-old-world text-[1.2vw] leading-[1.55] text-text-body text-left">
                            The interior of Night on the Sun is immersive and atmospheric, shaped by texture, shadow, and
                            materiality. A restrained palette—anchored by sandy papyrus tones, deep charcoal, and red—creates
                            a backdrop for objects to stand with quiet authority.
                        </p>

                        <p className="font-old-world text-[1.1vw] leading-[1.6] text-text-body-secondary text-left">
                            The space is informed by elemental references and a sense of ritual rather than literal
                            storytelling. Ancient and contemporary influences coexist, creating an environment that feels
                            timeless, grounded, and open-ended. Visitors are encouraged to linger, explore, and encounter
                            objects at their own pace.
                        </p>

                        <div className="space-y-4 pt-2">
                            <p className="font-old-world text-[1.15vw] leading-[1.55] text-text-body text-left">
                                The assortment spans furnishings, sculpture, botanicals, and rare objects chosen not for
                                trend or spectacle, but for their ability to endure—pieces shaped by hand, time, and
                                imagination.
                            </p>
                            <p className="font-modern text-[9px] tracking-[0.3em] uppercase text-burgundy text-left mt-2">
                                Furnishings • Sculpture • Botanicals • Rare Objects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
