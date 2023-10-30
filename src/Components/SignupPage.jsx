import React, {useState,useEffect} from 'react'
import { Container,Typography,TextField,Box,Button,FormControlLabel,RadioGroup,Radio,FormLabel,Input,InputLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';
import { Link } from 'react-router-dom';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};


const SignupPage = (props) => {

    const [gender, setGender] = useState('female');
    const [dob, setDob] = React.useState(dayjs('2022-04-17'));

    const [items, setItem] = useState([]);
    useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
    }, [items]);

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit : (values,action) => {
            console.log(values); 
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem('values', JSON.stringify(values));
            action.resetForm();
        },
    });

    const changeGender = (event) => {
      setGender(event.target.value);
    };

  return (    
    <div>        
        <Container fixed sx={{mt:1, width:'65%'}}>
        <Box sx={{display:'grid',border:2,boxShadow:7,backgroundColor:'white',borderRadius:2,gridTemplateColumns:'repeat(2, 1fr)',height:'fit-content'}}>

                <Box sx={{display:'flex',flexDirection:'column',gridColumn:'1/3'}} >

                    <form onSubmit={handleSubmit} action="">
                        <Box><Typography variant="h3" gutterBottom sx={{mt:2, ml:4}}> Sign Up </Typography></Box>

                        <Box><InputLabel sx={{mx:5}} htmlFor="name">Name</InputLabel>
                        <Input sx={{mx:5}} value={values.name} onChange={handleChange} onBlur={handleBlur} id="name" name="name"/>{errors.name && touched.name ? <Box sx={{mx:5, textTransform: 'capitalize'}} className='form-error'>{errors.name}</Box>: null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:1}} htmlFor="email">Email Address</InputLabel>
                        <Input sx={{mx:5}} value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name='email' />{errors.email && touched.email ? <Box sx={{mx:5, textTransform: 'capitalize'}} className='form-error'>{errors.email}</Box>: null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:1}} htmlFor="password">Password</InputLabel>
                        <Input sx={{mx:5}} type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} id="password" name='password' />{errors.password && touched.password ? <Box sx={{mx:5, textTransform: 'capitalize'}} className='form-error'>{errors.password}</Box>: null}</Box>

                        <Box><InputLabel sx={{mx:5,mt:0.5}} htmlFor="confirm_password">Confirm Password</InputLabel>
                        <Input sx={{mx:5}} type='password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} id="confirm_password" name='confirm_password' />{errors.confirm_password && touched.confirm_password ? <Box sx={{mx:5, textTransform: 'capitalize'}} className='form-error'>{errors.confirm_password}</Box>: null}</Box>

                        <LocalizationProvider dateAdapter={AdapterDayjs}    >
                            <DatePicker sx={{mx:4, mt:3}}
                                label="Date of Birth"
                                value={dob}
                                onChange={(newValue) => setDob(newValue)}
                            />
                        </LocalizationProvider>

                        <TextField id="age" label="Age" type="number" InputLabelProps={{shrink: true,}} variant="standard" sx={{mx:5,mt:1.5,mb:0}}/>

                        <Box sx={{mt:1}}>
                        <FormLabel sx={{mx:5,mt:1}} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup sx={{mx:5}} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" value={gender} onChange={changeGender}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        </Box>
                        
                        <TextField id="phone_number" label="Phone Number" type="number" InputLabelProps={{shrink: true,}} variant="standard" sx={{mx:5,mt:1.5,mb:0}} />

                        <Box sx={{mx:5,mt:2}}><Button type="submit" variant="contained">Submit</Button></Box>
                    </form>

                    <Box sx={{textAlign:'end', mr:5, mt:0.5}}>
                        If you already have an account-  
                        <Link component="button" variant="body2" onClick={() => { props.onFormSwitch('login') }}>
                            Log In 
                        </Link>
                    </Box>
                    <Box sx={{textAlign:'end', mr:5,mt:5}}>
                        If you already have an account- 
                        <Link to="/signup">Login</Link>
                    </Box>
            
                </Box>
                {/* <Link href="/LoginPage">Log In</Link> */}
                <Box sx={{overflow:'hidden',gridColumn:'4/8'}} ><img style={{height:'fit-content'}} src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww" alt="" /></Box>
                
        </Box>
        </Container>
    </div>

  )
}

export default SignupPage