import clsx from "clsx";
import { useState, useEffect } from "react";
import "./TitleButton.css";

const TitleButton=()=>{
    const [active, setActive] = useState(false);
    const [held, setHeld] = useState(false);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        var timer = setTimeout(() => setActive(true), 1000);
        return () => {
            clearTimeout(timer);
            setActive(false);
        }
    }, []);

    const OnReleased=()=>{
        setHeld(false);
        setTriggered(true);
    }

    var states = [
        active && "active",
        held && "click held",
        triggered && "click released",
    ]

    return(            
        <div 
            className={clsx("Title", ...states)}
            onMouseDown={()=>setHeld(true)}
            onMouseUp={OnReleased}
        >
            RJKerry
        </div>
    );
}

export default TitleButton;