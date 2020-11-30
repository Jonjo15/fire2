// import logo from './logo.svg';
// import './App.css';
import {useState} from "react"
import Header from "./comps/Header"
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"
import UploadForm from "./comps/UploadForm"

function App() {
  const [imageUrl, setImageUrl] = useState(null)
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setImageUrl={setImageUrl}/>
      {imageUrl && <Modal imageUrl={imageUrl} setImageUrl={setImageUrl}/>}
    </div>
  );
}

export default App;
