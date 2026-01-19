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
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/60 uppercase text-shadow-md auto-fade-up auto-delay-2">
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
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/60 uppercase text-shadow-md auto-fade-up auto-delay-3">
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
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/60 uppercase text-shadow-md auto-fade-up auto-delay-4">
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
                            <div className="absolute bottom-3 left-3 font-modern text-[9px] tracking-[0.2em] text-white/60 uppercase text-shadow-md auto-fade-up auto-delay-5">
                                Facing Cabinetry Shrine
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thin vertical divider */}
                <div className="w-px mx-[3%] self-stretch bg-divider"></div>

                {/* Right Column: Text */}
                <div className="w-[42%] h-full relative overflow-hidden flex flex-col pt-[1%] pb-0 pl-[2%] text-left">
                    <div className="pointer-events-none absolute inset-0 z-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://res.cloudinary.com/dl3nvfmil/image/upload/v1768843315/HANDS.2_ntf1xh.png"
                            alt=""
                            aria-hidden="true"
                            className="absolute left-1/2 -translate-x-1/2 top-[64%] h-[28%] w-auto opacity-[0.08]"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </div>

                    <div className="relative z-10 flex flex-col flex-1">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px w-5 bg-accent-clay/60"></div>
                                <span className="font-modern text-[8px] tracking-[0.35em] uppercase text-accent-clay/70">
                                    Press Release
                                </span>
                            </div>

                            <h2 className="font-old-world text-[3.5vw] leading-[1] text-text-primary tracking-[-0.01em] mb-8 text-left auto-fade-up auto-delay-1">
                                The Space
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 flex-1">
                            <p className="font-old-world text-[1.2vw] leading-[1.55] text-text-body text-left auto-fade-up auto-delay-2">
                                The interior of Night on the Sun is immersive and atmospheric, shaped by texture, shadow, and
                                materiality. A restrained palette—anchored by sandy papyrus tones, deep charcoal, and red—creates
                                a backdrop for objects to stand with quiet authority.
                            </p>

                            <p className="font-old-world text-[1.2vw] leading-[1.55] text-text-body text-left auto-fade-up auto-delay-3">
                                The space is informed by elemental references and a sense of ritual rather than literal
                                storytelling. Ancient and contemporary influences coexist, creating an environment that feels
                                timeless, grounded, and open-ended. Visitors are encouraged to linger, explore, and encounter
                                objects at their own pace.
                            </p>

                            <div className="pt-6 mt-auto border-t border-divider auto-fade-up auto-delay-5">
                                <p className="font-modern text-[10px] tracking-[0.3em] uppercase text-burgundy text-left mt-4">
                                    Furnishings • Sculpture • Botanicals • Rare Objects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
