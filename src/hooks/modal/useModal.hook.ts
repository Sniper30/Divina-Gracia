import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

const useModal = (children: ReactNode) => {
    const [child, setChild] = useState<ReactNode>();
    const [positionModal, setPositionModal] = useState(0);

    useEffect(() => {
        if (child) {
            const bounding = document.body.querySelector('main')?.getBoundingClientRect();
            if (!bounding) return
            setPositionModal((bounding.height - bounding.bottom))
            document.body.style.overflowY = 'hidden'
        }
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [child])
    return { child, setChild, positionModal }
}

export default useModal