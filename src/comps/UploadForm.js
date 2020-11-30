import React, {useState} from 'react'
import Progress from './Progress';

function UploadForm() {
    const [file,setFile] = useState(null)
    const [output, setOutput] = useState(null)

    const handleChange = (e) => {
        let file = e.target.files[0];
        console.log(file)
        if (file.type === "image/png" || file.type ==="image/jpeg") {
            setOutput(null)
            setFile(file)
        }
        else {
            setOutput("Must be image/png or image/jpeg")
            setFile(null)
        }
    }
    const handleClick = () => {
        const input = document.getElementById("imageInput")
        input.click()
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setFile(null)
    //     setOutput(null)
    //     console.log("submit")
    // }
    return (
        <div className="upload-form">
            {file &&<Progress file={file} setFile={setFile}/>}
            <form>
                <input id="imageInput" hidden="hidden" type="file" onChange={handleChange}/>
                <span onClick={handleClick}>+</span>
                {/* {file && <button>Submit Image</button>} */}
            </form>
            <div className="output">
                {output && <p>{output}</p>} 
                {file && <p>{file.name}</p>}
            </div>
        </div>

        
    )
}

export default UploadForm
