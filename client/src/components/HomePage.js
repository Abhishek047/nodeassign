import React from 'react'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {motion} from 'framer-motion'

const useStyles = makeStyles({
    contain:{
        height:'100vh',
    },
    box:{
        width:'min(300px,80vw)',
        height:'min(300px,80vw)',
        display:'flex',
        flexFlow:'column',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'0px 0px 10px 5px rgba(0,0,0,0.25)',
        marginLeft:'15px',
        padding:'20px',
    },
    text:{
        marginBottom:'50px',
        fontSize:'min(2em, 10vw)'
    }
})

function HomePage() {
const style = useStyles();

    return (
        <>        
            <Grid container direction='row' justify='center' alignItems='center' spacing={5} className={style.contain} >
                <Grid item >
                    <motion.div whileHover={{scale:1.2, boxShadow:'0px 0px 20px 5px rgba(0,0,0,0.35)', borderRadius:'10px'}} className={style.box}>
                        <Typography variant='h2' container='h2' className={style.text}>
                            Show All Users
                        </Typography>
                        <Link to='/show' >
                        <Button color='primary' variant='contained'>
                            View
                        </Button>
                        </Link>
                    </motion.div>
                </Grid>
                
                <Grid item >
                    <motion.div whileHover={{scale:1.2, boxShadow:'0px 0px 20px 5px rgba(0,0,0,0.35)', borderRadius:'10px'}} className={style.box}>
                        <Typography variant='h2' container='h2' className={style.text}>
                            Add A Users
                        </Typography>
                        <Link to='/add'> 
                            <Button color='primary' variant='contained'>
                                Add
                            </Button>
                        </Link>
                    </motion.div>
                </Grid>
                
            </Grid>
        </>
    )
}

export default HomePage
