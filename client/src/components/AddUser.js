import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Button from '@material-ui/core/Button'
import Uploadicon from '@material-ui/icons/CloudUpload'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { validateEmail }  from '../utils/format'
import Upload from './Upload'


const useStyles = makeStyles({
    items:{
        margin:'15px 0'
    },
    error:{
        borderRadius:'5px',
        padding:'10px 20px',
        width:'70%',
        backgroundColor:'rgba(244,67,54,0.3)',
        border:'1px solid #f50057'
    }
});


function AddUser() {
    const [name,setName] = useState('');
    const TYPES =[ 'image/jgp', 'image/jpeg', 'image/png', 'image/bmp'];

    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [error, setError] = useState('');
    const [img, setImg] = useState('');
    const [upload, setUpload] = useState();
    const style = useStyles();

    //HANDLE IMAGE InPUT
    function imgInput(e){
        let selectedFile= e.target.files[0];
        if(selectedFile && TYPES.includes(selectedFile.type)){
            setImg(selectedFile);
            setError('');
        }
        else{
            setImg(null);
            setError('Please Select a format of \'jpg, jpeg, png, bmp\'');
        }
    }

    function handleSubmit(){
        if(!name || !img || !email || !phone)
        {
            setError('Enter All Fields');
        }
        else if(!validateEmail(email))
        {
            setError('Please Enter a Correct Email');
        }
        else{
            setError('');
            setUpload(<Upload name={name} email={email} phone={phone} img={img}/>)
            setName('');
            setEmail('');
            setPhone('');
            setImg(null);
        }
    }



    return (
        <motion.div
        className='form-container'
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.2}}        
        >
            <TextField value={name} label='Name' onChange={(e)=> setName(e.target.value)} className={style.items} /> 
            <TextField value={email} label='Email' onChange={(e)=> setEmail(e.target.value)} className={style.items}/> 
            <TextField value={phone} label='Phone' type='number' onChange={(e)=> setPhone(e.target.value)} className={style.items}/>
            <Button className={style.items} component='label' endIcon={<Uploadicon />} color='primary' variant="contained">
                <input type='file' style={{display:'none'}} onChange={imgInput}/>
                Upload Image
            </Button>
            {error && 
            <Typography
            className={style.error}
            variant='body1' >
                {error}
            </Typography> 
            }
            <Button variant="contained" color='primary' className={style.items} onClick={handleSubmit} >
                Submit
            </Button>
            {upload && 
            <div className={style.items} > 
            {upload}
            </div>
            }
        </motion.div>
    )
}

export default AddUser
