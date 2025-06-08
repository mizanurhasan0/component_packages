'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import DownIcon from './components/IconsSvg';
import FakeData from "../../data/FakeData.json";
import { DropdwonPropsTypes } from './typesDropdown/TypesDropDown';

export default function CustomDropdown({ defaultValue = '0', options = FakeData }: DropdwonPropsTypes) {
    const refDropdown = useRef<HTMLDivElement>(null);
    const refOptionsBody = useRef<HTMLDivElement>(null);
    const [selectOpt, setSelectOpt] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const updateDropdownPosition = () => {
        const rect = refDropdown.current?.getBoundingClientRect();
        const bodyStyle = refOptionsBody.current?.style;
        if (rect && bodyStyle) {
            const { bottom, left, width } = rect;
            Object.assign(bodyStyle, {
                top: `${bottom + window.scrollY}px`,
                left: `${left + window.scrollX}px`,
                width: `${width}px`,
            });
        }
    };

    const onSelect = (opt: string) => {
        setSelectOpt(opt);
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) updateDropdownPosition();
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const dropdown = refOptionsBody.current;
            if (dropdown && !dropdown.contains(e.target as Node) && !refDropdown.current?.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div ref={refDropdown} className="relative h-[3.375rem] rounded-[0.46rem] border">
                <div
                    onClick={() => setIsOpen(prev => !prev)}
                    className="capitalize w-full text-left px-[.96rem] py-1 flex items-center justify-between text-[1.187rem] h-full"
                >
                    <span>{selectOpt}</span>
                    <div className="relative w-10 h-10">
                        <DownIcon />
                    </div>
                </div>
            </div>

            {isOpen && options.length > 0 && createPortal(
                <div
                    ref={refOptionsBody}
                    className="z-[1000] absolute max-h-60 w-full flex flex-col text-sm text-center shadow-md rounded-b-md overflow-y-auto bg-white"
                >
                    {options.map((opt, i) => (
                        <button
                            key={i}
                            type="button"
                            className="px-2 py-1 hover:bg-secondary hover:text-txtPrimary rounded-sm whitespace-nowrap text-gray hover:text-black"
                            onClick={() => onSelect(opt._id as string)}
                        >
                            {opt.name as string}
                        </button>
                    ))}
                </div>,
                document.body
            )}
        </>
    );
}
