'use client';
import { useEffect, useRef, useState } from 'react';
import SliderCard from '../Cascade/component/sliderCard';
import ControlBtn from '../Cascade/component/controlBtn';
import { Props } from '../Cascade/types/typesCascade';



const CascadeSlider = ({
    slides,
    autoPlay = true,
    interval = 3000,
    width = '',
    height = 'h-[250px]',
}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemCount = slides.length;
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const touchStartX = useRef<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isAutoPlayEnabled = useRef(autoPlay);

    const goNext = () => setCurrentIndex((prev) => (prev + 1) % itemCount);
    const goPrev = () => setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);

    // Autoplay
    useEffect(() => {
        if (!isAutoPlayEnabled.current) return;

        const startTimer = () => {
            timerRef.current = setInterval(goNext, interval);
        };
        const stopTimer = () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };

        startTimer();
        return stopTimer;
    }, [autoPlay, interval]);

    // Pause on hover
    useEffect(() => {
        if (!isAutoPlayEnabled.current) return;
        const el = sliderRef.current;
        if (!el) return;

        const stop = () => timerRef.current && clearInterval(timerRef.current);
        const start = () => (timerRef.current = setInterval(goNext, interval));

        el.addEventListener('mouseenter', stop);
        el.addEventListener('mouseleave', start);

        return () => {
            el.removeEventListener('mouseenter', stop);
            el.removeEventListener('mouseleave', start);
        };

    }, []);

    // Swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 50) goPrev();
        else if (diff < -50) goNext();
        touchStartX.current = null;
    };

    return (
        <div
            ref={sliderRef}
            className={`relative ${width} ${height} overflow-hidden`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {slides.map((slide, index) => (
                <div key={index}>
                    <SliderCard index={index} slide={slide} currentIdx={currentIndex} itemCount={slides.length} />
                </div>
            )
            )}
            <ControlBtn action={goPrev} alt='preview' icon={0} className='left-5' />
            <ControlBtn action={goNext} alt='next' icon={1} className='right-5' />
        </div>
    );
};

export default CascadeSlider;
