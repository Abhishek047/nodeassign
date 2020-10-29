import React from 'react'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import BoxBg1 from '../imgs/BoxBg1.jpg'
import BoxBg2 from '../imgs/BoxBg2.jpg'

const useStyles = makeStyles({
    contain:{
      marginTop:'20vh',
    },
    box:{
        width:'min(300px,80vw)',
        height:'min(300px,80vw)',
        display:'flex',
        flexFlow:'column',
        borderRadius:'10px',
        color:'#eaeaea',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'0px 0px 10px 5px rgba(0,0,0,0.25)',
        marginLeft:'15px',
        padding:'20px',
    },
    box1:{
        backgroundBlendMode:'multiply',
        backgroundColor:'#555',
        background:`url(${BoxBg1})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
    box2:{
        backgroundBlendMode:'multiply',
        backgroundColor:'#555',
        background:`url(${BoxBg2})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
    },
    text:{
        marginBottom:'50px',
        fontWeight:'600',
        fontSize:'min(2em, 10vw)'
    }
})

function HomePage() {
const style = useStyles();

    return (
        <>        
            <Grid container direction='row' justify='center' alignItems='center' spacing={5} className={style.contain} >
                <Grid item >
                    <div className={`${style.box} ${style.box1}`}>
                        <Typography variant='h2' container='h2' className={style.text}>
                            Show All Users
                        </Typography>
                        <Link to='/show' >
                        <Button color='primary' variant='contained'>
                            View
                        </Button>
                        </Link>
                    </div>
                </Grid>
                
                <Grid item >
                    <div  className={`${style.box} ${style.box2}`}>
                        <Typography variant='h2' container='h2' className={style.text}>
                            Add A Users
                        </Typography>
                        <Link to='/add'> 
                            <Button color='primary' variant='contained'>
                                Add
                            </Button>
                        </Link>
                    </div>
                </Grid>
                
            </Grid>
        </>
    )
}

export default HomePage
