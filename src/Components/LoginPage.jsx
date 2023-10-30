import React from 'react'
import { Container,Typography,Box,Button,InputLabel,Input,InputAdornment,IconButton,FormControlLabel,Checkbox } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import { Link } from 'react-router-dom';

// const LoginPage = (props) => {
function LoginPage() {
    var details = localStorage.getItem("values");
    details = JSON.parse(localStorage.getItem("values"));
    console.log("Details"+ details);
    console.log("Details"+ details.email);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault(); 
    }

    const initialValues = {
        email: "",
        password: "",
    };

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit : (values,action) => {
            console.log("login email"+values.email); 
            console.log("signup email"+details.email); 
            console.log("login pass"+values.password); 
            console.log("signup pass"+details.password); 
            if (values.email == details.email && values.password == details.password){
                alert("Logged in!");
            }else{
                alert("Submitted");
            }                
            action.resetForm();
        },
    });

  return (    
    <div>
        <Container fixed sx={{mt:16,width:'60%'}}>
            <Box sx={{display:'grid',border:2,boxShadow:7,backgroundColor:'white',borderRadius:2,gridTemplateColumns:'repeat(2, 1fr)',height:500}}>
                
            <Box sx={{display:'flex', flexDirection:'column',alignContent:'center',gridColumn:'1/3'}} >

            <form onSubmit={handleSubmit} action=''>
                <Typography variant="h3" gutterBottom sx={{mt:5, ml:4}}> Login Page </Typography>

                <InputLabel sx={{mt:5, ml:7}} htmlFor="input-with-icon-adornment"> Email Address </InputLabel>
                <Input name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} sx={{mx:5}} id="input-with-icon-adornment" startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment> } />{errors.email && touched.email ? <Box sx={{mx:5, textTransform: 'capitalize'}} className='form-error'>{errors.email}</Box>: null}

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
                    }
                />{errors.password && touched.password ? <Box sx={{mx:5, textTransform: 'capitalize'}} className='form-error'>{errors.password}</Box>: null}                

                <Box sx={{ml:5,mt:3}}><FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" /></Box>
                {console.log(values.email)} 

                <Box sx={{ml:5,mt:2}} ><Button type='submit' variant="contained">Submit</Button></Box>               
                {console.log(values.email)} 
            </form>
            {/* <Box sx={{textAlign:'end', mr:5,mt:5}}>
                Want to make a New Account? 
                <Link component="button" variant="body2" onClick={() => { props.onFormSwitch('signup') }}>
                    Sign Up 
                </Link>
            </Box> */}
            <Box sx={{textAlign:'end', mr:5,mt:5}}>
                Want to make a New Account? 
                <Link to="/signup">Sign Up</Link>
            </Box>
            {/* <Link href="/SignupPage" underline="hover" sx={{textAlign:'end', mr:2}}> 
                {'Sign Up if you haven\'t already'}
            </Link>
            </Box> */}

            <Box sx={{overflow:'hidden',gridColumn:'3/8'}} ><img style={{height:'100%'}} src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww" alt="" /></Box>  

            </Box>
            </Box>
        </Container>
    </div>

  )
}

export default LoginPage