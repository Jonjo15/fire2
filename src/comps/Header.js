import React from 'react'
import {motion} from "framer-motion"
function Header() {
    return (
        <motion.div className="title">
            <h1>Firegram</h1>
            <motion.h2 whileHover={{ scale: 1.1 }}>Your Pictures</motion.h2>
            <p>Lorem ipsum......</p>
        </motion.div>
    )
}

export default Header