import React, {useState, useEffect} from 'react'
import useFireStorage from '../useFireStorage'
import {motion } from 'framer-motion'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles({
    success:{
        border:'2px solid #66bb6a',
        backgroundColor: 'rgba(102,187,106, 0.5)',
        padding:10,
        margin:20,
        borderRadius:'5px',
    },
        loading:{
        width:10,
        margin:'10px auto',
        height:10,
        borderRadius:'50%',
        background:'tomato',
    }
});

const loadVariant ={
    loading:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo: Infinity,
                duration:0.5
            },
            y:{
                yoyo: Infinity,
                duration:0.25,
                ease:'easeOut'
            }
        }
    }
}


function Upload({name, email, phone, img}) {
    const [upload, setUpload] = useState(false);
    const {url} = useFireStorage(img);
    const style = useStyles();
    async function uploadDB(){
        try {
            const config={
                headers:{
                    'Content-Type' : 'application/json'
                }
            }
            const newUser = {
                name,
                email,
                phone,
                url
            }
            const response = await axios.post('/api/user' ,newUser, config);
            if(response){
                setUpload(true);
            }
        } catch (err) {
            console.log(err);
        }
        
    }
    
    useEffect(()=>{
        uploadDB();
        //eslint-disable-next-line
    },[url])

    
    return (
        <>
            { upload ?
                <div className={style.success}>All GOOD TO GO</div>
                : 
                <motion.div
                    className={style.loading}
                    variants={loadVariant}
                    animate='loading'
                    >
                </motion.div>
            }   
        </>
    )
}

export default Upload
