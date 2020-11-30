import React from 'react'
import useFirestore from "../hooks/useFirestore"
function ImageGrid({setImageUrl}) {
    const {docs} = useFirestore("images");
    return (
        <div className="image-grid">
            {docs.map((ele) => (
            <div key={ele.id} className="image-wrapper">
                <img onClick={setImageUrl(ele.url)} src={ele.url}  alt="grid-pic"/>
            </div>
            ))}
        </div>
    )
}

export default ImageGrid