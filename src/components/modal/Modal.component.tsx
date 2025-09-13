
import { useEffect, useRef, type ReactNode } from "react";

const Modal = ({ children, toggle, setChildren, setPosition }: { children: ReactNode, toggle: boolean, setChildren: (arg: ReactNode) => void, setPosition: number }) => {
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) {
            //@ts-ignore
            ref.current.style.top = setPosition + 'px'
        }

    }, [setPosition])
    return <div ref={ref} className={`bg-blacked/50 z-30 absolute w-full h-dvh left-0 ${toggle ? 'flex' : 'hidden'} flex justify-center items-center transition ease-in-out animate-show-up`} onClick={(e) =>{
         if(e.target === ref.current) setChildren(null);
    } }>
        {children}
    </div>

}


export default Modal;