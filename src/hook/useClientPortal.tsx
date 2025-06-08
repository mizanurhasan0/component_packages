import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function useClientPortal() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (element: React.ReactNode) => {
        if (mounted && typeof document !== "undefined") {
            return createPortal(element, document.body);
        }
        return null;
    };
}