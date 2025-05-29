type SlideData = {
    image: string;
    alt?: string;
};

type Props = {
    slides: SlideData[];
    autoPlay?: boolean;
    interval?: number;
    width?: string;
    height?: string;
};
type SliderCardProps = {
    slide: SlideData;
    index: number;
    itemCount: number;
    currentIdx: number;
}

type ControlBtnProps = {
    action?: () => void;
    className?: string;
    alt?: string;
    icon?: number;
}

export type { SlideData, Props, SliderCardProps, ControlBtnProps };