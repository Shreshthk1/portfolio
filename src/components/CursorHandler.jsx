import { useState, useEffect } from "react";
import { Cursor } from "./Cursor"

const isInteractive = (el) => {
    let node = el;
    while (node && node !== document.documentElement) {
        const tag = node.tagName?.toLowerCase();
        if (['a', 'button', 'input', 'select', 'textarea'].includes(tag)) return true;
        if (node.getAttribute?.('role') === 'button') return true;
        const cls = node.className;
        if (typeof cls === 'string' && cls.includes('cursor-pointer')) return true;
        node = node.parentElement;
    }
    return false;
};

export const CursorHandler = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [clickable, setClickable] = useState(false);

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.pageX, y: event.pageY });
        setClickable(isInteractive(event.target));
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <Cursor isClickable={clickable} top={cursorPosition.y} left={cursorPosition.x} />;
}
