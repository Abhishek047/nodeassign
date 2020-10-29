import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import {makeStyles} from '@material-ui/core/styles'
import {motion} from 'framer-motion'


const useStyles = makeStyles({
    contain:{
        display:'flex',
        flexFlow:'column',
        margin:'50px 0',
        padding:20,
        width:'min(300px, 90vw)',
        justifyContent:'center',
        boxShadow:'0 0 10px 2px rgba(0,0,0,0.25)'
    },
    avatar:{
        width:'80px',
        height:'80px',
        alignSelf:'center',
        boxShadow:'0px 0px 10px 3px rgba(31,127,155,0.6)'
    },
    title:{
        margin:'30px 0 15px',
        alignSelf:'center',
        textTransform:'capitalize',
        fontSize:'min(2em, 10vw)',
    },
    body:{
        margin:'10px',
        display:'flex',
        flexFlow:'row',
    },
    bodyText:{
        marginLeft:10,
    }
})


function UserItem({user}) {
    const style = useStyles();
    return (
        <motion.div 
        whileHover={{
            scale:1.1,
            borderRadius:'15px'
        }}
        className={style.contain}>
            <Avatar alt={user.name} src={user.url} className={style.avatar}/>
            <Typography variant='h6' className={style.title} >
                {user.name}
            </Typography>
            <div className={style.body}>
                <EmailIcon color='primary'/>    
                <Typography variant='body1' className={style.bodyText} >
                    {user.email}
                </Typography>
            </div>
            <div className={style.body}>
                <PhoneIcon color='primary'/>    
                <Typography variant='body1' className={style.bodyText}>
                    {user.phone}
                </Typography>
            </div>
        </motion.div>
    )
}

export default UserItem
