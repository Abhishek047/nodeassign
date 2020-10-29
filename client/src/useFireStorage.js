import {useState, useEffect} from 'react';
import {storage} from './config/firebaseConfig'

const useFireStorage = (img) => { 

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');

    useEffect(()=>{

        //Create Refrence for the current Image in Storage
        const storeageRef = storage.ref(img.name);

        //.put to input that in the storage
        storeageRef.put(img).on('state_changed', (snap) =>{
            setProgress((snap.bytesTransferred/snap.totalBytes)*100);
        }, (err) => {
            setError(err);
        }, async () => {
            //upload takes time so use async to run it when its complete to get the URL
            const url = await storeageRef.getDownloadURL();
            setUrl(url);
        })
    },[img]);

    return { progress, url, error}

}

export default useFireStorage;