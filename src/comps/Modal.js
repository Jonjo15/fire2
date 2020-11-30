import React from 'react'

const Modal = ({imageUrl, setImageUrl}) =>  {
    const handleClick = (e) => {
        if (e.target.classList.contains("modal-wrapper")) {
            setImageUrl(null)
        }
    }
    return (
        <div className="backdrop">
            <div className="modal-wrapper" onClick={handleClick}>
                <img src={imageUrl} alt="modal"/>
            </div>
        </div>
    )
}

export default Modal