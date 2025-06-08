'use client';

import React, { useEffect, useRef, useState } from 'react';
import Data from './data/data.json';

export default function Slide() {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(Data.length / 2));
    const sliderRef = useRef<HTMLDivElement>(null);

    const updateSlider = (index: number) => {
        const slider = sliderRef.current;
        if (!slider || slider.children.length === 0) return;

        const itemWidth = slider.children[0].clientWidth;
        const gap = 20; // Tailwind's `gap-5` = 1.25rem = 20px
        const container = slider.parentElement;
        const containerWidth = container?.clientWidth || 0;

        // Center the active item
        const offset =
            index * (itemWidth + gap) -
            containerWidth / 2 +
            itemWidth / 2;

        slider.style.transform = `translateX(${-offset}px)`;
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + Data.length) % Data.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % Data.length);
    };

    useEffect(() => {
        updateSlider(currentIndex);
    }, [currentIndex]);

    return (
        <section className="py-10 relative">
            <div className="text-center">
                <p className="text-2xl font-semibold">Video Review</p>
                <h4 className="text-5xl sm:text-6xl md:text-7xl font-bold">Loved by Influencers</h4>
            </div>

            <div className="relative container mx-auto overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-5 transition-transform duration-500 ease-in-out will-change-transform"
                >
                    {Data.map((item, index) => (
                        <div
                            key={index}
                            className={`w-[424px] h-[511px] rounded-3xl overflow-hidden border transition-all duration-500 ease-in-out shrink-0 ${index === currentIndex
                                ? 'opacity-100 scale-100'
                                : 'opacity-60 scale-95'
                                }`}
                        >
                            <img
                                src={item.image}
                                alt={`Slide ${index}`}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center py-10 space-x-4">
                <button
                    className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    Prev
                </button>
                <button
                    className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
                    onClick={handleNext}
                    aria-label="Next"
                >
                    Next
                </button>
            </div>
        </section>
    );
}
