import React, {useEffect} from 'react'
import useStorage from "../hooks/useStorage"
function Progress({file, setFile}) {
    
    const {progress, url} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])
    return (
        <div style={{width: progress + "%"}} className="progress-bar"></div>
    )
}

export default Progress