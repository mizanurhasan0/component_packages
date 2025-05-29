'use client';
import React, { useEffect, useRef } from 'react';
import Data from "./data/data.json";
import "./styles/sliderStyle.css";

export default function Slide() {
    const sliderRef = useRef<HTMLDivElement>(null);
    let currentIndex = 0;
    const updateSlider = (index: number) => {
        const sliderItems = document?.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>;
        const sliderContainer = sliderRef.current;

        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        if (!sliderContainer || !sliderItems.length) return;
        const offset = -(index - 1) * (sliderItems[0].offsetWidth + 20);
        sliderContainer.style.transform = `translateX(${offset}px)`;
    }
    const onPreviewClick = () => {
        const sliderItems = document?.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>;

        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider(currentIndex);
    }
    const onNextClick = () => {
        const sliderItems = document?.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>;

        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider(currentIndex);
    }


    useEffect(() => {
        // currentIndex = Math.floor(sliderItems?.length / 2);
        updateSlider(currentIndex);

    }, []);
    return (
        <section className="py-10 relative">
            <div className="text-center">
                <p className="font-lato text-2xl">Video Review</p>
                <h4 className="font-mollie text-8xl font-medium">Loved by Influencers
                </h4>
            </div>
            <div>
                <div className="slider relative container mx-auto overflow-hidden">

                    <div ref={sliderRef} className="slider-container  flex gap-5 transition-transform duration-500 ease-in-out will-change-transform">
                        {Data.map((item, index) => (
                            <div key={index} className="slider-item relative rounded-3xl overflow-hidden w-[424px] h-[511px] ">
                                <img className="w-full h-full object-cover border rounded-xl" src={`${item.image}`} alt="Image 3" />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className="flex item-center justify-center py-10 space-x-2">
                <button className="slider-button left" aria-label="Previous" onClick={onPreviewClick}>
                    preview
                </button>
                <button onClick={onNextClick} className="slider-button right" aria-label="Next">
                    next
                </button>
            </div>
        </section>
    )
}
