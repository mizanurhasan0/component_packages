'use client'
import { useClientPortal } from '@/hook/useClientPortal';
import { useEffect } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};

export default function CustomModal({ isOpen = true, onClose = () => { }, children }: ModalProps) {
    const renderPortal = useClientPortal();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen || typeof window === 'undefined') return null;


    return (
        <>
            {renderPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="animate-slide-down bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        {children}
                    </div>
                </div>
            )}
        </>
    )
}