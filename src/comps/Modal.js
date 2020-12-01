import React from 'react'
import {motion} from "framer-motion"
const Modal = ({imageUrl, setImageUrl}) =>  {
    const handleClick = (e) => {
        if (e.target.classList.contains("modal-wrapper")) {
            setImageUrl(null)
        }
    }
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} className="backdrop" onClick={handleClick}>
            <div className="modal-wrapper" >
                <motion.img initial={{y: "-100vh"}} animate={{y: 0}} src={imageUrl} alt="modal"/>
            </div>
        </motion.div>
    )
}

export default Modal