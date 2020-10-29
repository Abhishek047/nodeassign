import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'
import ShowUser from './ShowUser'

const loadingVariant={
    animation:{
        x:[-50,20],
        y:[0,-60],
        transition:{
            x:{
                yoyo: Infinity,
                duration:0.7
            },
            y:{
                yoyo: Infinity,
                duration:0.35,
                ease:'easeOut'
            }
        }
    }
}

function GetUsers() {

    const [users, setUsers] = useState(null);

    useEffect(()=>{
        axios.get('/api/user')
        .then(res => {
            setUsers(res.data.users);
        })
        .catch(err => console.log(err));
    },[])

    return (
        <div>
            {
                users ? (<div> <ShowUser users={users} /> </div>) 
                : <div className='backdrop'><motion.div variants={loadingVariant} animate='animation' className='loading' /></div>
            }
        </div>
    )
}

export default GetUsers
