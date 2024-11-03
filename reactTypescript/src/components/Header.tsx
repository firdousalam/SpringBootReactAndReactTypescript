import { type ReactNode } from "react"

interface HeaderProp{
    image :{ 
        alt :string;
        src : string;
    };
    children : ReactNode
 }
export default function Headers({image,children} : HeaderProp){
    return <header>
             <img src={image.src} alt={image.alt}/>
                {children}
            </header>
}