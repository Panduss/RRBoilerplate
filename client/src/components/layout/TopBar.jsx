import React from 'react'
import {Button, Typography, Toolbar, AppBar} from '@material-ui/core';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

const TopBar = (props) => {
  const { location, history, user } = props

  return (
    <AppBar position="absolute" style={{zIndex:10}}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}}>
          Boilerplate with login and signup 
        </Typography>
        {
          user && location.pathname.indexOf('batches') > 0 &&
          <Button color="inherit"> Welcome, { user.name }! </Button>
        }

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        }
        {
          location.pathname.indexOf('login') > 0 &&
          <Button color="inherit" onClick={() => history.push('/signup')}>Sign up</Button>
        }
        {
          location.pathname.indexOf('batches/') > 0 &&
          <Button color="inherit" onClick={() => history.push('/batches')}>All Batches</Button>
        }
        {
          location.pathname.indexOf('batches') > 0 &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)