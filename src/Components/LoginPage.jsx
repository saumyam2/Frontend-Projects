import React, { useState } from 'react';
import { Container,Typography,Box,Button,InputLabel,Input,InputAdornment,IconButton,FormControlLabel,Checkbox,AppBar,Toolbar } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas/loginSchema';

// const LOGIN_URL = '/auth';

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = (props) => {

  const navigate = useNavigate();
  const [RegisterSuccess, setRegisterSuccess] = useState(false);
  // const {setAuth} = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema: loginSchema, 
    onSubmit : (values,action) => {
      console.log(values.email, values.password); 
      let data = JSON.stringify({
        "email": "testuser@gmail.com",
        "password": "asdfghjkl"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://fantasyleague-pl7o.onrender.com/user/userLogin',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      // axios.post('/user/newLogin' , {email:values.email, password:values.password},{
      //   headers:{
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods': 'OPTIONS, POST',
      //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      //   'Content-Type': 'application/json'
      //   }
      // }) 
      // .then((response) => {
      //   console.log(response, values); 
      //   if(response.data.token){
      //     setRegisterSuccess(true);
      //   }            
      //   if(RegisterSuccess){
      //     setSuccess(true);
      //     alert("Successful registration!");
      //   }
      // })
      // .catch(error => {
      //   console.log(error);
      //   alert("Failed registration");
      // });
      action.resetForm();
    },
  });
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
          <Button onClick={() => navigate("/")}>Back to Home</Button>
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
                <Input name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} sx={{mx:5}} id="input-with-icon-adornment" startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment> } />{errors.email && touched.email ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.email}</Box>: null}

                <InputLabel sx={{mt:5, ml:7}} htmlFor="standard-adornment-password">Password</InputLabel>
                <Input sx={{mx:5}}
                    name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}
                    id="standard-adornment-password"
                    type={showPassword ? 'text':'password'}
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
                  }/>{errors.password && touched.password ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.password}</Box>: null}                
            
  
                <Box sx={{ml:5,mt:3}}><FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" /></Box>
  
                <Box sx={{ml:5,mt:2}} ><Button type='submit' variant="contained">Submit</Button></Box> 
              </form>
              {/* <Box sx={{textAlign:'end', mr:5,mt:5}}>
                  Want to make a New Account? 
                  <Link component="button" variant="body2" onClick={() => { props.setCurrForm('signup') }}> 
                       Sign Up 
                  </Link>  
              </Box> */}
              <Box sx={{textAlign:'end', mr:5,mt:5}}>
                <Typography variant="body2">Don't have an account?    
                <Link to="/SignupPage" style={{ textDecoration: 'none' }}>
                  Sign Up
                </Link>
                </Typography>
              </Box>
              </Box>
              <Box sx={{overflow:'hidden', gridColumnStart:3, gridColumnEnd:7 }} ><img style={{height:'100%'}} src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww" alt="" /></Box>  
              
          </Box>
          </Container>
      </div>
      ) }
      </>
    );
  }

export default LoginPage;