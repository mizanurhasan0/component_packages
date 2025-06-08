'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import data from './data/data.json';

interface CarouselItem {
    image: string;
}

export default function InfiniteCenterCarousel() {
    const visibleCount = 5;
    const centerIndex = Math.floor(visibleCount / 2);

    const [items, setItems] = useState<CarouselItem[]>(data);

    const rotateLeft = () => {
        setItems(prev => [...prev.slice(1), prev[0]]);
    };

    const rotateRight = () => {
        setItems(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    };

    return (
        <div className="w-full py-10 flex flex-col items-center">

            <div className="relative w-full overflow-hidden ">
                <div className="flex transition-all duration-500 ease-in-out justify-center gap-4">
                    {items.slice(0, visibleCount).map((item, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden transition-all duration-500 ease-in-out
                ${index === centerIndex ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-50 z-0'}
                w-1/5`}
                        >
                            <Image
                                src={`/` + item.image}
                                alt={`Slide ${index}`}
                                width={300}
                                height={400}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex gap-4 mt-6">
                <button
                    onClick={rotateRight}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                    Prev
                </button>
                <button
                    onClick={rotateLeft}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
