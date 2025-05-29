import React from 'react'
import { ControlBtnProps } from '../types/typesCascade'


const icons = ["https://agenciafagulha.com.br/wp-content/uploads/2019/12/chvron-left.svg", "https://agenciafagulha.com.br/wp-content/uploads/2019/12/chvron-right.svg"]
export default function ControlBtn({ action = () => { }, className = "", alt = "", icon = 0 }: ControlBtnProps): React.ReactNode {
    return (
        <button
            onClick={action}
            className={`absolute top-1/2 -translate-y-1/2 z-[5] cursor-pointer ${className}`}
        >
            <img
                src={icons[icon]}
                alt={alt || "Control Button"}
            />
        </button>
    )
}
