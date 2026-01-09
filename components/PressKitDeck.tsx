"use client";

import React, { useEffect, useState, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import SlideNavigation from "./SlideNavigation";
import Slide1Introduction from "./slides/Slide1Introduction";
import Slide2Story from "./slides/Slide2Story";
import Slide3Concept from "./slides/Slide3Concept";
import Slide4Space from "./slides/Slide4Space";
import Slide6Founders from "./slides/Slide6Founders";
import Slide6Contact from "./slides/Slide6Contact";
import Slide7Why from "./slides/Slide7Why";
import SlidePlaceholder from "./slides/SlidePlaceholder";

export default function PressKitDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const deckRef = useRef<Reveal.Api | null>(null);
    const totalSlides = 7;
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);
    const isPrint =
        typeof window !== "undefined" &&
        window.location.search.includes("print-pdf");
    const isPdfDownload =
        typeof window !== "undefined" &&
        window.location.search.includes("pdf=1");

    useEffect(() => {
        // Prevent double initialization in strict mode
        if (deckRef.current) return;

        const deck = new Reveal({
            width: 1920,
            height: 1080,
            margin: 0,
            minScale: 0.2,
            maxScale: 2.0,
            controls: false, // Using custom navigation
            progress: false,
            center: false, // Disable centering, CSS handles it
            hash: true,
            transition: "fade",
            backgroundTransition: "fade",
            disableLayout: !isPrint, // Let Reveal handle sizing for print
            display: "block",
            embedded: !isPrint, // Full-page for print view
        });

        deck.initialize().then(() => {
            deckRef.current = deck;

            // Sync React state with Reveal state
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            deck.on("slidechanged", (event: any) => {
                setCurrentSlide(event.indexh);
            });

            // Set initial index if hash is present
            setCurrentSlide(deck.getIndices().h);

            if (isPrint && !isPdfDownload) {
                requestAnimationFrame(() => {
                    window.print();
                });
            }
        });

        return () => {
            try {
                if (deckRef.current) {
                    // Cleanup if necessary, though Reveal doesn't strictly require it for single page apps
                    // deckRef.current.destroy(); 
                    // Destroying often causes issues with React HMR re-mounts, so we'll leave it or handle carefully.
                    // For this implementation, we rely on the ref check.
                }
            } catch (e) {
                console.warn("Reveal cleanup error", e);
            }
        };
    }, []);

    const handleNext = () => {
        deckRef.current?.next();
    };

    const handlePrev = () => {
        deckRef.current?.prev();
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        if (isPrint) return;
        const touch = event.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event: React.TouchEvent) => {
        if (isPrint) return;
        const start = touchStartRef.current;
        if (!start) return;
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        touchStartRef.current = null;

        if (Math.abs(deltaX) > 40 && Math.abs(deltaY) < 60) {
            if (deltaX < 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
    };

    return (
        <>
            <div
                className="presskit-frame absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[92vw]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{
                    aspectRatio: "16/9",
                    maxHeight: "92vh",
                    boxShadow: `
                        0 1px 1px rgba(0, 0, 0, 0.04),
                        0 2px 2px rgba(0, 0, 0, 0.04),
                        0 4px 4px rgba(0, 0, 0, 0.04),
                        0 6px 8px rgba(0, 0, 0, 0.04),
                        0 8px 16px rgba(0, 0, 0, 0.04),
                        0 12px 24px rgba(0, 0, 0, 0.04),
                        0 16px 32px rgba(0, 0, 0, 0.03),
                        0 24px 48px rgba(0, 0, 0, 0.03),
                        0 32px 64px rgba(0, 0, 0, 0.02)
                    `
                }}
            >
                <div className="reveal w-full h-full rounded-[2px] overflow-hidden">
                    <div className="slides">
                        <Slide1Introduction />
                        <Slide2Story />
                        <Slide3Concept />
                        <Slide4Space />
                        <Slide6Founders />
                        <Slide7Why />
                        <Slide6Contact />
                    </div>
                </div>
            </div>

            <SlideNavigation
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    );
}
