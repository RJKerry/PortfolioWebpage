import clsx from "clsx";
import { useState, useEffect, useContext } from "react";
import "./TitleButton.css";
import { InitContext } from "@Application";

const TitleButton=()=>{
    const { setAppInitialized } = useContext(InitContext);
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
        setTimeout(() => setAppInitialized(true), 500);
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