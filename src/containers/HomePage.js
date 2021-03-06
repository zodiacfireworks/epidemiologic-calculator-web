import React, { useState } from 'react'
import { Container, Grid, Box, Divider, Link, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import FacebookIcon from '../components/icons/FacebookIcon'
import LinkedinIcon from '../components/icons/LinkedinIcon'
import GoogleIcon from '../components/icons/GoogleIcon'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import RegisterUser from '../components/RegisterUser/RegisterUser'

const useStyles = makeStyles((theme) => ({
  boxContent: {
    borderRadius: 17,
    backgroundColor: '#5ad6d6',
    padding: '80px 100px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  boxInfo: {
    color: '#FFF',
    width: 380,
    '& h1': {
      fontSize: '1.8em',
      fontWeight: 500,
    }
  },
  boxRight: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 17,
    padding: '30px 30px 52px',
  },
  boxForm: {
    maxWidth: 400,
  },
  btnTop: {
    textTransform: 'uppercase',
    fontSize: 12,
    marginBottom: 50,
    '& a': {
      display: 'inline-block',
      fontWeight: 600,
      borderRadius: 16,
      padding: '7px 30px',
    }
  },
  btnLeft:{
    border: '1px solid #ebebeb',
    backgroundColor: '#ebebeb',
    color: '#56cdcc',
    minWidth: 100,
    borderRadius: '16px 0 0 16px !important'
  },
  btnRight: {
    border: '1px solid #56cdcc',
    backgroundColor: '#56cdcc',
    color: '#FFF',
    marginLeft: -13
  },
  hr: {
    border: '1px solid #56cdcc',
    width: '100%',
    height: 0,
  },
  circle: {
    height: 10,
    width: 10,
    backgroundColor: '#56cdcc',
    borderRadius: '100%',
    boxShadow: 'inset 0px 0px 0px 2px #FFF',
    border: '10px solid #56cdcc',
    display: 'inline-block',
    marginTop: -15,
    marginBottom: 21,
  },
  socialMedia:{
    '& > *': {
      margin: theme.spacing(1.5),
    },
    '& .MuiIconButton-root': {
      color: '#545353',
      border: '1px solid #e2e1e1',
      padding: 6
    }
  },
}))
  
const HomePage = () => {
  const classes = useStyles()
  const [ showLogin, setShowLogin ] = useState(true)
  let form

  if (showLogin) {
    form = <Login />
  } else {
    form = <RegisterUser />
  }

  const handleClickShowLogin = () => {
    setShowLogin(true)
  }

  const handleClickShowRegister = () => {
    setShowLogin(false)
  }
  
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Header />
        <Box className={classes.boxContent}> 
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.boxInfo}>
                <h1>BIENVENIDO</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.boxRight}>
                <div className={classes.btnTop}>
                  <Link href="#" onClick={handleClickShowRegister} underline="none" className={classes.btnLeft}>Regístrate</Link>
                  <Link href="#" onClick={handleClickShowLogin} underline="none" className={classes.btnRight}>Iniciar sesión</Link>
                </div>

                <div className={classes.boxForm}>
                  { form }
                  
                  <Divider className={classes.hr} />
                  <div className={classes.circle}></div>

                  <div className={classes.socialMedia}>
                    <IconButton color="default" aria-label="google">
                      <GoogleIcon />
                    </IconButton>
                    <IconButton color="default" aria-label="facebook">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="default" aria-label="linkedin">
                      <LinkedinIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  )
}

HomePage.propTypes = {}

HomePage.defaultProps = {}

export default HomePage
