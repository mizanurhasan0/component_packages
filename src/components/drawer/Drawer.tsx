import React, { useRef } from 'react'

export default function Drawer() {
    const drawerRef = useRef<HTMLDivElement>(null);// this ref comes from global state

    return (
        <main
            ref={drawerRef}
            className="fixed overflow-hidden rotate z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out transition-opacity opacity-0 translate-x-full  h-screen"
        >
            <section
                className="childSection h-screen w-screen max-w-2xl right-0 absolute  dark:bg-bgDark shadow-xl delay-400 duration-300 ease-in-out transition-all transform  opacity-0 translate-x-full bg-info"
            >
                <h1>This here add children</h1>
            </section>
        </main>
    )
}
