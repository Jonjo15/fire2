import React from 'react'
import useFirestore from "../hooks/useFirestore"
import {motion} from "framer-motion"
function ImageGrid({setImageUrl}) {
    const {docs} = useFirestore("images");
    return (
        <div className="image-grid">
            {docs.map((ele) => (
            <motion.div layout whileHover={{opacity: 1}} key={ele.id} className="image-wrapper" onClick={() => setImageUrl(ele.url)} >
                <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}} src={ele.url}  alt="grid-pic"/>
            </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid