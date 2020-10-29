import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'


function Menu() {
    return (
        <>
            <AppBar position='static' 
            style={{display:"flex", flexFlow:'row', padding:'10px 20px'}}
            >
                <Link to='/'>
                    <Button
                    style={{
                        color:'#eaeaea'
                    }}>
                        Home
                    </Button>
                </Link>
                <Link to='/add'>
                    <Button
                    style={{
                        color:'#eaeaea'
                    }}>  
                        Add
                    </Button>
                </Link>
            </AppBar>   
        </>
    )
}

export default Menu
