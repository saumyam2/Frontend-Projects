import React, {useState} from 'react'
import { Container,Typography,TextField,Box,Button,FormControlLabel,RadioGroup,Radio,FormLabel,Input,InputLabel,AppBar,Toolbar,IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuIcon from '@mui/icons-material/Menu';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    number1: 0,
};

const SignupPage = (props) => {

    const [gender, setGender] = useState('female');
    const [dob, setDob] = React.useState(dayjs('2022-04-17'));   

    const changeGender = (event) => {
      setGender(event.target.value);
    };

    const [RegisterSuccess, setRegisterSuccess] = useState(false);

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({ 
        initialValues,
        validationSchema: signupSchema,
        onSubmit : (values,e) => {
            console.log(values.name, values.email, values.password, values.number1);

            let data = JSON.stringify({
                "username": values.name,
                "email": values.email,
                "password": values.password,
                "mobile": values.number1  
              });
              
              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://fantasyleague-pl7o.onrender.com/user/newUser',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
            axios.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data)); 
            if(response.data.token){
                setRegisterSuccess(true);
            }            
            if(RegisterSuccess){
                alert("Successful registration!");
            }
            })
            .catch((error) => {
                console.log(error);
            });
            e.resetForm();
        },
    });
    
  return (    
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

        <Container fixed sx={{mt:1, width:'65%'}}>
        <Box sx={{display:'grid',border:2,boxShadow:7,backgroundColor:'white',borderRadius:2,gridTemplateColumns:'repeat(2, 1fr)',height:'fit-content'}}>

                <Box sx={{display:'flex',flexDirection:'column',gridColumn:'1/3'}} >

                    <form onSubmit={handleSubmit} action="">
                        <Box><Typography variant="h3" gutterBottom sx={{mt:2, ml:4}}> Sign Up </Typography></Box>

                        <Box><InputLabel sx={{mx:5}} htmlFor="name">Name</InputLabel> 
                        <Input sx={{mx:5}} value={values.name} id="name" name="name" onChange={handleChange} onBlur={handleBlur} />{errors.name && touched.name ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.name}</Box> : null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:1}} htmlFor="email">Email Address</InputLabel>
                        <Input sx={{mx:5}} value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name='email' />{errors.email && touched.email ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.email}</Box>: null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:1}} htmlFor="password">Password</InputLabel>
                        <Input sx={{mx:5}} type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} id="password" name='password' />{errors.password && touched.password ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.password}</Box>: null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:0.5}} htmlFor="confirm_password">Confirm Password</InputLabel>
                        <Input sx={{mx:5}} type='password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} id="confirm_password" name='confirm_password' />{errors.confirm_password && touched.confirm_password ? <Box sx={{mx:5, textTransform: 'capitalize',color:'red'}} className='form-error'>{errors.confirm_password}</Box>: null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:0.5}} htmlFor="phone">Phone Number</InputLabel>
                        <Input id="phone" name="phone" type="tel" value={values.number1} onChange={handleChange} onBlur={handleBlur}  sx={{mx:5,mt:1.5,mb:0}} /></Box>

                        <Box sx={{mt:1}}>
                        <FormLabel sx={{mx:5,mt:1}} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup sx={{mx:5}} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={gender} onChange={changeGender}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </Box>

                        <LocalizationProvider dateAdapter={AdapterDayjs}    >
                            <DatePicker sx={{mx:4, mt:3}}
                                label="Date of Birth"
                                value={dob}
                                onChange={(newValue) => setDob(newValue)}
                            />
                        </LocalizationProvider>

                        {/* <TextField id="age" label="Age" type="number" InputLabelProps={{shrink: true,}} variant="standard" sx={{mx:5,mt:1.5,mb:0}}/> */}

                        <Box sx={{mx:5,mt:2}}><Button type="submit" variant="contained">Submit</Button></Box>
                    </form>

                    {/* <Box sx={{textAlign:'end', mr:5, mt:0.5}}>
                        If you already have an account-  
                        <Link component="button" variant="body2" onClick={() => { props.setCurrForm('login')}}>
                            Log In 
                        </Link>
                    </Box> */}
                    <Box sx={{textAlign:'end', mr:5, mt:0.5}}>
                        <Typography variant="body2" >Already have an account?{' '}
                        <Link to="/LoginPage" style={{ textDecoration: 'none' }}>
                        Login
                        </Link>
                        </Typography>
                    </Box>            
                </Box>
                <Box sx={{overflow:'hidden',gridColumn:'4/8', display: { xs: 'none', sm: 'block' }}} ><img style={{height:'fit-content'}} src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww" alt="" /></Box>
                
        </Box>
        </Container>
    </div>

  );
}

export default SignupPage;