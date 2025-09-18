import { useEffect } from "react";
import { useObserver } from "../../hooks/observer";

const LogoImg = ({id, className, source, alt}: {id: string, className: React.ComponentProps<'div'>['className'],alt?:string , source: string})=>{
      useEffect(()=>{
        useObserver(id,source,{threshold: .5});
    },[])
    return <img id={id} className={className} alt={alt}/>
    
}
export default LogoImg