import React, { JSX, ReactNode } from 'react'
import getClassName from '../utils/getClassName';
import { SliderCardProps } from '../types/typesCascade';


export default function SliderCard({ slide, index, itemCount, currentIdx }: SliderCardProps): JSX.Element | ReactNode {

    const state = getClassName(index, itemCount, currentIdx);

    const base = 'absolute top-1/2 left-1/2 transition-all duration-1000 ease-in-out';
    const styles = {
        now: 'transform -translate-x-1/2 -translate-y-1/2 scale-110 opacity-100 z-[5] bg-red-500',
        next: 'transform -translate-y-1/2 -translate-x-[130%] scale-[0.8] opacity-50 brightness-75 z-[1] bg-green-500',
        prev: 'transform -translate-y-1/2 translate-x-[30%] scale-[0.8] opacity-50 brightness-90 z-[1] bg-yellow-500',
        hidden: 'transform -translate-x-1/2 -translate-y-1/2 scale-[0.3] opacity-0 z-0',
    };

    return (
        <div className={`${base} ${styles[state as keyof typeof styles] || styles.hidden}`}>
            <img
                src={slide.image}
                alt={slide.alt || `slide-${index}`}
                loading="lazy"
                className={`rounded-xl shadow-lg w-full h-full object-fill`}
            />
        </div>
    );

}
