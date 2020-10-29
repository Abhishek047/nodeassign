import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserItem from './UserItem'

function ShowUser({users}) {
    return (
        <>
          <Grid container justify='center' spacing={4} alignItems='center'>
            {
                users.map((user) => (<Grid item key={user.id}> 
                                    <UserItem  user={user}/>
                                    </Grid>)
                     )
            }
         </Grid>  
        </>
    )
}

export default ShowUser
