const getClassName = (index: number, itemCount: number, currentIdx: number) => {
    if (index === currentIdx) return 'now';
    if (index === (currentIdx + 1) % itemCount) return 'next';
    if (index === (currentIdx - 1 + itemCount) % itemCount) return 'prev';
    return '';
};

export default getClassName;