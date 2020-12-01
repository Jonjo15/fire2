import {projectStorage, projectFirestore, timestamp} from "../firebase/config"
import {useState, useEffect} from "react"

const useStorage = (image) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(()=>{
        const firestoreRef = projectFirestore.collection("images");
        const storageRef = projectStorage.ref()
        let uploadTask = storageRef.child(image.name).put(image);

        uploadTask.on("state_changed",
         function(snapshot) {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage)
            console.log(percentage)
         },
         function(err) {
            setError(err)
        },
        async () => {
            const url = await storageRef.child(image.name).getDownloadURL();
            const createdAt = timestamp();
            await firestoreRef.add({ url, createdAt });
            setUrl(url);
          });
    },[image])

    return {url, progress, error}
}

export default useStorage