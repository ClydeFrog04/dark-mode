import React, {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = (enabled) => {
    const [isEnabled, setIsEnabled] = useLocalStorage("enabled", enabled);

    useEffect(() =>{
        document.querySelector("body").classList.toggle("dark-mode", isEnabled);
    }, [isEnabled]);

    return[isEnabled, setIsEnabled];
}

export default useDarkMode;