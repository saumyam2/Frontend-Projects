import React, { useRef, useState, useEffect,useContext } from 'react';
import AuthContext from '../Context/AuthProvider';
// import axios from '../api/axios';
import { Container,Typography,Box,Button,InputLabel,Input,InputAdornment,IconButton,FormControlLabel,Checkbox,AppBar,Toolbar,Modal } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const LOGIN_URL = '/auth';

const LoginPage = (props) => {
    // const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
  
    useEffect(() => {
      userRef.current.focus();
    }, [])
  
    useEffect(() => {
      setErrMsg('');
    }, [user, pwd])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.post('http://fantasyleague-pl7o.onrender.com/user/newLogin', {email:user, password:pwd},
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {console.log(response)})
      .catch(error => console.log(error));
      setPwd(''); 
      setUser('');
      setSuccess(true);


    //   try{
    //     const response = await axios.post(
    //       LOGIN_URL,
    //       JSON.stringify({ user, pwd }),
    //       {
    //         headers: { 'Content-Type': 'application/json' },
    //         withCredentials: true
    //       }
    //     );
    //     console.log(JSON.stringify(response?.data));
    //     console.log(JSON.stringify(response));
    //     const accessToken = response?.data?.accessToken;
    //     const roles = response?.data?.roles;
    //     setAuth({user,pwd,roles,accessToken})
    //     setUser('');
    //     setPwd('');
    //     setSuccess(true);
    //   } catch(err){
    //   if (!err?.response){
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 400){
    //     setErrMsg('Missing Username or Password');
    //   } else if (err.response?.status === 401){
    //     setErrMsg('Unauthorized');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
    // }
  }
  
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
  
    return ( 
      <>
      {success ? (
        <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome!
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
      </Box>
          <Container fixed sx={{mt:10,width:'60%'}}>
          <Box sx={{display:'flex',ml:15,border:2,boxShadow:7,backgroundColor:'white',borderRadius:2,flexDirection:'column'}}>
          <h1> You are logged in</h1>
          <br />
          <p>
          {/* <Link onClick={() => { props.setCurrForm('login')}}>Login</Link> */}
          <a href="src\Components\LoginPage.jsx">Go to HOME PAGE</a>
          </p>
          </Box>
          </Container>
        </div>
      ) : (

      <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome!
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container fixed sx={{mt:10,width:'60%'}}>
          <Box sx={{display:'grid',border:2,boxShadow:7,backgroundColor:'white',borderRadius:2,gridTemplateColumns:'repeat(2, 1fr)',height:500}}>
                 
              <Box sx={{display:'flex', flexDirection:'column', alignContent:'center',gridColumn:'1/3'}} >
  
              <form onSubmit={handleSubmit} action=''>
                  <Typography variant="h3" gutterBottom sx={{mt:5, ml:4}}> Login Page </Typography>
  
                  <InputLabel sx={{mt:5, ml:7}} htmlFor="input-with-icon-adornment"> Email Address </InputLabel>
                  <Input 
                      name='email'  
                      onChange={(e) => setUser(e.target.value)}
                      ref={userRef} 
                      value={user}
                      required 
                      sx={{mx:5}} 
                      id="input-with-icon-adornment" 
                      startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment> } 
                  />
  
                  <InputLabel sx={{mt:5, ml:7}} htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input sx={{mx:5}}
                      name='password'
                      type={showPassword ? 'text' : 'password'} 
                      id="standard-adornment-password"
                      startAdornment={<LockOutlinedIcon sx={{color:'action.active',mr:1,my: 0.5 }} />}
                      endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                      </InputAdornment>
                      }
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                  />            
  
                  <Box sx={{ml:5,mt:3}}><FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" /></Box>
                  {/* {console.log(values.email)}  */}
  
                  <Box sx={{ml:5,mt:2}} ><Button type='submit' variant="contained">Submit</Button></Box>               
                  {/* {console.log(values.email)}  */}
              </form>
              <Box sx={{textAlign:'end', mr:5,mt:5}}>
                  Want to make a New Account? 
                  
                  {/* <Link component="button" variant="body2" onClick={() => { props.onFormSwitch('signup') }}> */}
                  <Link component="button" variant="body2" onClick={() => { props.setCurrForm('signup') }}> 
                       Sign Up 
                  </Link>  
              </Box>
              </Box>
              <Box sx={{overflow:'hidden', gridColumnStart:3, gridColumnEnd:7}} ><img style={{height:'100%'}} src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww" alt="" /></Box>  
              
          </Box>
          </Container>
      </div>
      ) }
      </>
    );
  }

export default LoginPage;